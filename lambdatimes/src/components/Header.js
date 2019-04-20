import React from 'react';
import styled from 'styled-components'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header_styles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;

  h1 {
    font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
  }

  span {
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
  }

}
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const HeaderDate_styled = styled.span`
  margin-left: 25px;
  flex: 1;
`;

const HeaderTemp_styled = styled.span`
text-align: right;
margin-right: 25px;
flex: 1;
`;

const Header = () => {
  return (
    <Header_styles >
      <HeaderDate_styled >
        MARCH 32, 2018
      </HeaderDate_styled>
      <h1>Lambda Times</h1>
      <HeaderTemp_styled >
        98°
      </HeaderTemp_styled>
    </Header_styles>
  )
}

export default Header