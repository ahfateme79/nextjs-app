import React from "react";
import styled from "styled-components";
import Nav from "../navigation/navigation";

const Headerstyle = styled.header`
  width: 100%;
  height: 100px;
  background-color: #343a40;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default function Header(props) {
  return (
    <Headerstyle>
      <Nav />
    </Headerstyle>
  );
}

