import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.object,
};

class VerticalCenter extends React.Component {

  render() {
    return (
      <div style={{with: '100%', height: "100%", display: "flex", alignItems: "center"}}>
        {this.props.children}
      </div>
    );
  }
}

VerticalCenter.propTypes = propTypes;

export default VerticalCenter;
