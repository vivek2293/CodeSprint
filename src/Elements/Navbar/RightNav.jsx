import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    color: white;
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    // background-color: black;
    background: rgb(93,93,93);
background: linear-gradient(306deg, rgba(93,93,93,1) 31%, rgba(47,47,47,1) 61%, rgba(47,47,47,1) 78%);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 40vh;
    width: 300px;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    transition: transform 0.0s ease-in-out;
    li {
      color: #fff;
    }
  }
`;
const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <a><li>Home</li></a>
      <a><li>Register</li></a>
      <a><li>Contact Us</li></a>
      <a><li>Guidlines</li></a>
      <a><li>Timeline</li></a>
    </Ul>
  )
}

export default RightNav