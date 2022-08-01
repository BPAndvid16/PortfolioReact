import { Container, Row, Col} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SiReact,SiCss3,SiFirebase,SiJavascript,SiBootstrap,SiKotlin} from 'react-icons/si';
import { MdOutlineComputer} from 'react-icons/md';
import { FcAndroidOs } from 'react-icons/fc';
import { FaAndroid, FaPython } from 'react-icons/fa';
import {TiHtml5} from 'react-icons/ti';
import {BsApple} from 'react-icons/bs';




export const Skills = () => {

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
                                    <BsApple size={100}/>
                                    <h5>iOs</h5>
                                </div>
                                <div className="item">
                                    <FaAndroid size={100}/>
                                    <h5>Android</h5>
                                </div>
                                <div className="item">
                                    <SiKotlin size={100}/>
                                    <h5>Kotlin</h5>
                                </div>
                                <div className="item">
                                    <SiFirebase size={100}/>
                                    <h5>Firebase</h5>
                                </div>
                            </Carousel>
                          </div>

                          <div className="skill-bx">
                          <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <SiBootstrap size={100}/>
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className="item">
                                    <TiHtml5 size={100}/>
                                    <h5>HTML5</h5>
                                </div>
                                <div className="item">
                                    <SiCss3 size={100}/>
                                    <h5>CSS3</h5>
                                </div>
                                <div className="item">
                                    <SiJavascript size={100}/>
                                    <h5>JavaScript</h5>
                                </div>
                                
                                <div className="item">
                                    <SiReact size={100}/>
                                    <h5>ReactJs</h5>
                                </div>
                                <div className="item">
                                    <FaPython size={100}/>
                                    <h5>Python</h5>
                                </div>
                               
                                
                            </Carousel>
                          </div>
                      </Col>
                  </Row>
              </Container>
          </section>
      )

}