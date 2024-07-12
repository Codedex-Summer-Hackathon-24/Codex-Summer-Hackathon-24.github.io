import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // will add later

// importing images from their locations in the repo
import bobaimage.jpeg from 'src/assets/Food Images/boba-image.jpeg'; 
import crossiant.jpeg from 'src/assets/Food Images/crossiant.jpeg'; 
import desserts.jpg from 'src/assets/Food Images/desserts.jpg'; 
import drinks.jpg from 'src/assets/Food Images/drinks.jpg'; 
import fries.jpg from 'src/assets/Food Images/fries.jpg'; 
import latte.jpg from 'src/assets/Food Images/latte.jpg';
import panini.jpg from 'src/assets/Food Images/panini.jpg';
import sipnplay.jpg from 'src/assets/Food Images/sipnplay.jpg';
import drinkss2.jpg from 'src/assets/Food Images/drinkss2.jpg';


function FoodImageCarousel() {
  return (
    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
      <div>
        <img src="bobaimage.jpeg" alt="First slide" />
        <p className="legend">First Slide</p>
      </div>
      <div>
        <img src="crossiant.jpeg" alt="Second slide" />
        <p className="legend">Second Slide</p>
      </div>
      <div>
        <img src="desserts.jpg" alt="Third slide" />
        <p className="legend">Third Slide</p>
      </div>
      <div>
        <img src="drinks.jpg" alt="Fourth slide" />
        <p className="legend">Fourth Slide</p>
      </div>
      <div>
        <img src="fries.jpg" alt="Fifth slide" />
        <p className="legend">Fifth Slide</p>
      </div>
      <div>
        <img src="latte.jpg" alt="Sixth slide" />
        <p className="legend">Sixth Slide</p>
      </div>
      <div>
        <img src="panini.jpg" alt="Seventh slide" />
        <p className="legend">Seventh Slide</p>
      </div>
      <div>
        <img src="sipnplay.jpg" alt="Eigth slide" />
        <p className="legend">Eigth Slide</p>
      </div>
      <img src="drinkss2.jpg" alt="Ninth slide" />
        <p className="legend">Ninth Slide</p>
      </div>
      
    </Carousel>
  );
}

export default FoodImageCarousel;
