import React, { useReducer } from "react";
import firebase from "../../firebase";
import FirebaseReducer from "./firebaseReducer";
import FirebaseContext from "./firebaseContex";
import { Obtener_datos_exito } from "../../types";

//contular a la BD y realizar las configuraciones necesarias
const FirebaseStage = props => {
    const inicialStage = {
        datos:[]
    }
    const [state, dispach] = useReducer(FirebaseReducer, inicialStage)
    const obtenerdatos = () => {
        firebase.db.collection('plato').where('categoria', '==', 'Publico').onSnapshot(manejarSnapshot);
        function manejarSnapshot(snapshot) {
            console.log('Snapshot recibido:', snapshot);
            let plato = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });
            console.log('Platos obtenidos:', plato);
            dispach({
                type: Obtener_datos_exito, 
                payload: plato 
            })
            
        }
    };
    return (
        <FirebaseContext.Provider
            value={{
                datos: state.datos,
                firebase,
                obtenerdatos,
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}


export default FirebaseStage;