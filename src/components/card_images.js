import React from 'react';

const images = (props) => {
    return (
        <div className="img-fluid">
          <img src={props.card_image} width="90" height="75" />
        </div>
    );
};

export default images;

