from .extensions import db

class Book(db.Model):
    __tablename__ = 'books'

    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(20), nullable = False)
    author = db.Column(db.String(20), nullable = False)
    year = db.Column(db.Integer, nullable = False)

    def as_dict(self):
        return {
            'id': self.id,
            'title': self.title, 
            'author': self.author,
            'year': self.year
        }


class Order(db.Model):
    __tablename__ = 'orders'
    
    id = db.Column(db.Integer, primary_key = True)
    quantity = db.Column(db.Integer, nullable = False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    book_id = db.Column(db.Integer, db.ForeignKey('books.id'), nullable=False)

    def as_dict(self):
        return {
            'id': self.id,
            'quantity': self.quantity, 
            'user': self.user_id,
            'book': self.book_id
        }


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String(50), unique = True, nullable = False)
    password = db.Column(db.String(50), nullable = False)

    def as_dict(self):
        return {
            'id': self.id,
            'email': self.email, 
            'password': self.password,
        }