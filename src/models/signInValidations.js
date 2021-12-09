const validateCpf = (cpf) => {
  if (cpf.length !== 11) {
    return { valid: false, text: 'CPF precisa ter 11 caracteres' }
  } else {
    return { valid: true, text: '' }
  }
};

const validateCep = (cpf) => {
  if (cpf.length !== 8) {
    return { valid: false, text: 'CEP precisa ter 8 caracteres' }
  } else {
    return { valid: true, text: '' }
  }
};

export { validateCpf, validateCep };