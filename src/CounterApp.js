import React, { useState } from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({ value }) => {

  const [ counter, setCounter ] = useState(value);

  // handleAdd
  const handleCounter = (number) => {
    setCounter( counter + number);
  }

  return (
    <>
      <h1> Counter Appp </h1>
      <h2> { counter } </h2>

      <button onClick={ () => handleCounter(1) }>+1</button>
      <button onClick={ () => setCounter(value) }>Reset</button>
      <button onClick={ () =>  handleCounter(-1) }>-1</button>
    </>
  )
}
   
CounterApp.propTypes = {
  value: PropTypes.number,
};

CounterApp.defaultProps = {
  value: 10,
}

export default CounterApp;