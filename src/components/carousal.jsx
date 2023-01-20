import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample(props) {
  return (
    <Carousel style={{width:`${props.width}` , marginTop:"2rem" ,marginBottom:"2rem" }} fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.img3}
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.img4}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;