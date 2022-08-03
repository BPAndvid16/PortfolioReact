import { Col } from "react-bootstrap"
import{
  Link
} from "react-router-dom";

export const ProjectCard = ({title, description,imgUrl}) => {
    
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl}/>
                <div className="proj-txtx">
                    <h4><Link className="link-card" to={"/"+title}>{title}</Link></h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}