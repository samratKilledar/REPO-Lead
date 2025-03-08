import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

    project: {
        borderRadius: 20,
        borderWidth: 2,
        backgroundColor: "#FFFFFF",
        borderColor: "#EEEEEE",
        shadowColor: "#04060F",
        marginLeft: 10,
        padding: 20
    },

    task: {
        flexDirection: "row",
        borderRadius: 20,
        borderWidth: 2,
        padding: 28,
        gap: 12,
        backgroundColor: "#FFFFFF",
        borderColor: "#EEEEEE",
        shadowColor: "#04060F",
        alignItems: "center",
        justifyContent: "space-between"

    },
  
    Vertical: {
        width: 288,
        height: 80,
        gap: 8,

    },
    arrow: {
        width: width * 0.06,  
        height: width * 0.06, 
        resizeMode: "contain",
      },

    green1: {
        gap: 4,
        height: 32,
        paddingTop: 6,
        paddingRight: width * 0.04, 
        paddingBottom: 6,
        paddingLeft: width * 0.04,
        borderRadius: 100,
        overflow: 'hidden'
    },
    blue1: {
        flex: 0.5,
        gap: 4,
        height: 32,
        paddingTop: 6,
        paddingRight: width * 0.04,
        paddingBottom: 6,
        paddingLeft: width * 0.04,
        borderRadius: 100,
        overflow: 'hidden',
    },
    red1: {
        flex: 0.5,
        gap: 4,
        height: 32,
        paddingTop: 6,
        paddingRight: 16,
        paddingBottom: 6,
        paddingLeft: 16,
        borderRadius: 100,
        overflow: 'hidden',
    },
    blue2: {
        flex: 0.245,
        width: '100%',
        height: 32,
        borderRadius: 100,
        paddingTop: 6,
        paddingRight: 16,
        paddingBottom: 6,
        paddingLeft: 16,
        gap: 4,
        overflow: 'hidden',
    },
    green2: {
        flex: 0.5,
        height: 32,
        borderRadius: 100,
        paddingTop: 6,
        paddingRight: 16,
        paddingBottom: 6,
        paddingLeft: 16,
        gap: 4,
        overflow: 'hidden',
    },
    yellow2: {
        flex: 0.9,
        height: 32,
        borderRadius: 100,
        paddingTop: 6,
        paddingRight: 16,
        paddingBottom: 6,
        paddingLeft: 16,
        gap: 4,
        overflow: 'hidden',
    },
    red2: {
        width: '25%',
        borderRadius: 100,
        paddingVertical: 6,
        paddingHorizontal: 16,
        gap: 4,
        overflow: 'hidden',
        marginTop: 10,
    },
    Insurance: {
        borderRadius: 20,
        padding: 28,
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    Inside: {
        height: 140,
        gap: 8,
    },
});
