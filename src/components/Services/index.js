import React from 'react' 
import './index.css';
import ellipse from '../../images/ellipse.png'
import Rectangle from '../../images/Rectangle.svg'
import iOS from '../../images/iOS.svg'
import android from '../../images/android.svg'
import webDevelopment from '../../images/webDevelopment.svg'
import QA from '../../images/QA.svg'
import support from '../../images/support.svg'
import graphicdesign from '../../images/graphicdesign.svg'


const Services = () => {
  return (
    <div>
      <div class="Container"    >

       <div class="row1" class="image3" style={{boxSizing: "border-box" , borderRadius :"300px" }}>
  <div class="column" style={{backgroundColor:"white" ,boxSizing: "border-box",borderBottomLeftRadius :"10px" }}>
    <div style={{  textAlign :"left"}}>
    <img src={graphicdesign}    alt="logo" style={{height:"50px" }} />
    <h2 style={{ color:"black" }}>graphic design</h2>
    <p style={{color:"#808080"}}>Get anything to design & expand your business reach worldwide.
</p>
</div>
  </div>
  <div class="column" style={{backgroundColor:"white" }}>
      <div style={{  textAlign :"left"}}>
    <img src={QA}    alt="logo" style={{height:"50px" }} />

    <h2 style={{ color:"black" }}>QA & testin</h2>
    <p style={{color:"#808080"}}>The scalable QA approach to optimize the structure, stability, and the growth of software.
</p>
</div>
  </div>
  <div class="column" style={{backgroundColor:"white"}}>
     <div style={{  textAlign :"left"}}>
    <img src={support}    alt="logo" style={{height:"50px" }} />

    <h2 style={{ color:"black" }}>support</h2>
    <p style={{color:"#808080"}}>do a session with us to grow your business
</p>
</div>
  </div>
</div>
        
              {/* <img src={Rectangle}  class="image2"  alt="logo"  /> */}
       
       <div class="row" class="image2">
  <div class="column" style={{backgroundColor:"white", textAlign: "left" ,borderTopLeftRadius :"10px"}}>
        <img src={android}    alt="logo"  style={{height:"50px" }}/>

    <h2 style={{ color:"black" }}>android</h2>
    <p style={{fontFamily: "Assistant" , fontWeight : "200" , fontSize: "15px", lineHeight: "20px" ,textAlign: "left" ,color:"#808080"}}>   Get built intuitive apps to expand your business reach worldwide.</p>
  </div>
  <div class="column" style={{backgroundColor:"white"}}>
        <div style={{ textAlign: "left"}}>
    <img src={iOS}    alt="logo" style={{height:"50px" }} />

    <h2 style={{ color:"black" }}>iOS</h2>
    <p style={{color:"#808080"}}> Get built intuitive apps to expand your business reach worldwide.
</p>
</div>
  </div>
  <div class="column" style={{backgroundColor:"white" ,borderTopRightRadius:"10px"}}>
            <div style={{ textAlign: "left"}}>
    <img src={webDevelopment}    alt="logo" style={{height:"50px" }} />
    <h2 style={{ color:"black" }}>web development </h2>
    <p style={{color:"#808080"}}>Get built intuitive website to expand your business reach worldwide.
</p>
      </div>

  </div>
</div>




      <img src={ellipse} class="image1"  width="100%"  alt="logo" height="800px" style={{marginBottom:"-6px"}}/>


           <div class="centeredIT" style={{fontFamily: "Assistant" , fontWeight : "600" , fontSize: "40px", color:"white" ,textTransform: "capitalize" ,  top: "2%" 

}}>Our Services
</div>
<div class="centeredIT" style={{fontFamily: "Assistant" , fontWeight : "600" , fontSize: "40px", color:"white" ,textTransform: "capitalize" ,  top: "7%" ,marginTop: "0%"

}}>Here Is Our Services We Boost Up Your
</div> 
<div class="centeredIT" style={{fontFamily: "Assistant" , fontWeight : "600" , fontSize: "40px", color:"white" ,textTransform: "capitalize" ,  top: "11%" ,marginTop: "0%"

}}>Business!
</div>   
<div class="centeredIT" style={{  color:"white" ,textTransform: "capitalize" ,  top: "20%" ,marginTop: "0%",width : "7%"

}}><button type="button" class="btn btn-primary btn-sm"   style={{ color:"white" ,backgroundColor : "#212222" , width : "100%" ,  top: "30%",height :"5%",textAlign:"center" ,fontWeight : "500",fontSize : "60%" ,borderRadius: "6px"
}}>Explore More</button>
</div>
  </div>


 

      <div className='circle'>
      {/* Services */}
      </div>
      </div>
  )
}

export default Services;