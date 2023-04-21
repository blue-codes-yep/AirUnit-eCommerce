from flask import Blueprint
from flask import jsonify

main = Blueprint("main", __name__)


@main.route("/")
def index():
    return "Hello, World!"


@main.route("/products")
def products():
    # Code to retrieve and return list of products from the database
    return jsonify(products)