from . import db


class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), index=True)
    price = db.Column(db.Float)
    description = db.Column(db.String(256))

    def __repr__(self):
        return "<Product {}>".format(self.name)
