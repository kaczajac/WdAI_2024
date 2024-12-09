from flask import Flask
from .extensions import db, jwt
from .blueprints.books import books_bp
from .blueprints.orders import orders_bp
from .blueprints.users import users_bp
from datetime import timedelta

def create_app():
    app = Flask(__name__)

    app.config['SECRET_KEY'] = 'MY_SECRET_KEY'

    # Database
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///library.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)

    # JWT
    app.config['JWT_SECRET_KEY'] = 'MY_SECRET_JWT_KEY'
    app.config['JWT_TOKEN_LOCATION'] = ['headers']
    app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(minutes=15)
    jwt.init_app(app)

    # Blueprints
    app.register_blueprint(books_bp, url_prefix = '/api/books')
    app.register_blueprint(orders_bp, url_prefix = '/api/orders')
    app.register_blueprint(users_bp, url_prefix = '/api')

    with app.app_context():
        db.create_all()

    return app