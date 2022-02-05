import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.object,
};

class HorizontalCenter extends React.Component {

  render() {
    return (
      <div style={{with: '100%', height: "100%", display: "flex", justifyContent: "center"}}>
        {this.props.children}
      </div>
    );
  }
}

HorizontalCenter.propTypes = propTypes;

export default HorizontalCenter;
