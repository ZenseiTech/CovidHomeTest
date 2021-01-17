import datetime
import sys
import sqlite3

from flask import Flask
# from flask_cors import CORS
from werkzeug.utils import redirect
from flask import request

# lt --port 5000 --subdomain labkits

from api.repository import get_db, query_db, close_connection


dict_pages_to = {
            'Everlywell': 'https://www.everlywell.com/products/covid-19-test/',
            'LetsGetChecked': 'https://www.letsgetchecked.com/us/en/home-coronavirus-test/',
            'Picture_by_Fulgent_Genetics':'https://picturegenetics.com/covid19',
            'Pixel_by_LabCorp': 'https://www.pixel.labcorp.com/covid-19',
            'Vitagene': 'https://vitagene.com/products/covid-19-saliva-test-kit/',
            'P23LABS': 'https://p23labs.com/covid-19-kit',
            'Vault_Health': 'https://www.vaulthealth.com/COVID',
            'For_Hers': 'https://www.forhers.com/covid-test',
            'Phosphorus': 'https://www.phosphorus-c19-pcr.com/order-now/p/covid-19-rt-qpcr-test'
}


# app = Flask(__name__)
app = Flask(__name__, static_folder='../build', static_url_path='/')


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/redirect')
def redirect_to():
    page_to = request.args.get('page_to')
    update_number_of_clicks(page_to)
    return redirect(dict_pages_to[page_to])


def update_number_of_clicks(page_to):
    found = False;
    time = str(datetime.datetime.now())

    try:
        for page in query_db("select l.NumberOfClicks, l.page_to from labkits l where Page_to = ?;", [page_to], one=False):
            found = True
            print(page[1], 'has clicks', page[0])
            get_db().execute('''UPDATE labkits SET NumberOfClicks = ?, ClickedDate = ?
               WHERE Page_To = ?''', (page[0] + 1, time, page_to))
            get_db().commit()


        if not found:
            get_db().execute('''INSERT INTO labkits(NumberOfClicks, ClickedDate, Page_To) 
                    values (?, ?, ?)''', (1, time, page_to))
            get_db().commit()
    except sqlite3.Error as error:
        print("Failed to update sqlite table", error)
        get_db().rollback()

    finally:
        close_connection()

# if(__name__ == '__main__'):
#     print("====>" + str(sys.path))
#     app.run(debug = True)
