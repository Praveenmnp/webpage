import React from 'react';
//import SimpleImageSlider from "react-simple-image-slider";
import './Queenbee.css';
import AliceCarousel from 'react-alice-carousel';
//import "react-alice-carousel/lib/alice-carousel.css";

/*
const images = [
    { url: 'https://i.ibb.co/JqVF9CW/bee1.jpg' },
    { url: 'https://i.ibb.co/qFD58gH/bee2.jpg' },
    { url: 'https://i.ibb.co/hV34wJg/bee3.jpg' },
    { url: 'https://i.ibb.co/z2RDQxM/bee4.jpg' },
    { url: 'https://i.ibb.co/HBq9Bbg/bee5.jpg' },
    { url: 'https://i.ibb.co/7vQn08g/Whats-App-Image-2021-12-19-at-4-56-51-PM.jpg' },
    { url: 'https://i.ibb.co/X7yL73L/Whats-App-Image-2021-12-19-at-4-56-52-PM-1.jpg' },
    { url: 'https://i.ibb.co/C8mSbW6/Whats-App-Image-2021-12-19-at-4-56-52-PM.jpg' },
    { url: 'https://i.ibb.co/bKJgjy8/Whats-App-Image-2021-12-19-at-4-56-53-PM-1.jpg' },
    { url: 'https://i.ibb.co/Yc09KB5/Whats-App-Image-2021-12-19-at-4-56-53-PM.jpg' },
    { url: 'https://i.ibb.co/7pknLqD/Whats-App-Image-2021-12-19-at-4-56-54-PM-1.jpg' },
    { url: 'https://i.ibb.co/L6D3f1H/Whats-App-Image-2021-12-19-at-4-56-54-PM.jpg' },
    { url: 'https://i.ibb.co/qRBjxVy/Whats-App-Image-2021-12-19-at-4-56-55-PM-1.jpg' },
    { url: 'https://i.ibb.co/tBwtGG3/Whats-App-Image-2021-12-19-at-4-56-55-PM.jpg' },
    { url: 'https://i.ibb.co/vLnfy8m/Whats-App-Image-2021-12-19-at-4-56-56-PM-1.jpg' },
    { url: 'https://i.ibb.co/whm1Rqq/Whats-App-Image-2021-12-19-at-4-56-56-PM.jpg' },
    { url: 'https://i.ibb.co/SKVszHd/Whats-App-Image-2021-12-19-at-4-56-57-PM-1.jpg' },
    { url: 'https://i.ibb.co/fF3Td68/Whats-App-Image-2021-12-19-at-4-56-58-PM.jpg' },
  ];
*/

function Queenbee() {
    return (
        <div class="slide"> 
            <center>
            <font face="Comic sans MS" size=" 6" color="#e6e6e6">Daddy's Queen Bee</font><br />
            <font face="Comic sans MS" size=" 3" color="#e6e6e6">DEC 26 @Ester Mahal Kovilpatti</font><br />
            <font face="Comic sans MS" size=" 2" color="#e6e6e6">[9AM to 6PM]</font><br /><br/><br/>
                <AliceCarousel autoPlay autoPlayInterval="3000">
                    <img src='https://i.ibb.co/f1fcPrk/bee1.jpg' className="sliderimg"/>
                    <img src='https://i.ibb.co/qFD58gH/bee2.jpg' className="sliderimg"/>
                    <img src='https://i.ibb.co/hV34wJg/bee3.jpg' className="sliderimg"/>
                    <img src='https://i.ibb.co/z2RDQxM/bee4.jpg' className="sliderimg"/>
                    <img src='https://i.ibb.co/HBq9Bbg/bee5.jpg' className="sliderimg"/>
                    <img src='https://i.ibb.co/7vQn08g/Whats-App-Image-2021-12-19-at-4-56-51-PM.jpg' className="sliderimg"/>
                    <img src='https://i.ibb.co/X7yL73L/Whats-App-Image-2021-12-19-at-4-56-52-PM-1.jpg' className="sliderimg"/>
                    <img src='https://i.ibb.co/bKJgjy8/Whats-App-Image-2021-12-19-at-4-56-53-PM-1.jpg' className="sliderimg"/>
                    <img src='https://i.ibb.co/Yc09KB5/Whats-App-Image-2021-12-19-at-4-56-53-PM.jpg' className="sliderimg"/>
                    <img src='https://i.ibb.co/7pknLqD/Whats-App-Image-2021-12-19-at-4-56-54-PM-1.jpg' className="sliderimg"/>
                    <img src='https://i.ibb.co/L6D3f1H/Whats-App-Image-2021-12-19-at-4-56-54-PM.jpg' className="sliderimg"/>
                </AliceCarousel>

            </center>
        </div>
    );
}

export default Queenbee;