import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';

const DeliveryForm = ({ onSubmit }) => {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [errors, setErrors] = useState({
    cep: { valid: true, text: '' },
    address: { valid: true, text: '' },
    number: { valid: true, text: '' },
    state: { valid: true, text: '' },
    city: { valid: true, text: '' }
  });

  return (
    <form onSubmit={e => {
      e.preventDefault();
      onsubmit({
        cep,
        address,
        number,
        state,
        city
      });
    }}>
      <TextField
        id='outlined-basic'
        label='Endereço'
        variant='outlined'
        type='text'
        margin='normal'
        fullWidth
        required
        error={!errors.address.valid}
        helperText={errors.address.text}
        value={address}
        onChange={e => setAddress(e.target.value)}
      />
      <TextField
        id='outlined-basic'
        label='CEP'
        variant='outlined'
        type='text'
        margin='normal'
        required
        error={!errors.cep.valid}
        helperText={errors.cep.text}
        value={cep}
        onChange={e => setCep(e.target.value)}
      />
      <TextField
        id='outlined-basic'
        label='Número'
        variant='outlined'
        type='text'
        margin='normal'
        required
        error={!errors.number.valid}
        helperText={errors.number.text}
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <TextField
        id='outlined-basic'
        label='Estado'
        variant='outlined'
        type='text'
        margin='normal'
        required
        error={!errors.state.valid}
        helperText={errors.state.text}
        value={state}
        onChange={e => setState(e.target.value)}
      />
      <TextField
        id='outlined-basic'
        label='Cidade'
        variant='outlined'
        type='text'
        margin='normal'
        required
        error={!errors.city.valid}
        helperText={errors.city.text}
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <Button
        type='submit'
        variant='contained'
        color='primary'
        fullWidth
      >
        Finalizar cadastro
      </Button>
    </form>
  );
};

export default DeliveryForm;
