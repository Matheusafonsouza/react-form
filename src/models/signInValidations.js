const validateCpf = (cpf) => {
  if (cpf.length !== 11) {
    return { valid: false, text: 'CPF precisa ter 11 caracteres' }
  } else {
    return { valid: true, text: '' }
  }
};

export { validateCpf };