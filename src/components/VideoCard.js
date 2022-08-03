import { Col } from "react-bootstrap"
import ReactPlayer from "react-player";

export const VideoCard = ({imgUrl}) => {
    
    return(
        <Col className="col-vid" sm={12} md={12} lg={12} >
            <div className="proj-imgvid">
                
                <ReactPlayer url={imgUrl}/>
                
            </div>
        </Col>
    )
}