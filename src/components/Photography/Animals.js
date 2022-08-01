import { Container, Row, Col, Tab} from "react-bootstrap";
import AnAv1 from '../../assets/img/Animals/AnAv1.jpeg'
import AnAv2 from '../../assets/img/Animals/AnAv2.jpeg'
import AnAv3 from '../../assets/img/Animals/AnAv3.jpeg'
import AnAv4 from '../../assets/img/Animals/AnAv4.jpeg'
import AnAv5 from '../../assets/img/Animals/AnAv5.jpeg'
import AnAv6 from '../../assets/img/Animals/AnAv6.jpeg'
import AnMa1 from '../../assets/img/Animals/AnMa1.jpeg'
import AnMa2 from '../../assets/img/Animals/AnMa2.jpeg'
import AnMa3 from '../../assets/img/Animals/AnMa3.jpeg'
import AnMa4 from '../../assets/img/Animals/AnMa4.jpeg'
import AnMa5 from '../../assets/img/Animals/AnMa5.jpeg'
import AnMa6 from '../../assets/img/Animals/AnMa6.jpeg'
import AnMa7 from '../../assets/img/Animals/AnMa7.JPG'
import AnRep1 from '../../assets/img/Animals/AnRep1.jpeg'



import { ProjectCard } from "../ProjectCard";


export const Animals = () => {

    const projects = [
        {
          imgUrl: AnAv1,
        },
        {
          imgUrl: AnAv4,
        },
        {
          imgUrl: AnAv5,
        },
        {
          imgUrl: AnAv2,
        },
        {
          imgUrl: AnAv3,
        },
        {
          imgUrl: AnAv6,
        },
        {
          imgUrl: AnMa1,
        },
        {
          imgUrl: AnMa2,
        },
        {
          imgUrl: AnMa4,
        },
        {
          imgUrl: AnMa3,
        },
        {
          imgUrl: AnMa5,
        },
        {
          imgUrl: AnMa6,
        },
        {
          imgUrl: AnMa7,
        },
        {
          imgUrl: AnRep1,
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