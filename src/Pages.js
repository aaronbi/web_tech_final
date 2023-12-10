import React from "react";

import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
    background: #ffb3ff;
    height: 85px;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
`;

const NavLink = styled(Link)`
    color: #808080;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #4d4dff;
    }
`;

//unused styling
/*const Bars = styled.div`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;*/

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

function Trip(props){
    return(
        <button onClick>{props.name}</button>
    );
};

export const Home = () => {
    return (
        <div>
            <h1>Climb Time</h1>
	    <button>Test</button>
        </div>
    );
};

export const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export const About = () => {
    return (
        <div>
            <h1>
                GeeksforGeeks is a Computer Science portal
                for geeks.
            </h1>
        </div>
    );
};

