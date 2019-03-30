import React from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from 'react-router-dom';

const Toolbar = () => {
    return (
        <Navbar dark color="success" light expand="md">
            <NavbarBrand tag={RouterNavLink} to="/">News</NavbarBrand>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink tag={RouterNavLink} to="/" exact>news</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default Toolbar;