import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class MenuComponent extends Component {
    render () {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a>Logo</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <Link to='/viewbuckets'>Bucket</Link>
                    <Link to='/addbucket'>Add Buckets</Link>
                </Nav>
            </Navbar>
        );
    };
};