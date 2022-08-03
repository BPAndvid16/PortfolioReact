import { Container, Row, Col, Tab} from "react-bootstrap";
import { VideoCard } from "../VideoCard";


export const Videography = () => {


    const projects = [
        {
          imgUrl: "https://www.youtube.com/watch?v=SMEfW6gNfhE&t=33s&ab_channel=PORELCAMINO",
        },
        {
          imgUrl: "https://www.youtube.com/watch?v=ajX-qfF8tyA&ab_channel=PORELCAMINO",
        },
        {
          imgUrl: "https://www.youtube.com/watch?v=86wBUH842ss&ab_channel=PORELCAMINO",
        }
        
      ];

    return(
        <section className="video-project">

        <Container className="video-container">
                
                    <Col>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    
                    <Tab.Content>
                      
                                {
                                    projects.map((project,index) => {
                                        return(
                                            
                                                <VideoCard
                                                key={index}
                                                {...project}
                                                />
                                            
                                        )
                                    })
                                }
                           
                    
                                
                  </Tab.Content>
                  </Tab.Container>
                    </Col>
                
                
            </Container>

            <img className="background-image-right" src=""></img>

        </section>
    )

}