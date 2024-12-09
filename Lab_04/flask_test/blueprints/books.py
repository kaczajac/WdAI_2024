from flask import Blueprint, request, jsonify
from ..extensions import db, jwt
from ..models import Book
from flask_jwt_extended import jwt_required

books_bp = Blueprint('books', __name__)

# Routes

@books_bp.route("/", methods=['GET'])
def getAllBooks():
    if request.method == 'GET':
        allBooks = Book.query.all()
        result = []
        for book in allBooks:
            result.append(book.as_dict())
        return jsonify(result), 200
    

@books_bp.route("/<int:bookID>", methods=['GET'])
def getBook(bookID):
    if request.method == 'GET':
        book = Book.query.filter_by(id = bookID).first()
        if not book:
            return jsonify({'error' : f'No book found'}), 404
            
        return jsonify(book.as_dict())

     
@books_bp.route("/", methods=['POST'])
@jwt_required()
def addBook():
    if request.method == 'POST':
        book = request.get_json()
        if not book or not book["title"] or not book["author"] or not book["year"]:
            return jsonify({'error' : f'Missing data: title, author, year'}), 400
        
        newBook = Book(title = book["title"],
                        author = book["author"],
                        year = book["year"])
        
        db.session.add(newBook)
        db.session.commit()

        return jsonify({'id' : newBook.id}), 201


@books_bp.route("/<int:bookID>", methods=['DELETE'])
@jwt_required()
def deleteBook(bookID):
    if request.method == 'DELETE':
        book = Book.query.filter_by(id=bookID).first()
        if not book:
            return jsonify({'error' : f'No book found'}), 404
        
        db.session.delete(book)
        db.session.commit()

        return jsonify({'message' : f'Book with id {bookID} has been deleted'}), 204