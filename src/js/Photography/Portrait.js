import { Container, Row, Col, Tab} from "react-bootstrap";
import Pr1 from '../../assets/img/Portrait/Pr1.JPG'
import Pr2 from '../../assets/img/Portrait/Pr2.JPG'






import { ProjectCard } from "../ProjectCard";


export const Portrait = () => {

    const projects = [
        {
          imgUrl: Pr1,
        },
        {
          imgUrl: Pr2,
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