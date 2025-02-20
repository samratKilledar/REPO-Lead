import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
       // backgroundColor: "#FFFFFF",
        flex: 1,
        gap: 4,
    },
    navbar: {
        //width: 428,
        height: 70,
        // flex: 0.3,
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
        // width: 428,
        height: 22,
        gap: 12,
        paddingRight: 24, 
        paddingLeft: 24,
        //backgroundColor: "red",
    },
  
   cardContainer: {
        // width: 380,
        // height: 150,
        gap: 24,
        // paddingRight: 10,
        // paddingLeft: 10,
        marginBottom: 24,
        //backgroundColor: 'blue',

    },
    card: {
        // width: 380,
       // height: 164,
        backgroundColor: "#FFFFFF",
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#EEEEEE',
        shadowColor: '#04060F',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 60,
       // elevation: 1,
        padding: 24, 
        gap: 24, overflow:"hidden"
    },
    HorLayout: {
        // width: 324,
        // height: 52,
        gap: 10, 
        //backgroundColor: "pink",

    },
    VerLayout: {
        // width: 324,
      //  height: 32,
        gap: 10,
        flexDirection: "row",  
        justifyContent: "space-between", 
        alignItems: "flex-end", 
        //backgroundColor: "pink",
    },

    statusBadge: {
        // width: 98,
        // height: 32,
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




