from flask import Blueprint, request, jsonify
from ..extensions import db, jwt
from ..models import Order, User, Book
from flask_jwt_extended import jwt_required, get_jwt_identity

orders_bp = Blueprint('orders', __name__)

@orders_bp.route('/<int:userID>', methods=['GET'])
def getOrders(userID):
    if request.method == 'GET':
        user = User.query.filter_by(id=userID).first()
        if not user:
            return jsonify({'message' : f'User not found'}), 404
        
        orders = Order.query.filter_by(user_id=userID).all()
        result = []
        for order in orders:
            result.append(order.as_dict())
        return jsonify(result), 200
    
@orders_bp.route('/', methods=['POST'])
@jwt_required()
def addOrder():
    order = request.get_json()
    userID = int(get_jwt_identity())
    if not order["quantity"] or not order["book_id"]:
        return jsonify({"error" : "Missing data"}), 400
    
    book = Book.query.filter_by(id = order["book_id"]).first()
    if not book:
        return jsonify({'error' : f'No book found'}), 404
    
    newOrder = Order(quantity = order["quantity"],
                     book_id = order["book_id"],
                     user_id = userID)
    
    db.session.add(newOrder)
    db.session.commit()

    return jsonify({'id' : newOrder.id}), 201

@orders_bp.route('/<int:orderID>', methods=['DELETE'])
@jwt_required()
def deleteOrder(orderID):
    if request.method == 'DELETE':
        order = Order.query.get(orderID).first()
        if not order:
            return jsonify({'error' : f'No book found'}), 404
        
        db.session.delete(order)
        db.session.commit()

        return jsonify({'message' : f'Order of id {orderID} has been deleted'}), 204
    
@orders_bp.route('/<int:orderID>', methods=['PATCH'])
@jwt_required()
def updateOrder(orderID):
    data = request.get_json()
    order = Order.query.get(orderID).first()
    if not order:
        return jsonify({'error' : f'No order found'}), 404
    
    if data["quantity"]:
        order.quantity = data['quantity']
    db.session.commit()
    return jsonify({'message' : f'Order of id {orderID} has been updated'}), 200
    
    
    
