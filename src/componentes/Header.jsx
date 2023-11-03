import React from "react";
import PropTypes from 'prop-types';

const Header = ({titulo}) => {
    Header.propTypes = {
        titulo: PropTypes.string.isRequired,
      };

    return (
    <div className="header">
    <h1>{titulo}</h1>
    </div>
)
}

export default Header