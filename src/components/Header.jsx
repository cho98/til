import React from "react";
import styled from "styled-components";
import "../test.css";

const Header = () => {
  return (
    <StContainer>
      <div className="rotate-in-center">My Todo List</div>
    </StContainer>
  );
};
export default Header;

const StContainer = styled.div`
  font-size: x-large;
  border: 1px solid #ddd;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 520px;
  margin-bottom: 24px;
`;
