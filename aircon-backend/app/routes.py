from flask import Blueprint, jsonify, request
from .models import db, User
from . import create_app

main = Blueprint("main", __name__)


@main.route("/")
def index():
    response = {
        "message": "Hello, World!",
        "products": [
            # Code to retrieve and return list of products from the database?
        ],
    }
    return jsonify(response)


@main.route("/products")
def products():
    # Code to retrieve and return list of products from the database
    return jsonify(products)


@main.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")

    if not username or not email or not password:
        return jsonify({"message": "All fields are required"}), 400

    existing_user = User.query.filter(User.email == email).first()

    if existing_user:
        return jsonify({"message": "User with this email already exists"}), 400

    user = User(username=username, email=email)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()

    return jsonify({"message": "User successfully registered"}), 201
