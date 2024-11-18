"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const SignupForm = () => {

    const router = useRouter();
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [nameField, setNameField] = useState('');

    const handleEnterButton = () => {
        router.replace("/home");
    }

    return(
        <>  
            <Input
                value={nameField}
                placeholder="Digite seu nome"
                onChange={t => setNameField(t)}
            />

            <Input
                value={emailField}
                placeholder="Digite seu e-mail"
                onChange={t => setEmailField(t)}
            />

            <Input
                value={passwordField}
                placeholder="Digite sua senha"
                onChange={t => setPasswordField(t)}
                password={true}
            />

            <Button 
                onClick={handleEnterButton}
                label="Criar Conta"
                size={1}
            />
        </>
    );
}

