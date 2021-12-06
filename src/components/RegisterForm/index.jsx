import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import ClientForm from './ClientForm';
import DeliveryForm from './DeliveryForm';
import UserForm from './Userform';

const RegisterForm = ({ onSubmit }) => {
  const [actualStep, setActualStep] = useState(0);

  const renderStepForm = (step) => {
    switch (step) {
      case 0:
        return <ClientForm />
      case 1:
        return <UserForm />
      case 2:
        return <DeliveryForm />
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
