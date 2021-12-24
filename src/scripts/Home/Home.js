import './../Css/home.css';
import React from 'react';
import Queenbee from '../Queenbee/Queenbee';
const myHTML = `<div class="headerout">
<a name="home" class="logo">KOVILPATTI CITY</a>
<div class="header-right">
  <a class="active" href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
</div>
</div>
`;
const Homeimg = () => {
    return (<div>
                <center>
                <img class="comingsoon" src="https://i.ibb.co/thRxMyh/logo.png" alt="Under Construction"></img>
                </center>
            </div>);
  };
function Home() {
    return (
        <div>
        <div dangerouslySetInnerHTML={{ __html: myHTML }}/>
        <Homeimg/>
        <center><Queenbee/></center>
        </div>
    );
}

export default Home;