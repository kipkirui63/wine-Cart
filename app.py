from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS


app = Flask(__name__)
#app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://win_e1_app_user:u1IAmbprNtRfLsPT4dRvBaW459s7pOFD@dpg-ckn7lbh1rp3c739i37j0-a.ohio-postgres.render.com/win_e1_app'
db = SQLAlchemy(app)
migrate = Migrate(app, db)

CORS(app)
from routes import *

if __name__ == '__main__':
    app.run(debug=True)