import './home.css';
import React from 'react';
import under_construction from './under_construction.png';
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
                <img class="comingsoon" src={under_construction} alt="Under Construction"></img>
                </center>
            </div>);
  };
function Home() {
    return (
        <div>
        <div dangerouslySetInnerHTML={{ __html: myHTML }}/>
        <Homeimg/>
        </div>
    );
}

export default Home;