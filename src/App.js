import React from 'react';
import './App.css';
import logos from './images/logos.jpg';
import Rectangle from './images/Rectangle.png';
import Vector from './images/airbnb.png';
import Frame1 from './images/Frame@2x.png';
import Frame2 from './images/Frame.png';
import Frame3 from './images/FrameNine.png';
import Frame4 from './images/FrameTen.png';
import Frame5 from './images/FrameEleven.png';
import Frame6 from './images/FrameTwelf.png';
import Frame7 from './images/FrameThirteen.png';
import Frame8 from './images/FrameNin.png';
import Frame9 from './images/FrameTT.png';
import Frame10 from './images/FrameH.png';
import Frame11 from './images/FrameFT.png';
import Frame12 from './images/FrameFi.png';
import Frame13 from './images/FrameST.png';
import Frame14 from './images/FrameSET.png';
import Frame15 from './images/FrameEIGHT.png';
import Frame16 from './images/FrameTW.png';
import Frame17 from './images/FrameTWTO.png'
import Frame18 from './images/FrameTWFOUR.png';
import Frame19 from './images/FrameTWFIFE.png';
import { FaAlignRight, FaAngleDown, FaArrowDown, FaBeer, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaVimeo } from 'react-icons/fa';
import { Button, Card, Carousel, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Slider from "react-slick";
const App = () => {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 560,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <div className="App">
     
       <div className="container-fluid">
       <Navbar expand="lg">
  <Navbar.Brand  href="#home"><img src={logos} alt="" /></Navbar.Brand>
  <Navbar.Toggle style={{background:"white"}} aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto p-3">
      <Nav.Link className="text-white" href="#home">Work hub <FaAngleDown/></Nav.Link>
      <Nav.Link className="text-white" href="#link">Login</Nav.Link>
      
    </Nav>
    <Form   inline>
      <Button variant="primary">Get started</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
<div className="container-fluid">
<div className="displaY">
  <h1 className="text-white text-center" id="H1">
  Work gets disjointed. Scattered. People feel <br/>
  isolated. Qatalog brings order to the chaos—to show <br/>
  folks their work in a new light.
  </h1>
  <div className="img">
    <img src={Rectangle} alt="" className="img-fluid w-100"/>
  </div>
</div>
</div>
<div className="display ">
  <h4 className="text-white">
    You're not alone
  </h4>
  <h5 className="text-secondary">
    The pains of work are real
  </h5>
  <div className="container mt-4">
  <Slider {...settings}>
 <div>
 <Card className="col-12" style={{ width: '18rem',background:"#555151" }}>
  <Card.Body>
    <Card.Title><img className="w-50" src={Vector} /></Card.Title>
    <Card.Subtitle className=" text-muted p-3 py-3" style={{color:"#949494",fontSize:"1.2rem"}}>I recently had to jump on 10+ different calls across eight different countries to find the right owner and escalation process.</Card.Subtitle>
    <Card.Text  style={{color:"#949494"}}>
    Francesca Ceseracciu <br/>
    Head of Hotels EMEA
    </Card.Text>
  </Card.Body>
</Card>
          </div>
          <div>
          <Card  className="col-12" style={{ width: '18rem',background:"#1CFFE4" }}>
  <Card.Body>
    <Card.Title><img className="w-50" src={Frame1} /></Card.Title>
    <Card.Subtitle style={{color:"#292929",fontSize:"1.2rem"}} className="text-muted p-1 py-4">We spend about 45 minutes every day invested in processes for updates and keeping everybody in sync.</Card.Subtitle>
    <Card.Text className="p-2"  style={{color:"#292929"}}>
    Fabrizio Caracausi <br/>
    Product
    </Card.Text>
  </Card.Body>
</Card>
          </div>
          <div>
          <Card className="col-12" style={{ width: '18rem',background:"#555152" }}>
  <Card.Body>
    <Card.Title><img className="w-50" src={Frame2} /></Card.Title>
    <Card.Subtitle className=" text-muted p-2 py-2"  style={{color:"#949494",fontSize:"1.2rem"}}>We deliver on such an expansive innovation agenda with so many projects going on at any time, it can be hard to maintain momentum.</Card.Subtitle>
    <Card.Text   style={{color:"#949494"}}>
    Patrick Osborne <br/>
    Vice President
    </Card.Text>
  </Card.Body>
</Card>
          </div>
          <div>
          <Card className="col-12" style={{ width: '18rem',background:"#555151" }}>
  <Card.Body>
    <Card.Title><img className="w-50" src={Vector}/></Card.Title>
    <Card.Subtitle className="text-muted p-3 py-3" style={{color:"#949494",fontSize:"1.2rem"}}>I recently had to jump on 10+ different calls across eight different countries to find the right owner and escalation process.</Card.Subtitle>
    <Card.Text style={{color:"#949494"}}>
    Francesca Ceseracciu <br/>
    Head of Hotels EMEA
    </Card.Text>
  </Card.Body>
</Card>
          </div>
          <div>
          <Card  className="col-12" style={{ width: '18rem',background:"#1CFFE4" }}>
  <Card.Body>
    <Card.Title><img className="w-50" src={Frame1} /></Card.Title>
    <Card.Subtitle style={{color:"#292929",fontSize:"1.2rem"}} className=" text-muted p-1 py-4">We spend about 45 minutes every day invested in processes for updates and keeping everybody in sync.</Card.Subtitle>
    <Card.Text  className="p-2" style={{color:"#292929"}}>
    Fabrizio Caracausi <br/>
    Product
    </Card.Text>
  </Card.Body>
</Card>
          </div>
          <div>
          <Card  className="col-12" style={{ width: '18rem',background:"#555152" }}>
  <Card.Body>
    <Card.Title><img className="w-50" src={Frame2} /></Card.Title>
    <Card.Subtitle className=" text-muted p-2 py-2"  style={{color:"#949494",fontSize:"1.2rem"}}>We deliver on such an expansive innovation agenda with so many projects going on at any time, it can be hard to maintain momentum.</Card.Subtitle>
    <Card.Text   style={{color:"#949494"}}>
    Patrick Osborne <br/>
    Vice President
    </Card.Text>
  </Card.Body>
</Card>
          </div>
          <div>
          <Card className="col-12" style={{ width: '18rem',background:"#555151" }}>
  <Card.Body>
    <Card.Title><img className="w-50" src={Vector}/></Card.Title>
    <Card.Subtitle className=" text-muted p-3 py-3" style={{color:"#949494",fontSize:"1.2rem"}}>I recently had to jump on 10+ different calls across eight different countries to find the right owner and escalation process.</Card.Subtitle>
    <Card.Text  style={{color:"#949494"}}>
    Francesca Ceseracciu <br/>
    Head of Hotels EMEA
    </Card.Text>
  </Card.Body>
</Card>
          </div>
          <div>
          <Card  className="col-12" style={{ width: '18rem',background:"#1CFFE4" }}>
  <Card.Body>
    <Card.Title><img className="w-50" src={Frame1} /></Card.Title>
    <Card.Subtitle style={{color:"#292929",fontSize:"1.2rem"}} className=" text-muted p-1 py-4">We spend about 45 minutes every day invested in processes for updates and keeping everybody in sync.</Card.Subtitle>
    <Card.Text className="p-2"  style={{color:"#292929"}}>
    Fabrizio Caracausi <br/>
    Product
    </Card.Text>
  </Card.Body>
</Card>
          </div>
          <div>
          <Card className="col-12 " style={{ width: '18rem',background:"#555152" }}>
  <Card.Body>
    <Card.Title><img className="w-50" src={Frame2} /></Card.Title>
    <Card.Subtitle  style={{color:"#949494",fontSize:"1.2rem"}} className=" text-muted p-2 py-2"> We deliver on such an expansive innovation agenda with so many projects going on at any time, it can be hard to maintain momentum.</Card.Subtitle>
    <Card.Text  style={{color:"#949494"}}>
    Patrick Osborne <br/>
    Vice President
    </Card.Text>
  </Card.Body>
</Card>
          </div>
 </Slider>
  </div>
  <div className="container mt-5">

  <h4 className="text-white text-center">
  It's time for a new way of work
  </h4>
  <h5 className="text-secondary text-center">
  All your people, teams, and tools, and none of the noise
  </h5>

  <div className="row">
    <img className="img-fluid" src={Frame3} alt="" />
  </div>
  <div className="row">
    <img  className="img-fluid"  src={Frame4} alt=""/>
  </div>
  <div className="row">
    <img  className="img-fluid"  src={Frame5} alt=""/>
  </div>
  </div>
  <div className="container mt-5">
  <h4 className="text-white text-center">
  Visibility that centers your day
  </h4>
  <h5 className="text-secondary text-center">
  A front page for work
  </h5>
  <div className="row ">
    <img className="cenetr img-fluid " src={Frame6} alt=""/>
  </div>

  <h4 className="text-white text-center ">
 The critical ingredients of a work hub
  </h4>
  <div className="row justify-content-around ">
    <div className="col-lg-3 col-md-5 col-12 bac">
      <div className="d-flex">
        <img className="img-fluid w-50 mr-3" src={Frame7} alt=""/>
        <div>
          <p className="text-white">
          Directory
          </p>
          <p className="text-secondary">
          Find work info on all your people and teams
          </p>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-5 col-12 bac">
    <div className="d-flex">
        <img className="img-fluid w-50  mr-3" src={Frame11} alt=""/>
        <div>
          <p className="text-white">
          Projects
          </p>
          <p className="text-secondary">
          Track activity across teams and tools
          </p>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-5 col-12 bac">
    <div className="d-flex">
        <img className="img-fluid w-50  mr-3" src={Frame12} alt=""/>
        <div>
          <p className="text-white">
          Search
          </p>
          <p className="text-secondary">
          Search across all your connected tools
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="row justify-content-around mt-2">
    <div className="col-lg-3 col-md-5 col-12 bac">
    <div className="d-flex">
        <img className="img-fluid w-50  mr-3" src={Frame13} alt=""/>
        <div>
          <p className="text-white">
          Goals
          </p>
          <p className="text-secondary">
          Set and track goals that are visible to everyone
          </p>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-5 col-12 bac">
    <div className="d-flex">
        <img className="img-fluid w-50  " src={Frame14} alt=""/>
        <div>
          <p className="text-white">
          Posts
          </p>
          <p className="text-secondary">
          Share one-to-many posts in the right channels
          </p>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-5 col-12 bac">
    <div className="d-flex">
        <img className="img-fluid w-50  " src={Frame15} alt=""/>
        <div>
          <p className="text-white">
          Workflows
          </p>
          <p className="text-secondary">
          Easily document, assign, and track processes
          </p>
        </div>
      </div>
    </div>
  </div>
  

 
  </div>
 
  <div className="container mt-5">
<h4 className="text-white text-center" >
  Secure and private
  </h4>

  <div className="row mt-5 justify-content-around">
    <div className="col-lg-3 col-md-6 col-12">
      <img className="img-fluid cenetr mb-3" src={Frame8} alt=""/>
      <p className="text-secondary text-center">
      GDPR & CCPA compliant
      </p>
    </div>
    <div className="col-lg-3 col-md-6 col-12">
      <img className="img-fluid cenetr mb-3" src={Frame16} alt=""/>
      <p className="text-secondary text-center">
      Pen-tested
      </p>
    </div>
    <div className="col-lg-3 col-md-6 col-12 ">
      <img className="img-fluid cenetr  " src={Frame17} alt=""/>
      
      <p className="text-secondary text-center mt-3">
      SSL-Certified
      </p>
    </div>
  </div>

  <div className="row mt-5">
    <img src={Frame9} alt="" className="img-fluid cenetr  "/>
  </div>
</div>
<h1 className="text-white text-center mt-5">
The missing connectivity <br/> for your team.
</h1>
<button className="btn btn-primary mt-5">
  Step up my work hub
</button>
</div>
<div className="container mt-5">
  <p className="text-secondary text-center">
    Official partner
  </p>
  <img src={Frame10} alt="" className="img-fluid cenetr"/>
</div>
       </div>

       <footer className="mt-5">
       <div className="container">
       <div className="row">

<div className="col-lg-6 col-md-6 col-12">
  <div className="Flex">
    <div className="mb-5">
    <img className="img-fluid" src={Frame18} alt=""/>

    </div>
    <div>
    <img className="img-fluid" src={Frame19} alt=""/>

    </div>
  </div>
</div>
<div className="col-lg-6 col-md-6 col-12">
<div className="row">
<div className="col-lg-4 col-md-6 col-12">
    <h5 className="text-secondary  mb-3">
      Product
    </h5>
    <ul>
      <li>
        <a href="#">Directory</a>
      </li>
      <li>
        <a href="#">Projects</a>
      </li>
      <li>
        <a href="#">Search</a>
      </li>
      <li>
        <a href="#">Workflows</a>
      </li>
      <li>
        <a href="#">Goals</a>
      </li>
      <li>
        <a href="#">Posts</a>
      </li>
      <li>
        <a href="#">Ingegrations</a>
      </li>
    </ul>
  </div>
  <div className="col-lg-4 col-md-6 col-12">
   
  <h5 className="text-secondary  mb-3">
      Product
    </h5>
    <ul>
      <li>
        <a href="#">Who we are</a>
      </li>
      <li>
        <a href="#">Manifesto</a>
      </li>
      <li>
        <a href="#">our language</a>
      </li>
      <li>
        <a href="#">Pricing</a>
      </li>
      <li>
        <a href="#">Newsroom</a>
      </li>
      <li>
        <a href="#">Careers</a>
      </li>
      <li>
        <a href="#">Contact sales</a>
      </li>
    </ul>
   </div>
   <div className="col-lg-4 col-md-12 col-12">
   <h5 className="text-secondary  mb-3">
      Product
    </h5>
    <ul>
      <li>
        <a href="#">Blog</a>
      </li>
      <li>
        <a href="#">Help center</a>
      </li>
      <li>
        <a href="#">Templates</a>
      </li>
      <li>
        <a href="#">Newsletter</a>
      </li>
    </ul>
   </div>
</div>
</div>
  
</div>

<div className="mt-3">
 <div className="row">
 <div className="col-lg-7 col-md-12 col-12 ">
         <p className="text-secondary P">
           Copyright @ 2021Qatalog Ltd.All rights reserved.
         </p>
       </div>
     <div className="col-lg-5 col-md-12 col-12 row justify-content-around A">
       <a href="#">Privacy</a>
       <a href="#">Terms of Service</a>
       <a href="#"><FaFacebookF/></a>
       <a href="#"><FaInstagram/></a>
       <a href="#"><FaTwitter/></a>
       <a href="#"><FaVimeo/></a>
       <a href="#"><FaLinkedinIn/></a>
     </div>

 </div>
</div>

       </div>

        
       </footer>
    </div>
  )
}

export default App


