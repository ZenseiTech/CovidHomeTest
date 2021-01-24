import React from 'react';
import './App.css';
import Card from './components/card';

class App extends React.Component {

  state = {
    items: []
  };


  setItems = () => {
    let apiServer = window.location.href;
    const apiUrl = "redirect?page_to=";

    this.setState({
      items: [
        {
          "id": 1,
          "cardTitled": "Everlywell",
          "cardText": "Test for SARS-CoV-2 infection easily without having to visit an in-person test site. Collect your sample at home and ship it free for secure digital results within 24-72 hours of the lab receiving your sample. A telehealth consult is available to guide you through your next steps.",
          "cardImage": "https://images.ctfassets.net/ydyvnem5zkxh/2YHq8mrkE3LhSzUABt1TNo/43bd643319161f856e164b5800a3957f/COVID_Box_Transparent.png?w=600&h=400&q=75&fm=webp",
          "cardRedirect": apiServer + apiUrl + "Everlywell",
          "price": "$109.00",
          "images": "../images/48_hour_72_hours_turnaround_time.png,../images/fda_approved.png,../images/clia_certified.png"
        },
        {
          "id": 2,
          "cardTitled": "LetsGetChecked",
          "cardText": "The most sensitive at home test, as seen in an FDA study.",
          "cardImage": "https://lgcassets.com/v-481/assets/3.0/images/products/home-coronavirus-test/420x420.webp",
          "cardRedirect": apiServer + apiUrl + "LetsGetChecked",
          "price": "$119.00",
          "images": "../images/48_hour_turnaround_time.png,../images/fda_approved.png,../images/clia_certified.png"
        },
        {
          "id": 3,
          "cardTitled": "Picture by Fulgent Genetics",
          "cardText": "Test for coronavirus from home-simply, safely, reliably.",
          "cardImage": "https://picturegenetics.com/assets/shop/parenting-box.png",
          "cardRedirect": apiServer + apiUrl + "Picture_by_Fulgent_Genetics",
          "price": "$109.00",
          "images": "../images/48_hour_turnaround_time.png,../images/fda_approved.png,../images/clia_certified.png"
        },
        {
          "id": 4,
          "cardTitled": "Pixel by LabCorp",
          "cardText": "Safe and trusted testing available at no upfront cost to you.",
          "cardImage": "https://www.pixel.labcorp.com/sites/default/files/field/image/blog_post/covid-19_thumbnail_v4.jpg",
          "cardRedirect": apiServer + apiUrl + "Pixel_by_LabCorp",
          "price": "$0.00",
          "images": "../images/fda_approved.png"
        },
        {
          "id": 5,
          "cardTitled": "Vitagene",
          "cardText": "The First FDA Emergency Use Authorized at-home COVID-19 Saliva test. Includes FedEx Overnight Shipping to the Lab and an official lab report. Can be used for travel in many circumstances.",
          "cardImage": "https://cdn-vitagene.pressidium.com/wp-content/uploads/2020/08/covid-19-test-kit-main-shdw.png",
          "cardRedirect": apiServer + apiUrl + "Vitagene",
          "price": "$117.00",
          "images": "../images/48_hour_72_hours_turnaround_time.png,../images/fda_approved.png,../images/clia_certified.png"
        },
        {
          "id": 6,
          "cardTitled": "P23 LABS",
          "cardText": "Order your P23 at-home covid-19 collection kit for testing",
          "cardImage": "https://www.jotform.com/uploads/p23labs/form_files/P23%20site%20logo.5f0a9237db6bc7.22534928.jpg",
          "cardRedirect": apiServer + apiUrl + "P23LABS",
          "price": "Unknown",
          "images": "../images/fda_approved.png"
        },
        {
          "id": 7,
          "cardTitled": "Vault Health",
          "cardText": "We have teamed up with Infinity BiologiX and Spectrum Solutions to offer saliva testing in your home for the novel coronavirus, SARS-CoV-2, the virus that causes COVID-19.",
          "cardImage": "https://www.vaulthealth.com/static/images/covid/hero-covid-test.jpg",
          "cardRedirect": apiServer + apiUrl + "Vault_Health",
          "price": "119.00",
          "images": "../images/fda_approved.png"
        },
         {
          "id": 8,
          "cardTitled": "For Hers",
          "cardText": "This at-home kit tests for COVID-19 without invasive swabs or having to visit an in-person test site. Start by telling us about your symptoms to help determine if this test is right for you before you're charged.",
          "cardImage": "https://res.cloudinary.com/forhims/image/upload/q_auto,f_auto,fl_lossy/Hims-d-Covid-PDP-Hero-03",
          "cardRedirect": apiServer + apiUrl + "For_Hers",
          "price": "150.00",
          "images": "../images/fda_approved.png"
        },
         {
          "id": 9,
          "cardTitled": "Phosphorus",
          "cardText": "The Phosphorus qPCR test is validated to detect active SARS-CoV-2 virus in individuals experiencing symptoms of COVID-19. After an online medical screen, your at-home sample collection kit will be shipped to you. Samples are processed in our Secaucus, NJ laboratory and we aim to make them available within 72 hours from receipt.",
          "cardImage": "https://images.squarespace-cdn.com/content/v1/5ed7b880ff76d55e5f18e6f5/1606252112856-5T3862TSG99C0MGLSWFG/ke17ZwdGBToddI8pDm48kJE4MoaoPpgv4LNotVtbieF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s2R59z2HWVKMNU9GXmUK4X5kVZLrUvUGmN9hO26jUWKKIKuvOYrPn_rqsrHe2ljWA/open+kit.jpg?format=500w",
          "cardRedirect": apiServer + apiUrl + "Phosphorus",
          "price": "155.00",
          "images": "../images/fda_approved.png"
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
        <div className="site-tittle"><a href="https://zenseitechnologies.com/" rel="home">ZenSei Technologies</a></div>
        <div className="site-header"><img src="../images/company_image.png" width="200" height="90" /></div>
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
              images={item.images}
             />
          ))}
        </div>
        <div className="site-info"><a href="https://zenseitechnologies.com/" rel="home">ZenSei Technologies</a></div>
      </main>
    );
  }
}

export default App;
