import { Container, Col, Row} from "react-bootstrap"
import logoGit from '../assets/img/github.png'
import logoYou from '../assets/img/YouTube.gif'
import logoIns from '../assets/img/Instagram.gif'

export const Footer = () =>{
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    
                    
                        <div className="social-icon">
                            <a href='https://github.com/BPAndvid16'> <img src={logoGit} alt='BPAndvid16'/> </a>
                            <a href='https://www.instagram.com/andvid16/'> <img src={logoIns} alt='@andvid16'/> </a>
                            <a href='https://www.youtube.com/channel/UCZSWKATEtLMsevekdnuiMdA'> <img src={logoYou} alt='Por el camino youtube chanel'/> </a>
                        </div>
                        <p>CopyRigth 2022. All Right Reserved</p>
                        <p>Ing. Andres David Silva Naranjo</p>
                    

                </Row>
            </Container>

        </footer>
    )
}