import React from 'react'
import './CarouselCard.css'
const CarouselCard = ({imgSrc,heading, paragraph}) => {
	return (
        <div className="item" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/service_item_bg.jpg`}}>
			<div className="icon">
        <img src={imgSrc} alt="" />
			</div>
			<div className="down-content">
        <h4>{heading}</h4>
        <p>{paragraph}</p>
			</div>
		</div>
	)
}

export default CarouselCard
