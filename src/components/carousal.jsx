import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel style={{width:"60rem"}} fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://f.nooncdn.com/mpcms/EN0001/assets/d1f344a8-b1d7-43d9-95e7-114069806252.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://f.nooncdn.com/mpcms/EN0001/assets/e0bf5428-90c7-4ca9-a3c4-54b97e099bc6.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://f.nooncdn.com/mpcms/EN0001/assets/47d5d396-239a-4ab8-b5e3-ae6765d93a49.png"
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://f.nooncdn.com/mpcms/EN0001/assets/83b71291-65f5-4fcc-8db8-a72d91b32426.jpg"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;