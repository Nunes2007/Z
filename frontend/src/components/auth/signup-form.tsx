"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from 'axios';
import { ErrorMsg } from "../ui/error-mensage";

export const SignupForm = () => {
    const router = useRouter();
    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [error, setError] = useState(false);
    const [msg, setMsg] = useState('');

    const controller = new AbortController;

    const handleRegisterButton = async () => {
        const response = await axios.post('http://localhost:4000/auth/signup', {
            name: nameField,
            email: emailField,
            password: passwordField
        })

        console.log(response.data);

        if(nameField && emailField && passwordField){
            handleRegisterButton();
            if(response.data =! emailField){
                controller.abort();
                setMsg('Esse email já está cadastrado');
            } else {
                router.replace('/home');
            }
        } else {
            setError(true);
            setMsg('por favor preencha todos os campos');
            console.log('por favor preencha todos os campos');
        }
        
    }

   

    return (
        <>
            <Input
                placeholder="Digite seu nome"
                value={nameField}
                onChange={t => setNameField(t)}
            />

            <Input
                placeholder="Digite seu e-mail"
                value={emailField}
                onChange={t => setEmailField(t)}
            />

            <Input
                placeholder="Digite sua senha"
                value={passwordField}
                onChange={t => setPasswordField(t)}
                password
            />

            {error && 
                <ErrorMsg
                    children={msg}
                />
            }

            <Button
                label="Criar conta"
                onClick={handleRegisterButton}
                size={1}
            />
        </>
    );
}