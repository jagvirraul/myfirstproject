import React from 'react';
import  Navbar  from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
export default function Home() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                    <NavLink to="/">Home</NavLink>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <NavLink to="/login">Sign in</NavLink>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <NavLink to="/weather">Weather</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
