import React, { useState } from 'react';
import ClientForm from './ClientForm';
import DeliveryForm from './DeliveryForm';
import UserForm from './Userform';

const RegisterForm = ({ onSubmit }) => {
  const [actualStep, setActualStep] = useState(0);

  const handleNextStep = (data) => {
    setActualStep(actualStep + 1);
  };

  const handleSubmit = (data) => {
    console.log(data)
  };

  const formSteps = [
    <ClientForm onSubmit={handleNextStep} />,
    <UserForm onSubmit={handleNextStep} />,
    <DeliveryForm onSubmit={handleSubmit} />
  ];


  return (<>{formSteps[actualStep]}</>);
};

export default RegisterForm;
