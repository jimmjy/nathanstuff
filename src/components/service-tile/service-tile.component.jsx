import React from 'react';

//styles 
import './service-title.styles.scss';

const ServiceTile = ({ img, description }) => <div className="service-tile">
    <img className="service-tile-image" src={img} alt="Visual of service offered" />
    <p className="service-description">{description}</p>
</div>

export default ServiceTile;