import './App.css';
import logo from './images/cinvoclogo.svg'; 
import phone from './images/phone.svg'; 
import home from './images/homeImg.svg'; 
import Footer from './components/Footer/Footer'; 
import Services from './components/Services';
import freeconsultation from './images/freeconsultation.png';
import makeIT from './images/makeIT.svg';


function App() {
  return (
    <div classNameName="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-white" >
  <a className="navbar-brand" style={{marginRight: "23rem"}} href="#">
   <img src={logo} width="83"  alt="logo" height="110" />
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
    <ul className="navbar-nav ">
      <li className="nav-item">
        <a className="nav-link " href="#" style={{color: "black", fontFamily: "Assistant" , fontWeight : "700" , fontSize: "19px" }}>Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" style={{color: "black", fontFamily: "Assistant" , fontWeight : "700" , fontSize: "19px"}}>About</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle btn-0 maxWi" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
style={{color: "black", fontFamily: "Assistant" , fontWeight : "700" , fontSize: "19px"}}
        >
          Services
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#" style={{color: "black", fontFamily: "Assistant" , fontWeight : "700" , fontSize: "19px"}}>Action</a>
          <a className="dropdown-item" href="#" style={{color: "black", fontFamily: "Assistant" , fontWeight : "700" , fontSize: "19px"}}>Another action</a>
          <a className="dropdown-item" href="#" style={{color: "black", fontFamily: "Assistant" , fontWeight : "700" , fontSize: "19px"}}>Something else here</a>
        </div>
        
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#" style={{color: "black", fontFamily: "Assistant" , fontWeight : "700" , fontSize: "19px"}}>
          Portfolio

        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#" style={{color: "black", fontFamily: "Assistant" , fontWeight : "700" , fontSize: "19px"}}>
          Blog
        </a>
      </li>
      
    </ul>
      {/* <li className="nav-item">
      <form class="form-inline my-2 my-lg-0 "> */}
    {/* </form>
    </li> */}
         <input class="form-control mr-sm-0"  style={{marginLeft: "25rem"}} type="text" placeholder="Search" aria-label="Search"/>
      <button class="btn  my-2 my-sm-0" style={{backgroundColor: "white"}} type="submit"><img src={phone} width="50"  alt="logo" height="50" /></button>
  </div>
</nav>


   <img src={home} width="100%"  alt="logo" height="600px" />
   <blockquote class="blockquote text-center" style={{marginTop: "147px"}}>
  <p class="mb-0" style={{fontFamily: "Assistant" , fontWeight : "900" , fontSize: "35px", color:"#F37024" ,textTransform: "capitalize"
}}>Our Aim: Providing overarching technology solutions.
</p>
    <p class="mb-0" style={{fontFamily: "Assistant" , fontWeight : "900" , fontSize: "35px", lineHeight: "70px"}}>our goal is to achieve your trust!</p>

</blockquote>
<div class="row justify-content-md-center" style={{marginTop: "40px" , width : "100vw" , marginBottom : "50px"}}>
    <div class="col col-lg-2" style={{borderRight :" 1px solid  #C4C4C4" ,marginBottom:"6px" , width : "100vw"}}>  
      <p class="mb-0" style={{fontFamily: "Assistant" , fontWeight : "900" , fontSize: "15px" ,textAlign: "center", fontStyle: "bold"}}>Years In
</p>
 <p class="mb-0" style={{fontFamily: "Assistant" , fontWeight : "900" , fontSize: "15px" ,textAlign: "center"}}>
experience</p>
 <p class="mb-0" style={{fontFamily: "Assistant" , fontWeight : "900" , fontSize: "45px", lineHeight: "70px" ,textAlign: "center" ,color:"#F37024"}}>5+</p>
    </div>
    <div class="col col-lg-2"><p class="mb-0" style={{fontFamily: "Assistant" , fontWeight : "900" , fontSize: "15px" ,textAlign: "center" ,borderRight :" 1px solid  #C4C4C4" , height  : "50vm" }}>Projects We
</p>
 <p class="mb-0" style={{fontFamily: "Assistant" , fontWeight : "900" , fontSize: "15px" ,textAlign: "center" ,borderRight :" 1px solid  #C4C4C4"}}>
Completed</p>
 <p class="mb-0" style={{fontFamily: "Assistant" , fontWeight : "900" , fontSize: "45px", lineHeight: "70px" ,textAlign: "center" ,color:"#F37024",borderRight :" 1px solid  #C4C4C4"}}>50+</p>

    </div>
    <div class="col col-lg-2"><p class="mb-0" style={{fontFamily: "Assistant" , fontWeight : "900" , fontSize: "15px" ,textAlign: "center" }}>Customer
</p>
 <p class="mb-0" style={{fontFamily: "Assistant" , fontWeight : "900" , fontSize: "15px" ,textAlign: "center" }}>
Satisfaction</p>
 <p class="mb-0" style={{fontFamily: "Assistant" , fontWeight : "900" , fontSize: "45px", lineHeight: "60px" ,textAlign: "center" ,color:"#F37024"}}>99%</p>
    </div>
  </div>







<Services />

{/* make IT */}
<div class="Container"    >
   <img src={makeIT}    width="100%"  alt="logo" height="400px" style={{marginBottom:"-10px"}} />
     <div class="centeredIT" style={{fontFamily: "Assistant" , fontWeight : "600" , fontSize: "40px", color:"white" ,textTransform: "capitalize" ,  top: "15%" 

}}>We Make IT
</div>
<div class="centeredIT" style={{fontFamily: "Assistant" , fontWeight : "600" , fontSize: "40px", color:"white" ,textTransform: "capitalize" ,  top: "30%" ,marginTop: "0%"

}}>Simple, Faster, And
</div>
<div class="centeredIT" style={{fontFamily: "Assistant" , fontWeight : "600" , fontSize: "40px", color:"white" ,textTransform: "capitalize" ,  top: "45%" ,marginTop: "0%"

}}>Less Expensive!
</div>
<div class="centeredIT" style={{  color:"white" ,textTransform: "capitalize" ,  top: "65%" ,marginTop: "0%",width : "10%"

}}><button type="button" class="btn btn-primary btn-sm"   style={{ color:"white" ,backgroundColor : "#F37024" ,borderColor : "#F37024" , width : "100%" ,  top: "60%",height :"5%",textAlign:"center" ,fontWeight : "500", borderRadius: "6px"
}}>Learn More</button>
</div>
</div>



{/* freeconsultation */}
<div class="Container" >
   <img src={freeconsultation}    width="100%"  alt="logo" height="200px" style={{backgroundColor : "#F37024" , marginBottom:"-6px"}} />

  
  <div class="centered" style={{fontFamily: "Assistant" , fontWeight : "600" , fontSize: "40px", color:"white" ,textTransform: "capitalize" ,  top: "30%"

}}>there are many other things we can do
</div>
<div class="centered" style={{fontFamily: "Assistant" , fontWeight : "50" , fontSize: "27px", color:"white" ,textTransform: "capitalize" ,marginTop: "-5%"
}}>get started to talk with us & get infinite services & free consultation.
</div></div>




{/* white area */}
<div class="container" style={{marginTop : "70px", marginBottom : "70px"  , height : "80px"}}>
  <div class="row">
    <div class="col-5" style={{fontFamily: "Assistant" , fontWeight : "350" , fontSize: "25px", color:"#F37024" ,textTransform: "capitalize"
}}>
      build a respected relation with us!
    </div>
    <div class="col-5">
     <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" style={{backgroundColor : "#F0F0F0" , borderColor : "#F0F0F0"}}/>
    </div>
    <div class="col-2">
<button type="button" class="btn btn-primary"   style={{ color:"white" ,backgroundColor : "#F37024" ,borderColor : "#F37024" , width : "70%" ,fontWeight : "500" ,borderRadius: "6px"
}}>send</button>
    </div>
  </div>
</div>

   <Footer/>

  </div>

  );
}

export default App;
