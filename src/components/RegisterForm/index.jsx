import { Typography } from '@material-ui/core';
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

  const renderStepForm = (step) => {
    switch (step) {
      case 0:
        return <ClientForm onSubmit={handleNextStep} />
      case 1:
        return <UserForm onSubmit={handleNextStep} />
      case 2:
        return <DeliveryForm onSubmit={handleSubmit} />
      default:
        return <Typography>Erro ao selecionar formulário</Typography>
    }
  };

  return (
    <>
      {renderStepForm(actualStep)}
    </>
  );
};

export default RegisterForm;
