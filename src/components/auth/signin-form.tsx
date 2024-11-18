"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const SigninForm = () => {

    const router = useRouter();
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleEnterButton = () => {
        router.replace("/home");
    }

    return(
        <>
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
                label="Entrar"
                size={1}
            />
        </>
    );
}

