import './App.css';
import logo from './images/cinvoclogo.svg'; 
import phone from './images/phone.svg'; 
import home from './images/homeImg.svg'; 
import Footer from './Footer'; 
import Services from './components/Services';

function App() {
  return (
    <div classNameName="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <a className="navbar-brand" style={{marginRight: "23rem"}} href="#">
   <img src={logo} width="83"  alt="logo" height="110" />
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
    <ul className="navbar-nav ">
      <li className="nav-item">
        <a className="nav-link " href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle btn-0 maxWi" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

        >
          Services
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
        
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#">
          Portfolio

        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#">
          Blog
        </a>
      </li>
      
    </ul>
      {/* <li className="nav-item">
      <form class="form-inline my-2 my-lg-0 "> */}
    {/* </form>
    </li> */}
  </div>

      <input class="form-control mr-sm-0"  style={{marginLeft: "25rem"}} type="text" placeholder="Search" aria-label="Search"/>
      <button class="btn  my-2 my-sm-0" style={{backgroundColor: "white"}} type="submit"><img src={phone} width="50"  alt="logo" height="50" /></button>
</nav>
   <img src={home} width="100%"  alt="logo" height="600px" />
   <blockquote class="blockquote text-center" style={{marginTop: "147px"}}>
  <p class="mb-0" style={{fontFamily: "Assistant" , fontWeight : "550" , fontSize: "35px", color:"#F37024" ,textTransform: "capitalize"
}}>Our Aim: Providing overarching technology solutions.
</p>
    <p class="mb-0" style={{fontFamily: "Assistant" , fontWeight : "550" , fontSize: "35px", lineHeight: "70px"}}>our goal is to achieve your trust!</p>

</blockquote>
<div class="row justify-content-md-center" style={{marginTop: "80px"}}>
    <div class="col col-lg-2">  
      <p class="mb-0" style={{fontFamily: "Assistant" , fontWeight : "550" , fontSize: "15px" ,textAlign: "center", fontStyle: "bold"}}>Years In
</p>
 <p class="mb-0" style={{fontFamily: "Assistant" , fontWeight : "550" , fontSize: "15px" ,textAlign: "center"}}>
experience</p>
 <p class="mb-0" style={{fontFamily: "Assistant" , fontWeight : "700" , fontSize: "35px", lineHeight: "70px" ,textAlign: "center" ,color:"#F37024"}}>5+</p>
    </div>
    <div class="col col-lg-2"><p class="mb-0" style={{fontFamily: "Assistant" , fontWeight : "550" , fontSize: "15px" ,textAlign: "center"}}>Projects We
</p>
 <p class="mb-0" style={{fontFamily: "Assistant" , fontWeight : "550" , fontSize: "15px" ,textAlign: "center"}}>
Completed</p>
 <p class="mb-0" style={{fontFamily: "Assistant" , fontWeight : "700" , fontSize: "35px", lineHeight: "70px" ,textAlign: "center" ,color:"#F37024"}}>50+</p>

    </div>
    <div class="col col-lg-2"><p class="mb-0" style={{fontFamily: "Assistant" , fontWeight : "550" , fontSize: "15px" ,textAlign: "center"}}>Customer
</p>
 <p class="mb-0" style={{fontFamily: "Assistant" , fontWeight : "550" , fontSize: "15px" ,textAlign: "center"}}>
Satisfaction</p>
 <p class="mb-0" style={{ fontWeight : "700" , fontSize: "35px", lineHeight: "70px" ,textAlign: "center" ,color:"#F37024"}}>99%</p>
    </div>
  </div>


<Services />
   <Footer/>

  </div>
   
 
 
  );
}

export default App;
