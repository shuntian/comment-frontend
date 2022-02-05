import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.object,
};

class Center extends React.Component {

  render() {
    return (
      <div style={{with: '100%', height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
        {this.props.children}
      </div>
    );
  }
}

Center.propTypes = propTypes;

export default Center;
