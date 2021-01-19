import csv
import datetime
import logging
import sqlite3
from io import StringIO
from flask import Flask, make_response
from flask import request
from werkzeug.utils import redirect

from api.repository import get_db, query_db, close_connection

# logging.basicConfig(level=logging.DEBUG)
logging.basicConfig(format='%(asctime)s - %(message)s', level=logging.DEBUG)

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
application = Flask(__name__, static_folder='../build', static_url_path='/')


@application.route('/')
def index():
    return application.send_static_file('index.html')


@application.route('/redirect')
def redirect_to():
    page_to = request.args.get('page_to')
    update_number_of_clicks(page_to)
    return redirect(dict_pages_to[page_to])


@application.route('/clickData')
def click_data():
    data_list = get_click_data()
    si = StringIO()
    cw = csv.writer(si)
    cw.writerows(data_list)
    output = make_response(si.getvalue())
    output.headers["Content-Disposition"] = "attachment; filename=export.csv"
    output.headers["Content-type"] = "text/csv"
    return output


@application.route('/reset')
def reset():
    reset_click_data()
    return application.send_static_file('index.html')


def update_number_of_clicks(page_to):
    found = False
    time = str(datetime.datetime.now())

    try:
        for page in query_db("select l.NumberOfClicks, l.page_to from labkits l where Page_to = ?;", [page_to], one=False):
            found = True
            logging.debug('%s has clicks %s', page[1], page[0])
            get_db().execute('''UPDATE labkits SET NumberOfClicks = ?, ClickedDate = ?
               WHERE Page_To = ?''', (page[0] + 1, time, page_to))
            get_db().commit()

        if not found:
            get_db().execute('''INSERT INTO labkits(NumberOfClicks, ClickedDate, Page_To) 
                    values (?, ?, ?)''', (1, time, page_to))
            get_db().commit()
    except sqlite3.Error as error:
        logging.error('Failed to update sqlite table %s', str(error))
        get_db().rollback()

    finally:
        close_connection()


def get_click_data():
    data_clicks = []
    try:
        for page in query_db("select l.page_to, l.NumberOfClicks from labkits l", one=False):
            logging.debug('Page is: %s', page)
            data_clicks.append((page[0] + "," + str(page[1])).split(","))

    except sqlite3.Error as error:
        logging.error('Failed to select sqlite table: %s', error.args[0])

    finally:
        close_connection()

    return data_clicks


def reset_click_data():
    try:
        get_db().execute("delete from labkits")
        get_db().commit()

    except sqlite3.Error as error:
        logging.error('Failed to delete sqlite table: %s', error.args[0])
        get_db().rollback()

    finally:
        close_connection()

