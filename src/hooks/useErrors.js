import React, { useState } from 'react';

const createInitialState = (validations) => {
  const initialState = {};
  for (let field in validations) {
    initialState[field] = { valid: true, text: '' }
  }
  return initialState;
};

const useErrors = (validations) => {
  const [errors, setErrors] = useState(createInitialState(validations));

  const validateErrors = (event) => {
    const { name, value } = event.target;
    const newState = { ...errors };
    newState[name] = validations[name](value);
    setErrors(newState);
  };

  return [errors, validateErrors];
};

export default useErrors;