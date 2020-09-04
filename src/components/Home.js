import React from 'react';
import { Container } from "@material-ui/core"
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Products from "./Products"
function Home() {
  
  return (
    <>
    <Carousel style={{width:"100%", paddingTop:"30px"}}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://static-01.daraz.pk/p/mdc/7f891447b3abe0da3c11f3556466bbd8.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Rs. 1,499</h3>
      <p>Black & Green Sneaker / Joggers For Men and Boys</p>
      <Button variant="contained" color="primary"><a style={{textDecoration:"none",color:"white"}} href="https://www.daraz.pk/products/black-green-sneaker-joggers-for-men-and-boys-i134796173-s1295106916.html?spm=a2a0e.searchlist.list.33.61d5ba73jIN0e1&search=1" target="_blank">
        Add to Card
        </a>
      </Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://static-01.daraz.pk/p/mdc/744de3d2f95adcf7f6f2c8c87c9882aa.jpg" 
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Rs. 1,499</h3>
      <p>Red & Green Sneaker / Joggers For Men and Boys</p>
      <Button variant="contained" color="primary"><a style={{textDecoration:"none", color:"white"}} href="https://www.daraz.pk/products/red-green-sneaker-joggers-for-men-and-boys-i135580078-s1295782910.html?spm=a2a0e.searchlist.list.61.61d5ba73c2PFJe&search=1" target="_blank">
        Add to Card
        </a>
      </Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://static-01.daraz.pk/p/mdc/adad014d8d9b3ec7bad9df5d9aa0c7b2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Rs. 1,499</h3>
      <p>Blue & Orange Sneaker / Joggers For Men and Boys.</p>
      <Button variant="contained" color="primary"><a style={{textDecoration:"none", color:"white"}} href="https://www.daraz.pk//products/blue-orange-sneaker-joggers-for-men-and-boys-i134783963-s1295106660.html?spm=a2a0e.pdp.recommend_2.2.fe3c60c6a67KgG&mp=1&scm=1007.16389.100477.0&clickTrackInfo=a104b2fb-71ed-4166-a468-a4e1136f8d8e__134783963__6595__3__100477" target="_blank">
        Add to Card
        </a>
      </Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      <Container>
        <Products />
      </Container>
    </>
  );
}
export default Home