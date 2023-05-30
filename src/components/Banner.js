import { Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';

const Banner = () => {
  return (
    <>
      <div className="Banner">
        <div className="container">
          <Row>
            <Col xs={12} md={6} xl={7}>
              <span className="tagLine">Welcome to React Practice</span>
              <h1>{`Hi I am ...`}<span>Lorem Ipsum is simply dummy text of the</span></h1>
              <p>typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker includin</p>
              <button onClick={() => {console.log('working')}}>Let's Connect <ArrowRightCircle size={25}/></button>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={''} className="header-img" alt="header-img"/>
            </Col>
          </Row>
        </div>
      </div>

    </>
  )
}

export default Banner;