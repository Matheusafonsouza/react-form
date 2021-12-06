import { Container } from '@material-ui/core';
import './App.css';
import RegisterForm from './components/RegisterForm/RegisterForm';

function App() {
  return (
    <Container component='article' maxWidth='sm'>
      <h1>Formulário de cadastro</h1>
      <RegisterForm />
    </Container>
  );
}

export default App;
