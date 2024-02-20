import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { faAngleLeft,faAngleRight, faBars, faBell, faBox, faMoon } from '@fortawesome/free-solid-svg-icons';

const MainHeader = ({handleHide}) => {

    const [expand, setExpand] = useState(false)

    const handleExpand=()=>{
        setExpand(!expand)
        console.log("Expand Triggered")
        handleHide(expand)
    }

    

  return (
    <>
      <Navbar style={{backgroundColor: '#f2f2f2'}} expand="lg">
      <Container>
        <div style={{border:'none'}}  className='hamburger-btn' onClick={handleExpand} >
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <FontAwesomeIcon icon={faBars} />
            </Navbar.Toggle>

            <div style={{color:'gray'}} >
        <FontAwesomeIcon icon={faBars} className="hamburger" />
        {expand?<FontAwesomeIcon icon={faAngleLeft} className="arrow" />:
        <FontAwesomeIcon icon={faAngleRight} className='arrow'/>
        }
        </div>
        </div>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#halfmoon">
            <FontAwesomeIcon icon={faMoon} />
            </Nav.Link>
            <Nav.Link href="#bell">
              <FontAwesomeIcon icon={faBell} />
            </Nav.Link>
            <Nav.Link href="#box">
              <FontAwesomeIcon icon={faBox} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default MainHeader
