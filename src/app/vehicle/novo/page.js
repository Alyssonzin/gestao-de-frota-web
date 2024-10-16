"use client"

import NavAdmin from "@/components/created/NavAdmin";
import Input from "@/components/created/Input";
import Footer from "@/components/created/Footer";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createVehicle } from "@/api/routes";

export default function CadastrarVeiculo() {
    const [veiculo, setVeiculo] = useState({});

    const router = useRouter();

    const handleChange = (event) => {
        const { name, value } = event.target;

        setVeiculo({
            ...veiculo,
            [name]: value
        })
    }

    const handleCreateVeiculo = async () => {
        createVehicle(veiculo);
        router.push('/vehicle');
    }

    return (
        <>
            <main className="flex h-screen bg-gray-200">
                <NavAdmin />
                <section className="flex flex-col items-center w-full p-4 ml-8 space-y-6">
                    <h1 className="text-3xl font-bold text-center">Cadastro de veículos</h1>
                    <form className="flex flex-col space-y-4 justify-center items-center w-1/2">
                        <div className="w-1/2">
                            <span>Modelo:</span>
                            <Input
                                type="text"
                                onChange={handleChange}
                                name="modelo"
                                id="modelo"
                                autocomplete="off"
                            />
                        </div>
                        <div className="w-1/2">
                            <span>Ano:</span>
                            <Input
                                type="text"
                                onChange={handleChange}
                                name="ano"
                                id="ano"
                                autocomplete="off"
                            />
                        </div>
                        <div className="w-1/2">
                            <span>Placa:</span>
                            <Input
                                type="text"
                                onChange={handleChange}
                                name="placa"
                                id="placa"
                                autocomplete="off"
                            />
                        </div>
                        <div className="w-1/2">
                            <span>Renavam:</span>
                            <Input
                                type="text"
                                onChange={handleChange}
                                name="renavam"
                                id="renavam"
                                autocomplete="off"
                            />
                        </div>
                        <div className="w-1/2">
                            <span>Cor:</span>
                            <Input
                                type="text"
                                onChange={handleChange}
                                name="cor"
                                id="cor"
                                autocomplete="off"
                            />
                        </div>
                        <button
                            type="button"
                            onClick={handleCreateVeiculo}
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