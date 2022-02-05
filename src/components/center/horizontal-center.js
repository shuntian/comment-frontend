import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.object,
};

class HorizontalCenter extends React.Component {

  render() {
    return (
      <div style={{display: "flex", justifyContent: "center"}}>
        {this.props.children}
      </div>
    );
  }
}

HorizontalCenter.propTypes = propTypes;

export default HorizontalCenter;
