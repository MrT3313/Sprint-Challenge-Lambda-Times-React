import React from 'react';
import styled from 'styled-components'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file


const TopBar_styles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;
const TopBar_Container_styles = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

  @media (min-width: 1280px) {
      width: 1280px;
  }
`;

const TopBar_ContainerLEFT_styles = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;

  span {
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
  }
`;

const TopBar_ContainerCENTER_styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;

  span {
    cursor: pointer;
    margin-right: 5%;
  }
  span:hover {
    text-decoration: underline;
  }
  span:last-child {
    margin-right: 0;
  }
`;

const TopBar_ContainerRIGHT_styles = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;

  span {
    cursor: pointer;
  }
`;

const TopBar = () => {
  return (
    <TopBar_styles >
      <TopBar_Container_styles >

        <TopBar_ContainerLEFT_styles >
          <span>TOPICS</span><span>SEARCH</span>
        </TopBar_ContainerLEFT_styles>

        <TopBar_ContainerCENTER_styles >
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </TopBar_ContainerCENTER_styles>

        <TopBar_ContainerRIGHT_styles >
          <span>LOG IN</span>
        </TopBar_ContainerRIGHT_styles>

      </TopBar_Container_styles>
    </TopBar_styles>
  )
}

export default TopBar;