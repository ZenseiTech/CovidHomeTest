import React from 'react';
import './App.css';
import Card from './components/card';

class App extends React.Component {

  state = {
    items: []
  };


  setItems = () => {
    const apiServer= "http://localhost:5000";
    const apiUrl= "/redirect?page_to=";

    this.setState({
      items: [
        {
          "id": 1,
          "cardTitled": "LetsGetChecked",
          "cardText": "The most sensitive at home test, as seen in an FDA study.",
          "cardImage": "https://lgcassets.com/v-481/assets/3.0/images/products/home-coronavirus-test/420x420.webp",
          "cardRedirect": apiServer + apiUrl + "LetsGetChecked",
          "price": "$119.00"
        },
        {
          "id": 2,
          "cardTitled": "Everlywell",
          "cardText": "Test for SARS-CoV-2 infection easily without having to visit an in-person test site. Collect your sample at home and ship it free for secure digital results within 24-72 hours of the lab receiving your sample. A telehealth consult is available to guide you through your next steps.",
          "cardImage": "https://images.ctfassets.net/ydyvnem5zkxh/2YHq8mrkE3LhSzUABt1TNo/43bd643319161f856e164b5800a3957f/COVID_Box_Transparent.png?w=600&h=400&q=75&fm=webp",
          "cardRedirect": apiServer + apiUrl + "Everlywell",
          "price": "$109.00"
        },
        {
          "id": 3,
          "cardTitled": "Picture by Fulgent Genetics",
          "cardText": "Test for coronavirus from home-simply, safely, reliably.",
          "cardImage": "https://picturegenetics.com/assets/shop/parenting-box.png",
          "cardRedirect": apiServer + apiUrl + "Picture_by_Fulgent_Genetics",
          "price": "$109.00"
        },
      ]
    });
  }

  componentDidMount() {
    this.setItems();
  }

  render() {
    return (

      <main>
        <div className="main">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search Kits" />
            <div className="input-group-append">
              <button className="btn btn-secondary" type="button">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="container">
          {this.state.items.map(item => (
            <Card cardTitled={item.cardTitled}
              cardText={item.cardText}
              cardImage={item.cardImage}
              cardRedirect={item.cardRedirect}
              price={item.price}
             />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
