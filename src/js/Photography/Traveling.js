import { Container, Row, Col, Tab} from "react-bootstrap";
import TrA1 from '../../assets/img/Travel/TrA1.jpeg'
import TrA2 from '../../assets/img/Travel/TrA2.jpeg'
import TrA3 from '../../assets/img/Travel/TrA3.jpeg'
import TrA4 from '../../assets/img/Travel/TrA4.jpeg'
import TrA6 from '../../assets/img/Travel/TrA6.jpeg'
import TrA7 from '../../assets/img/Travel/TrA7.jpeg'
import TrA8 from '../../assets/img/Travel/TrA8.JPG'
import TrA9 from '../../assets/img/Travel/TrA9.JPG'
import TrA10 from '../../assets/img/Travel/TrA10.JPG'
import TrCi5 from '../../assets/img/Travel/TrCi5.jpeg'
import TrCi11 from '../../assets/img/Travel/TrCi11.JPG'

import { ProjectCard } from "../ProjectCard";


export const Traveling = () => {

    const projects = [
        {
          imgUrl: TrA4,
        },
        {
          imgUrl: TrA2,
        },
        {
          imgUrl: TrA3,
        },
        {
          imgUrl: TrA1,
        },
        {
          imgUrl: TrA9,
        },
        {
          imgUrl: TrA10,
        },
        {
          imgUrl: TrA8,
        },
        {
          imgUrl: TrA6,
        },
        {
          imgUrl: TrA7,
        },
        {
          imgUrl: TrCi5,
        },
        {
          imgUrl: TrCi11,
        }
        
      ];

    return(
        <section className="project">

        <Container className="photo-container">
                <Row>
                    <Col>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project,index) => {
                                        return(
                                            
                                                <ProjectCard
                                                key={index}
                                                {...project}
                                                />
                                            
                                        )
                                    })
                                }
                            </Row> 
                    </Tab.Pane>
                      
                  </Tab.Content>
                  </Tab.Container>
                    </Col>
                </Row>
            </Container>

            <img className="background-image-right" src=""></img>

        </section>
    )
}