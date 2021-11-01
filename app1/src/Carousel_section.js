import { Grid } from '@material-ui/core'
import React from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './carousel_section.css';
import CarouselCard from './CarouselCard';


export const Carousel_section = () => {
	return (
		<Grid container >
			<Grid item xs={12} >
				<OwlCarousel item={5} autoplay={true} autoplayTimeout={3000} autoplayHoverPause={true} loop={true} margin={10} >
          <CarouselCard 
            imgSrc={`${process.env.PUBLIC_URL}/images/service_icon_01.png`} 
            heading="Best Teachers1" 
            paragraph="Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum."
          />
          <CarouselCard 
            imgSrc={`${process.env.PUBLIC_URL}/images/service_icon_01.png`} 
            heading="Best Teachers2" 
            paragraph="Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum."
          />
          <CarouselCard 
            imgSrc={`${process.env.PUBLIC_URL}/images/service_icon_01.png`} 
            heading="Best Teachers3" 
            paragraph="Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum."
          />
          <CarouselCard 
            imgSrc={`${process.env.PUBLIC_URL}/images/service_icon_01.png`} 
            heading="Best Teachers4" 
            paragraph="Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum."
          />
          <CarouselCard 
            imgSrc={`${process.env.PUBLIC_URL}/images/service_icon_01.png`} 
            heading="Best Teachers5" 
            paragraph="Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum."
          />
        </OwlCarousel>
			</Grid>
		</Grid>
	)
}
