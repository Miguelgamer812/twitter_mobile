const { StyleSheet } = require("react-native");

// crear los estilos de manera global
const globalStyles = StyleSheet.create({
    contenedor: {
        flex: 1
    },
    boton: {
        backgroundColor: '#ffAD00'
    },
    botonTexto: {
        color: '#000',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})

export default globalStyles;