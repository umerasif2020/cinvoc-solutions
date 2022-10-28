import React from 'react'
import './index.css';
import ellipse from '../../images/ellipse.png'
import Rectangle from '../../images/Rectangle.svg'

const Services = () => {
  return (
    <div>
      <div class="Container"    >
              <img src={Rectangle}  class="image2"  alt="logo"  />

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

}}><button type="button" class="btn btn-primary btn-sm"   style={{ color:"white" ,backgroundColor : "#212222" ,borderColor : "#212222" , width : "100%" ,  top: "30%",height :"5%",textAlign:"center" ,fontWeight : "500",fontSize : "60%" ,borderRadius: "6px"
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