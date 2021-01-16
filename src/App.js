import React from 'react';
import './App.css';
import Card from './components/card';

class App extends React.Component {

  state = {
    items: []
  };


  setItems = () => {
    this.setState({
      items: [
        {
          "cardTitled": "LetsGetChecked",
          "cardText": "The most sensitive at home test, as seen in an FDA study.",
          "cardImage": "https://lgcassets.com/v-481/assets/3.0/images/products/home-coronavirus-test/420x420.webp",
          "cardRedirect": "LetsGetChecked"
        },
        {
          "cardTitled": "Everlywell",
          "cardText": "Test for SARS-CoV-2 infection easily without having to visit an in-person test site. Collect your sample at home and ship it free for secure digital results within 24-72 hours of the lab receiving your sample. A telehealth consult is available to guide you through your next steps.",
          "cardImage": "https://images.ctfassets.net/ydyvnem5zkxh/2YHq8mrkE3LhSzUABt1TNo/43bd643319161f856e164b5800a3957f/COVID_Box_Transparent.png?w=600&h=400&q=75&fm=webp",
          "cardRedirect": "Everlywell"
        },
        {
          "cardTitled": "LetsGetChecked",
          "cardText": "The most sensitive at home test, as seen in an FDA study.",
          "cardImage": "https://lgcassets.com/v-481/assets/3.0/images/products/home-coronavirus-test/420x420.webp",
          "cardRedirect": "LetsGetChecked"
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
            <Card cardTitle={item.cardTitle}
              cardText={item.cardText}
              cardImage={item.cardImage}
              cardRedirect={item.cardRedirect} />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
