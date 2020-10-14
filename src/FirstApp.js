import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({ saludo, subtitle }) => {

  return (
    <>
      <h1> { saludo } </h1>
      <p> { subtitle } </p>
    </>
  );
};

FirstApp.propTypes = {
  saludo: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

FirstApp.defaultProps = {
  subtitle: ''
}

export default FirstApp;