import './home.css';
import React from 'react';
const Footerhtml = () => {
    return (
        <div class="footer-dark">
            <footer>
                <a name="contact"></a>
                <div class="container">
                    <div class="col item social">
                        <a href="https://www.facebook.com/kovilpatticity/"><i class="fa fa-facebook"></i></a>
                        <a href="https://instagram.com/kovilpatti_city"><i class="fa fa-instagram"></i></a>
                        <a href = "mailto:kovilpatticity21@gmail.com?subject = Feedback&body = Message"><i class="fa fa-envelope"></i></a>
                    </div>
                </div>
                <div class="container" >
                    <div class="col item social">
                        <center>
                        <p> <a href="#home"><font face="Arial" size="5%" color="#e6e6e6">Back to Top</font></a></p>
                        </center>
                    </div>
                </div>
            </footer>   
        </div>
    );
  };
function Footer() {
    return (
        <div>
        <Footerhtml/>
        </div>
    );
}

export default Footer;