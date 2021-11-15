import './home.css';
import React from 'react';
const Abouthtml = () => {
    return (
        <center>
            <div class="about-us" id="startchange">
                <div class="container-fluid">
                <div class="row text-center">
                    <div class="descript col-xs-12 col-sm-12 col-md-12">
                        <a name="about" href="#k"><h1>ABOUT KOVILPATTI</h1></a>
                    <p class="about-us-p">
                        <font face="Arial" size="5%" color="#e6e6e6">
                                Kovilpatti is located at 9.17°N 77.87°E. It has an average elevation of 106 metres (347 feet).
                            Located 100 km south of Madurai, 55 km north of Tirunelveli and 60 km north-west of Tuticorin,
                            Kovilpatti is situated on National Highway No. 07 NH 7, which connects Srinagar in the north and
                            Kanyakumari in the south. The town lies approximately 130 m above mean sea level.
                                The town is spread around an area of 49 square kilometres (19 sq mi) and had a
                            population of 95,097 in 2011 with the urban agglomeration having a population of around Three Lakhs.
                                The town already existed before 1876.
                            Kovilpatti was a water stop for steam engines after the introduction of the Southern Railways,
                            and the establishment of textile mills like Loyal Textiles (1891) and Lakshmi Mills Ltd (1926)
                            fueled the economic growth of the town. The Government Revenue divisional offices were sited there in 1911.
                            The town was constituted as a Municipal Town in 1964 composed of Kovilpatti Village and Illuppaiyurani Village.
                        </font>
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </center>
    );
  };
function About() {
    return (
        <div>
        <Abouthtml/>
        </div>
    );
}

export default About;