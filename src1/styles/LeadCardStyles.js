import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        gap: 4,
    },
    navbar: {
        height: 70,
        justifyContent: "space-between",
        paddingTop: 10,
        paddingRight: 24,
        paddingBottom: 10,
        paddingLeft: 24,
        backgroundColor: "grey",

    },
    centerContainer: {
        flexGrow:1
    },
    lead: {
        flexDirection: "row",  
        justifyContent: "space-between", 
        alignItems: "center", 
        height: 22,
        gap: 12,
        paddingRight: 24, 
        paddingLeft: 24,
    },
  
   cardContainer: {
        gap: 24,
        marginBottom: 24,
    },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#EEEEEE',
        shadowColor: '#04060F',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 60,
        padding: 24, 
        gap: 24, overflow:"hidden"
    },
    HorLayout: {
        gap: 10, 
    },
    VerLayout: {
        gap: 10,
        flexDirection: "row",  
        justifyContent: "space-between", 
        alignItems: "flex-end", 
    },
    statusBadge: {
        borderRadius: 100,
        paddingTop: 6,
        paddingRight: 16,
        paddingBottom: 6,
        paddingLeft: 16,
        gap: 4,
    },
    moreCircleDot: {
        position: "absolute",
        top: 1,
        right: 1,
        width: 24,  
        height: 24,
    },
    moreCircleIcon: {
        width: 24,   
        height: 24,
        resizeMode: "contain", 
    },
});




