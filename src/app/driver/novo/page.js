"use client"

import NavAdmin from "@/components/created/NavAdmin";
import Input from "@/components/created/Input";
import { useState } from "react";
import Footer from "@/components/created/Footer";
import { useRouter } from "next/navigation";
import { createDriver } from "@/api/routes";

export default function CadastrarMotorista() {
    const [motorista, setMotorista] = useState({});

    const router = useRouter();

    const handleChange = (event) => {
        const { name, value } = event.target;

        setMotorista({
            ...motorista,
            [name]: value
        })
    }

    const handleCreateMotorista = async () => {
        createDriver(motorista);
        router.push('/driver');
    }

    return (
        <>
            <main className="flex h-screen bg-gray-200">
                <NavAdmin />

                <section className="flex flex-col items-center w-full p-4 ml-8 space-y-6">

                    <h1 className="text-3xl font-bold text-center">Cadastro de motoristas</h1>

                    <form className="flex flex-col space-y-4 justify-center items-center w-1/2">
                        <div className="w-1/2">
                            <span>CPF:</span>
                            <Input
                                type="text"
                                name="cpf"
                                id="cpf"
                                onChange={handleChange}
                                autocomplete="off"
                            />
                        </div>
                        <div className="w-1/2">
                            <span>Nome:</span>
                            <Input
                                type="text"
                                name="nome"
                                id="nome"
                                onChange={handleChange}
                                autocomplete="off"
                            />
                        </div>
                        <div className="w-1/2">
                            <span>CNH:</span>
                            <Input
                                type="text"
                                name="cnh"
                                id="cnh"
                                onChange={handleChange}
                                autocomplete="off"
                            />
                        </div>
                        <div className="w-1/2">
                            <span>Data de nascimento:</span>
                            <Input
                                type="text"
                                name="data_nasc"
                                id="data_nasc"
                                onChange={handleChange}
                                autocomplete="off"
                            />
                        </div>
                        <div className="w-1/2">
                            <span>Telefone:</span>
                            <Input
                                type="text"
                                name="telefone"
                                id="telefone"
                                onChange={handleChange}
                                autocomplete="off"
                            />
                        </div>
                        <div className="w-1/2">
                            <span>Logradouro:</span>
                            <Input
                                type="text"
                                name="logradouro"
                                id="logradouro"
                                onChange={handleChange}
                                autocomplete="off"
                            />
                        </div>
                        <div className="w-1/2">
                            <span>Bairro:</span>
                            <Input
                                type="text"
                                name="bairro"
                                id="bairro"
                                onChange={handleChange}
                                autocomplete="off"
                            />
                        </div>
                        <div className="w-1/2">
                            <span>Cidade:</span>
                            <Input
                                type="text"
                                name="cidade"
                                id="cidade"
                                onChange={handleChange}
                                autocomplete="off"
                            />
                        </div>

                        <button
                            type="button"
                            onClick={handleCreateMotorista}
                            className="bg-green-500 hover:bg-green-700 transition duration-200 font-bold text-center shadow-md text-white py-2 px-4 rounded w-1/2">
                            Salvar
                        </button>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    )
}