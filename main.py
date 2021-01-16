import sys
from flask import Flask
from api.api import app

if(__name__ == '__main__'):
    print("====>" + str(sys.path))
    app.run(debug = True)