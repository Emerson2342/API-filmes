import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MovieType } from "../interfaces";


interface ListaContextProps {
    listaFilme: MovieType[];
    setListaFilme: React.Dispatch<React.SetStateAction<MovieType[]>>;
    listaSerie: MovieType[];
    setListaSerie: React.Dispatch<React.SetStateAction<MovieType[]>>;
}

const ListaContext = createContext<ListaContextProps | undefined>(undefined);

interface ListaProviderProps {
    children: ReactNode;
}

export const useListaContext = () => {
    const context = useContext(ListaContext);
    if (!context) {
        throw new Error("useListaContext deve ser usado dentro de SenhasProvider");
    }
    return context;
};

export const ListaProvider: React.FC<ListaProviderProps> = ({ children }) => {
    const [listaFilme, setListaFilme] = useState<MovieType[]>([]);
    const [listaSerie, setListaSerie] = useState<MovieType[]>([]);

    useEffect(() => {
        const loadAsyncData = async () => {
            try {
                const storedDataFilme = await AsyncStorage.getItem("listaFilme");
                const storedDataSerie = await AsyncStorage.getItem("listaSerie");
                if (storedDataFilme) {
                    setListaFilme(JSON.parse(storedDataFilme));
                }
                if (storedDataSerie) {
                    setListaSerie(JSON.parse(storedDataSerie));
                }
            } catch (error) {
                console.error("Erro ao carregar dados do AsyncStorage:", error);
            }
        };

        loadAsyncData();
    }, []);

    useEffect(() => {
        const saveAsyncData = async () => {
            try {
                await AsyncStorage.setItem("listaFilme", JSON.stringify(listaFilme));
                await AsyncStorage.setItem("listaSerie", JSON.stringify(listaSerie));
            } catch (error) {
                console.error("Erro ao salvar dados no AsyncStorage:", error);
            }
        };

        saveAsyncData();
    }, [listaFilme, listaSerie]);

    return (
        <ListaContext.Provider value={{ listaFilme, setListaFilme, listaSerie, setListaSerie }}>
            {children}
        </ListaContext.Provider>
    );
};
