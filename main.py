import sys
from api.api import app

if(__name__ == '__main__'):
    print("====>" + str(sys.path))
    app.run(debug = True)
    # app.run(port=80, debug = True)
    # app.run(ssl_context='adhoc')
    # app.run(ssl_context='adhoc', port=443)