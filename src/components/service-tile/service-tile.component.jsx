import React from "react";

//styles
import "./service-title.styles.scss";

const ServiceTile = ({ img, description }) => (
	<div className='service-tile'>
		<div className='img-container'>
			<img
				className='service-tile-image'
				src={img}
				alt='Visual of service offered'
			/>
		</div>
		<div className='description-container'>
			<p className='service-description'>{description}</p>
		</div>
	</div>
);

export default ServiceTile;
