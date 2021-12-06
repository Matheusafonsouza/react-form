import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';

const ClientForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cpf, setCpf] = useState('');
  const [promos, setPromos] = useState(true);
  const [news, setNews] = useState(false);
  const [errors, setErrors] = useState({
    cpf: { valid: true, text: '' },
    name: { valid: true, text: '' },
    lastName: { valid: true, text: '' }
  });

  const validateCpf = (cpf) => {
    if (cpf.length !== 11) {
      return { valid: false, text: 'CPF precisa ter 11 caracteres' }
    } else {
      return { valid: true, text: '' }
    }
  };

  return (
    <form onSubmit={e => {
      e.preventDefault();
      onSubmit({
        name,
        lastName,
        cpf,
        promos,
        news
      });
    }}>
      <TextField
        id='outlined-basic'
        label='Nome'
        variant='outlined'
        type='text'
        margin='normal'
        fullWidth
        error={!errors.name.valid}
        helperText={errors.name.text}
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <TextField
        id='outlined-basic'
        label='Sobrenome'
        variant='outlined'
        type='text'
        margin='normal'
        fullWidth
        error={!errors.lastName.valid}
        helperText={errors.lastName.text}
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <TextField
        id='outlined-basic'
        label='CPF'
        variant='outlined'
        type='text'
        margin='normal'
        fullWidth
        onBlur={e => {
          setErrors({ ...errors, cpf: validateCpf(e.target.value) });
        }}
        error={!errors.cpf.valid}
        helperText={errors.cpf.text}
        value={cpf}
        onChange={e => setCpf(e.target.value)}
      />

      <FormControlLabel
        label='Promoções'
        control={<Switch
          name='Promoções'
          color='primary'
          checked={promos}
          onChange={e => setPromos(e.target.checked)}
        />}
      />
      <FormControlLabel
        label='Promoções'
        control={<Switch
          name='Novidades'
          color='primary'
          checked={news}
          onChange={e => setNews(e.target.checked)}
        />}
      />

      <Button
        type='submit'
        variant='contained'
        color='primary'
      >
        Cadastrar
      </Button>
    </form>
  );
};

export default ClientForm;
