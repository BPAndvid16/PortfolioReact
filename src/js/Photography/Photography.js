import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Animal from '../../assets/img/animal.jpeg'
import People from '../../assets/img/yo.jpeg'
import Traveling from '../../assets/img/traveling.jpeg'
import Videography from '../../assets/img/videography.JPG'
import { ProjectCard } from "../ProjectCard";
import {PhotoHeader} from './PhotoHeader'
import { SkillsPhoto } from "./SkillsPhoto";
import logoYou from '../../assets/img/YouTube.gif'



  export const Photography = () => {

    const projects = [
        {
          title: "Traveling",
          description: "Landscapes",
          imgUrl: Traveling,
        },
        {
          title: "Animals",
          description: "Animals",
          imgUrl: Animal,
        },
        {
          title: "Portrait",
          description: "People",
          imgUrl: People,
        }

        
      ];

    const VideoProjects = [

        {
            title: "Videography",
            description: "Videography",
            imgUrl: Videography,
        },

        {
            title: "Por el Camino",
            description: "Vlog",
            imgUrl: logoYou,
        }
    ];  

    return(

        

        <section className="project">
            <PhotoHeader/>
            <SkillsPhoto/>
            <Container className="photo-container">
                <Row>
                    <Col>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Photography</Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                      <Nav.Link eventKey="third">Videography</Nav.Link>
                    </Nav.Item>
                  </Nav>
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
                      
                      <Tab.Pane eventKey="third">
                        <Row>
                            {
                                VideoProjects.map((project,index) => {
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