import React from 'react';
import Images from './card_images';

const card = (props) => {
    
    return (
        <div className="row mb-3 themed-grid-col">
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{props.cardTitled}</h5>
                    <p className="card-text">
                        {props.cardText}
                    </p>
                    <img className="img-fluid" src={props.cardImage} width="350" height="350" />
                </div>
            </div>
            <div className="col-md-4">
                <div className="card-body">
                    <a href={props.cardRedirect} className="btn btn-primary">ORDER NOW</a>
                    <p>
                        <br />{props.price}
                    </p>
                </div>
            </div>
            {props.images.split(",").map(item => (
                <Images card_image={item}/>
          ))}
            
        </div>
    );
}

export default card;