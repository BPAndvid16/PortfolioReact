import { Container, Row, Col} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SiAdobelightroom,SiAdobephotoshop,SiAdobepremierepro,SiAdobeillustrator} from 'react-icons/si';





export const SkillsPhoto = () => {

    const responsive = {

        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }

    };

      return(
          <section className="skills" id="skills">
              <Container>
                  <Row>
                      <Col className="col-skill">
                            
                          <div className="skill-bx">
                            
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                
                                <div className="item">
                                    <SiAdobelightroom size={100}/>
                                    <h5>Lightroom</h5>
                                </div>
                                <div className="item">
                                    <SiAdobephotoshop size={100}/>
                                    <h5>Photoshop</h5>
                                </div>
                                <div className="item">
                                    <SiAdobeillustrator size={100}/>
                                    <h5>Illustrator</h5>
                                </div>
                                <div className="item">
                                    <SiAdobepremierepro size={100}/>
                                    <h5>PremierePro</h5>
                                </div>
                                
                            </Carousel>
                          </div>

                      </Col>
                  </Row>
              </Container>
          </section>
      )

}