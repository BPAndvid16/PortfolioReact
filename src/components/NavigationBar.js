import React from 'react'
import {useState, useEffect} from 'react'
import { Navbar, Container, Nav} from 'react-bootstrap'
import logoGit from '../assets/img/github.png'
import logoYou from '../assets/img/YouTube.gif'
import logoIns from '../assets/img/Instagram.gif'
import{
  Link
} from "react-router-dom";

export const NavigationBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);
    useEffect(()=>{
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>

      <Container>
        
        {/*<Navbar.Brand href="#home">
            <img src={''} alt='Logo'/>
        </Navbar.Brand>*/}

        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle> 

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} >Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')} >Skills</Nav.Link>
            <Nav.Link href="/Photography" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')} >Photography</Nav.Link>           
            
          </Nav>

          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='https://github.com/BPAndvid16'> <img src={logoGit} alt='BPAndvid16'/> </a>
                <a href='https://www.instagram.com/andvid16/'> <img src={logoIns} alt='@andvid16'/> </a>
                <a href='https://www.youtube.com/channel/UCZSWKATEtLMsevekdnuiMdA'> <img src={logoYou} alt='Por el camino youtube chanel'/> </a>
            </div>
            <a href='https://www.linkedin.com/in/andres-david-silva-naranjo-065391218/'><button  className='vvd' onClick={()=>console.log('connect')}><span>Let's Connect</span></button></a>
          </span> 

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
