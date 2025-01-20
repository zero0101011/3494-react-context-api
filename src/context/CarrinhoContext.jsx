import React, { createContext } from "react";

export const CarrinhoContext = createContext()

export const CarrinhoProvider = ({ children }) =>  {

    return (

        const [carrinho, setCarrinho] = useState([]);

        <CarrinhoContext.Provider value={{ carrinho, setCarrinho }}>
            {children} 
        </CarrinhoContext.Provider>>
    )

}