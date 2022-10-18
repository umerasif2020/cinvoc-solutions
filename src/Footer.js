import React from 'react'
import './CSS/footer.css';
import logo from './images/cinvocLogoBottom.svg'; 
import fb from './images/fb.png';
import instagram from './images/instagram.png';
import twitter from './images/twitter.png';

export default function Footer() {
  return (
    <div>
        <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
 <img src={logo} width="200"  alt="logo" height="200"  style={{ marginTop: "-34px"}} />
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Company</h4>
  	 			<ul>
  	 				<li><a href="#">Home</a></li>
  	 				<li><a href="#">About</a></li>
  	 				<li><a href="#">Services</a></li>
  	 				<li><a href="#">Portfolio</a></li>
  	 				<li><a href="#">Blog</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Talk</h4>
  	 			<ul>
  	 				<li><a href="#">+92(323)4474387</a></li>
  	 				<li><a href="#">hr@cinvoc.com</a></li>
  	 				
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Follow Cinvoc</h4>
  	 			<div class="social-links" >
					{/* <a href="#"><i class="fab fa-instagram"></i></a>
  	 				<a href="#"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a> */}

					<img src={fb}  width={"35"} height={"35"}  alt="facebook" />
					<img src={instagram} width={"35"} height={"35"} style={{marginLeft : "20px"}} alt="instagram"/>
					<img src={twitter} width={"35"} height={"35"} style={{marginLeft : "20px"}} alt="twitter" />
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    </div>
  )
}
