// - IMPORTS - //
  import React from 'react';
  import PropTypes from 'prop-types';
  import styled from 'styled-components'
// --**-- END --**-- 
// - CODE START - //

const TabStyle = styled.section`
  background-color: black;
  color: white;
  margin: 0px 5px;
  padding: 5px 10px;

`;


const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <TabStyle
      className={''}
      
      /* Replace this dummy click handler function with your selectTabHandler function from props 
      you'll need to pass the `tab` in as an argument to this handler. */
      onClick={ () => {
        props.selectTabHandler(props.tab)
      }}
    >

      {props.tab.toUpperCase()}
    </TabStyle>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string,
  tab: PropTypes.string,

}

export default Tab;


