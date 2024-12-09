from flask import Blueprint, request, jsonify
from ..extensions import db, jwt
from ..models import User
from flask_jwt_extended import create_access_token

users_bp = Blueprint("users", __name__)

@users_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    if not data or not data["email"] or not data["password"]:
        return jsonify({"error" : "Missing data"}), 400
    
    email = data["email"]
    password = data["password"]
    
    user = User.query.filter_by(email = email, password = password).first()

    if not user:
        return jsonify({"error" : "No user found"}), 404
    
    token = create_access_token(identity = str(user.id))

    return jsonify(access_token = token), 200

@users_bp.route('/register', methods=['POST'])
def register():
    user = request.get_json()
    if not user["email"] or not user["password"]:
        return jsonify({"error" : "Missing data"}), 400
    
    email = user["email"]
    password = user["password"]
    
    newUser = User(email = email, password = password)

    db.session.add(newUser)
    db.session.commit()

    return jsonify({'id' : newUser.id}), 201