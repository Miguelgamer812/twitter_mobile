import React, { useReducer } from "react";
import pedidosReducer from "./pedidosReducer";
import PedidosContext from "./pedidosContext";

//contular a la BD y realizar las configuraciones necesarias
const PedidosStage = props => {
    const inicialStage = {
        plato: []
    }
    const [state, dispach] = useReducer(pedidosReducer, inicialStage)
    return (
        <PedidosContext.Provider
            value={{
                plato: state.plato,
                firebase
            }}
        >
            {props.children}
        </PedidosContext.Provider>
    )
}

export default PedidosStage;