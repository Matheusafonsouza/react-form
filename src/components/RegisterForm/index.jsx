import { Stepper, Typography, Step, StepLabel } from '@material-ui/core';
import React, { useEffect, useState, useCallback } from 'react';
import ClientForm from './ClientForm';
import DeliveryForm from './DeliveryForm';
import UserForm from './Userform';

const RegisterForm = () => {
  const [actualStep, setActualStep] = useState(0);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (actualStep === formSteps.length - 1) {
      handleSubmit(formData);
    }
  });

  const handleNextStep = useCallback(() => {
    setActualStep(actualStep + 1);
  }, [actualStep]);

  const appendFormData = useCallback((data) => {
    setFormData({ ...formData, ...data });
    handleNextStep();
  }, [formData, handleNextStep]);

  const handleSubmit = useCallback((data) => {
    console.log(data);
  }, []);

  const formSteps = [
    <ClientForm onSubmit={appendFormData} />,
    <UserForm onSubmit={appendFormData} />,
    <DeliveryForm onSubmit={appendFormData} />,
    <Typography variant='h5'>Obrigado pelo cadastro</Typography>
  ];

  return (
    <>
      <Stepper activeStep={actualStep}>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      {formSteps[actualStep]}
    </>
  );
};

export default RegisterForm;
