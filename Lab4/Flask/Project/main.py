import sys
from flask import Flask, jsonify, request, render_template, redirect, url_for

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column

from flask_marshmallow import Marshmallow

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] =  "sqlite:///demo.sqlite"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db = SQLAlchemy(app)
class Base(DeclarativeBase):
    pass

class Person(db.Model):
    id: Mapped[int] = mapped_column(db.Integer,
    primary_key=True)
    name: Mapped[str] = mapped_column(db.String)
    surname: Mapped[str] = mapped_column(db.String)
    job: Mapped[str] = mapped_column(db.String)

ma = Marshmallow(app)
class PersonSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Person

@app.route("/")
def home():
    return render_template("index.html")

@app.route('/users', methods=['POST'])
def index():
    if request.method == 'POST':
        _name = request.form['name']
        _surname = request.form['surname']
        _job = request.form['job']
        db.session.add(Person(name = _name, surname = _surname, job = _job))
        db.session.commit()
        return redirect(url_for('home'))

@app.route('/findName', methods=['GET', 'POST'])
def findName():
    if request.method == 'GET':
        nameToFind = request.args['findName']
        results = db.session.query(Person).filter(Person.name == nameToFind)
        s = "People matching query: "
        for r in results:
            s+=str(r.__dict__)

        return render_template("index.html", str=s)
    
with app.app_context():
    db.drop_all()
    db.create_all()
    db.session.add(Person(name="ser",surname="serowy",job='it'))
    db.session.commit()
if __name__ == "__main__":
    app.run()