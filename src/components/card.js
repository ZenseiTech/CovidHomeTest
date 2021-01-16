import React from 'react';


const card = (props) => {
    const redirect = `./redirect?page_to='${props.cardRedirect}`;
    return (
        <div className="row mb-3 themed-grid-col">
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{props.cardTitle}</h5>
                    <p className="card-text">
                        {props.cardText}
                    </p>
                    <img className="img-fluid" src={props.cardImage} />
                </div>
            </div>
            <div className="col-md-4">
                <div className="card-body">
                    <a href={redirect} className="btn btn-primary">ORDER NOW</a>
                    <p>
                        <br />$119.00
                    </p>
                </div>
            </div>
        </div>
    );
}

export default card;