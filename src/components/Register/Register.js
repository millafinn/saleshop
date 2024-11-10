import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background-color: #fff;
    border-radius: 8px;
    width: 100%;
    max-width: 520px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const TitleContainer = styled.div`
    text-align: center;
    margin-bottom: 2rem;

    .title {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    .subtitle {
        font-size: 0.875rem;
        color: #777;
    }
`;

const InputContainer = styled.div`
    width: 100%;
    margin-bottom: 1.5rem;

    label {
        display: block;
        font-size: 0.875rem;
        color: #333;
        margin-bottom: 0.5rem;
    }

    input {
        width: 94%;
        padding: 0.75rem;
        border-radius: 4px;
        border: 1px solid #ddd;
        font-size: 1rem;
    }
`;

const Button = styled.button`
    width: 100%;
    padding: 0.75rem;
    margin-top: 1.0rem;
    background-color: #fee601;
    color: #fff;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #b6a500;
    }
`;

const Separator = styled.div`
    display: flex;
    align-items: center;
    margin: 1.5rem 0;

    .line {
        flex: 1;
        height: 1px;
        background-color: #ddd;
    }

    span {
        padding: 0 1rem;
        color: #777;
        font-size: 0.875rem;
    }
`;

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    console.log('Registro com:', name, email, password);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleHomeClick = () => {
    navigate('/');
}

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <KeyboardBackspaceIcon style={{cursor:'pointer', marginRight:'15px'}} onClick={handleHomeClick}/>
      <FormContainer onSubmit={handleSubmit}>
        <img src="/images/logo_sem_fundo.png" alt="Logo" className="logo" />
        <TitleContainer>
          <p className="title">Crie sua conta</p>
          <span className="subtitle">Registre-se para aproveitar promoções exclusivas.</span>
        </TitleContainer>
        <InputContainer>
          <label htmlFor="name_field">Nome</label>
          <input
            type="text"
            id="name_field"
            placeholder="Seu nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="email_field">E-mail</label>
          <input
            type="email"
            id="email_field"
            placeholder="exemplo@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password_field">Senha</label>
          <input
            type="password"
            id="password_field"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="confirm_password_field">Confirme sua senha</label>
          <input
            type="password"
            id="confirm_password_field"
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </InputContainer>
        <Button type="submit">Registrar</Button>
        <Separator>
          <hr className="line" />
          <span>Ou</span>
          <hr className="line" />
        </Separator>
        <Button onClick={handleLoginClick}>Já tem uma conta? Faça login</Button>
      </FormContainer>
    </div>
  );
};

export default Register;