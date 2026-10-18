"use client"

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group";
import {
    Mail,
    KeyRound
} from 'lucide-react';

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Form from "next/form";

export default function Login() {
    const [errEmail, setErrEmail] = useState(false);
    const [errSenha, setErrSenha] = useState(false);

    return (
        <div className="flex flex-col w-screen h-screen justify-items-center justify-center items-center bg-[url('/Fundo.png')] bg-top-right bg-size-[auto_100%] bg-no-repeat">
            <Form action="/login/auth">
                <Card>
                    <CardHeader className="text-center justify-center align-center">
                        <CardTitle className="font-semibold text-lg mx-2">Bem-vindo ao <span className="font-bold">Baleia Kids</span>!</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4 mb-0.5">
                        <div className="flex flex-col gap-3 m-1 mb-0">
                            <div className="flex flex-row justify-between">
                                <Label className="font-medium">E-mail</Label>
                                {
                                    errEmail && <Badge variant="destructive">Não está cadastrado</Badge>
                                }
                            </div>
                            <InputGroup className="p-1 py-4">
                                <InputGroupAddon align="inline-start">
                                    <Mail className="h-4 w-4 text-muted-foreground" />
                                </InputGroupAddon>
                                
                                <InputGroupInput type="email" placeholder="email@example.com" />
                            </InputGroup>
                        </div>
                        <div className="flex flex-col gap-3 m-1 mb-4 mt-0">
                            <div className="flex flex-row justify-between">
                                <Label className="font-medium">Senha</Label>
                                {
                                    errSenha && <Badge variant="destructive">Senha incorreta</Badge>
                                }
                            </div>
                            <InputGroup className="p-1 py-4">
                                <InputGroupAddon align="inline-start">
                                    <KeyRound className="h-4 w-4 text-muted-foreground" />
                                </InputGroupAddon>
                                
                                <InputGroupInput type="email" placeholder="senha123@" />
                            </InputGroup>
                        </div>
                        <Button className="mb-2">Acessar Conta</Button>
                    </CardContent>
                    <CardFooter className="flex flex-col">
                        <CardDescription className="text-xs">Não tem uma conta ainda? <a className="underline decoration-solid pointer text-blue-400" href="/signup">Crie uma</a>.</CardDescription>
                    </CardFooter>
                </Card>
            </Form>
        </div>
    );
}
