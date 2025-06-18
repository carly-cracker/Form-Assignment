from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_restful import Api, Resource
from models import db, User
import config

app = Flask(__name__)
app.config.from_object(config)

db.init_app(app)
migrate = Migrate(app, db)
CORS(app)
api = Api(app)

class Register(Resource):
    def post(self):
        data = request.get_json()
        username = data.get("username")
        password = data.get("password")
        email = data.get("email")
        first_name = data.get("first_name")
        last_name = data.get("last_name")


        if not username or not password:
            return {"message": "Username and password are required"}, 400

        if User.query.filter_by(username=username).first():
            return {"message": "Username already exists"}, 400

        user = User(username=username, email=email, first_name=first_name, last_name=last_name)
        user.set_password(password)

        db.session.add(user)
        db.session.commit()

        return {"message": "User registered successfully"}, 201
api.add_resource(Register, '/register')
class Login(Resource):
    def post(self):
        data = request.get_json()
        user = User.query.filter_by(username=data['username']).first()

        if not user or not user.check_password(data['password']):
            return {"message": "Invalid credentials"}, 401

        return {"message": "Login successful"}, 200

api.add_resource(Login, '/login')

if __name__ == '__main__':
    app.run(debug=True)
