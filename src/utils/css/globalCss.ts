import { StyleSheet } from 'react-native';

const globalCss = StyleSheet.create({
    modal: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.2)",
    },
    shadow: {
        shadowRadius: 10,
        shadowColor: "rgba(0,0,0,0.2)",
        shadowOpacity: 1,
        elevation: 1,
        shadowOffset: { width: 1, height: 1 },
    }
});


export default globalCss