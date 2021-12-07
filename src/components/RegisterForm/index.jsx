import React, { useState } from 'react';
import ClientForm from './ClientForm';
import DeliveryForm from './DeliveryForm';
import UserForm from './Userform';

const RegisterForm = () => {
  const [actualStep, setActualStep] = useState(0);
  const [formData, setFormData] = useState({});

  const appendFormData = (data) => {
    setFormData({ ...formData, ...data });
  };

  const handleNextStep = (data) => {
    appendFormData(data);
    setActualStep(actualStep + 1);
  };


  const handleSubmit = (data) => {
    appendFormData(data);
    setFormData({ ...formData, ...data });
  };

  const formSteps = [
    <ClientForm onSubmit={handleNextStep} />,
    <UserForm onSubmit={handleNextStep} />,
    <DeliveryForm onSubmit={handleSubmit} />
  ];


  return (<>{formSteps[actualStep]}</>);
};

export default RegisterForm;
