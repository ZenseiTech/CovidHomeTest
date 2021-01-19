import sys
from api.api import application

if(__name__ == '__main__'):
    print("====>" + str(sys.path))
    application.debug = True
    application.run()
    # app.run(debug = True)
    # app.run(port=80, debug = True)
    # app.run(ssl_context='adhoc')
    # app.run(ssl_context='adhoc', port=443)