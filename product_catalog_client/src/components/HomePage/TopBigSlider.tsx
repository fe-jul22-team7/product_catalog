import './HomePage.scss';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';


export const TopBigSlider = () => {
  const ref = useRef<any>(null);

  const onPrevClick = () => {
    ref.current.prev();
  };

  const onNextClick = () => {
    ref.current.next();
  };

  return (
    <section className="top-slider">
      <div className="top-slider__container">
        <h1 className="top-slider__title">Welcome to Nice Gadgets store!</h1>
        <Container>
          <Row>
            <Col xs={0} md='1' lg='1'>
              <button 
                onClick={onPrevClick}
                type="button"
                className="buttons"
              >
                {'<'}
              </button>
            </Col>

            <Col xs={12} md={10} lg={10}>
              <Carousel
                controls={false} 
                ref={ref}
                slide={false}
                indicators={false}
              >
                <Carousel.Item>
                  <div className="carousel-block"></div>
                </Carousel.Item>
              </Carousel>
            </Col>

            <Col xs={0} md='1' lg='1'>
              <button onClick={onNextClick}
                className="buttons"
              >
                {'>'}
              </button>
            </Col>
          </Row>

          <Row>
            <div>
              <ul className='carousel-indicator'>
                <li 
                  className='carousel-indicator__dot 
                  carousel-indicator__dot--active'
                >
                </li>
                <li className='carousel-indicator__dot'></li>
                <li className='carousel-indicator__dot'></li>
              </ul>
            </div>
          </Row>
        </Container>
      </div>
    </section>
  );
};
