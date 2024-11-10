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
    margin-top: 1.5rem;
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

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login com:', email, password);
    };

    const handleRegisterClick = () => {
        navigate('/register');
    }

    const handleHomeClick = () => {
        navigate('/');
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <KeyboardBackspaceIcon style={{cursor:'pointer', marginRight:'15px'}} onClick={handleHomeClick}/>
            <FormContainer onSubmit={handleSubmit}>
                <img src="/images/logo_sem_fundo.png" alt="Logo" className="logo" />
                <TitleContainer>
                    <p className="title">Faça login na sua conta</p>
                    <span className="subtitle">Faça login para obter as melhores promoções exclusivas do mercado.</span>
                </TitleContainer>
                <InputContainer>
                    <label htmlFor="email_field">Login</label>
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
                <Button type="submit">Login</Button>
                <Separator>
                    <hr className="line" />
                    <span>Ou</span>
                    <hr className="line" />
                </Separator>
                <Button onClick={handleRegisterClick}>Registre-se</Button>
            </FormContainer>
        </div>
    );
};

export default Login;
