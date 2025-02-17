import { StyleSheet} from "react-native";

export default StyleSheet.create({
//home page cards
//project card
    
    project: {
        borderRadius : 20, 
        borderWidth: 2,
        backgroundColor: "#FFFFFF",  // White background
        borderColor: "#EEEEEE", // Light gray border
        shadowColor: "#04060F", // Shadow color
        // paddingLeft:20,
        // paddingRight:50,
        marginLeft:10,
        padding:20
    },

    //Auto Layout Vertical
    Layout :{
        width: 200,//Hug (200px)
        height: 113,//Hug (113px)
        padding: 28,//28px
        gap: 24,//24px
    },
    //Auto Layout Horizontal
    Layout1 :{
        width : 144, //fixed(144px)
        Height: 57,//Hug (57px)
        gap : 32,
        alignItems: "center",
        justifyContent: "center", 
    },

    //sub auto layout vertical
    Layout2 :{
        // Width : 144, //Fill (144px)
        // Height : 57, //Hug (57px)
        gap : 8, //8px
        alignItems: "center",
        justifyContent: "center",
    },

    //Task Card List 
    //upcoming task
    //upcoming meetings
    task:{
        flexDirection:"row",
        borderRadius : 20, 
        borderWidth: 2, 
        padding : 28 ,
        gap : 12, 
        backgroundColor: "#FFFFFF",  // White background
        borderColor: "#EEEEEE",
        shadowColor: "#04060F", // Shadow color
        // shadowOffset: { width: 0, height: 4 }, // Shadow position
        // shadowOpacity: 0.05, // Shadow visibility (8%)
        // shadowRadius: 60, // Shadow blur
        //elevation: 5,
        
    },
    //Auto Layout Vertical
    Vertical :{
        width : 288,
        height: 80,
        gap : 8,

    },
    arrow:{
        width: 24,
        height: 24,
    },


//leads
    Project1:{
        width: 200, // Fixed width 200px
        height: 113, //hug 113px
        borderRadius : 20, 
        backgroundColor: "#FFFFFF",  // White background
        shadowColor: "#04060F", // Shadow color
        shadowOffset: { width: 0, height: 4 }, // Shadow position
        shadowOpacity: 0.08, // Shadow visibility (8%)
        shadowRadius: 60, // Shadow blur
    },

    Mask :{
        width: 380, // Fixed width 380px
        height: 150, 
    },

    box:{
        width: 380, // Fixed width 380px
        height: 164, //hug 
        padding : 28 ,//28px
        gap : 24, //12px

    },

    box1:{
        width: 324, // Fixed width 380px
        height: 52, //hug 
        gap : 32, //32px
    },

    box2:{
        width: 268, // Fixed width 380px
        height: 52, //hug 
        gap : 8,
    },

    Footer:{
        width: 324, // Fixed width 380px
        height: 32, //hug 
        gap : 20,
    },

    footerbox1 :{
        width: 324, // Fixed width 380px
        height: 32, //hug 
        justify: "space-between"
    },

    followup :{
        width: 95,
        height: 32,
        gap: 4,
        paddingTop: 6,
        paddingRight: 16,
        paddingBottom: 6,
        paddingLeft: 16,
        borderRadius: 100,
        x : '#246BFD', 
        y : '#6F9EFF',// Define gradient colors
        start : { x: 0.8, y: 0 }, // Equivalent to 286.17 degrees
        end : {x: 0.2, y: 1},
    },
    
    MeetingPending :{
        width: 132,
        height: 32,
        gap : 4,
        paddingVertical: 6, // Instead of separate top & bottom padding
        paddingHorizontal: 16, // Instead of separate left & right padding
        borderRadius: 100,
        justifyContent: "center", // Aligns content vertically
        alignItems: "center", // Aligns content horizontally
        x : "#FACC15", 
        y : "#FFE580",// Define gradient colors
        start : { x: 0.8, y: 0 }, // Equivalent to 286.17 degrees
        end : {x: 0.2, y: 1},
    },

    leadwin :{
        width: 91,
        height: 32,
        gap : 4,
        paddingVertical: 6, // Instead of separate top & bottom padding
        paddingHorizontal: 16, // Instead of separate left & right padding
        borderRadius: 100,
        justifyContent: "center", // Centers content vertically
        alignItems: "center", // Centers content horizontally
        x : "#4ADE80", 
        y : "#73FFA6",// Define gradient colors
        start : { x: 0.8, y: 0 }, // Equivalent to 286.17 degrees
        end : {x: 0.2, y: 1},
    },

    MeetingSchedule :{
        width: 140,
        height: 32,
        paddingVertical: 6, // Instead of separate top & bottom padding
        paddingHorizontal: 16, // Instead of separate left & right padding
        borderRadius: 100,
        justifyContent: "center", // Centers content vertically
        alignItems: "center", // Centers content horizontally  
        x : "#FF4D67", 
        y : "#FF8A9B",// Define gradient colors
        start : { x: 0.8, y: 0 }, // Equivalent to 286.17 degrees
        end : {x: 0.2, y: 1},
    },

//Add service 
    Insurance:{
        width: 380,
        height: 196,
        borderRadius: 20,
        padding: 28,
        backgroundColor:"#FFFFFF",
        shadowColor: "#04060F", // Shadow color
        shadowOffset: { width: 0, height: 4 }, // Shadow position
        shadowOpacity: 0.05, // Shadow visibility (5%)
        shadowRadius: 60, // Shadow blur
        elevation: 5,
    },

    Inside: {
        width : 288,
        height: 140,
        gap : 8,
    },
    
    logo: {
        width : 24,
        height : 24,
    },

    Delete:{
        width: 16.15,
        height: 18.48,
        position: "absolute",
        top: 2.71,
        left: 4.21,
        borderwidth: 1.5,
        borderstyle: "solid",
    },

//leadTask
    Addaccount : {
        width : 380,
        height : 194,
        borderRadius: 20,
        backgroundColor:"#FFFFFF",
        shadowColor: "#04060F", // Shadow color
        shadowOffset: { width: 0, height: 4 }, // Shadow position
        shadowOpacity: 0.08, // Shadow visibility (5%)
        shadowRadius: 60, // Shadow blur
        elevation: 5,
    },

    maskgroup2 :{
        width : 380,
        height : 150,
    },
    vertical:{
        width: 380,
        height: 194,
        gap: 24,
        padding: 28,

    },
    vertical1:{
        width: 324,
        height: 52,
        gap: 32,
    },
    vertical2:{
        width: 268,
        height: 52,
        gap: 8,
    },
    moreicon :{
        width: 24,
        height : 24,
    },

    threedot :{
        width: 18.5,
        height: 18.5,
        top: 2.75,
        left: 2.75,
    },
    bottom :{
        width: 324,
        height: 32,
        gap: 20,
    },
    bottom1 :{
        width: 324, // Fixed width 380px
        height: 32, //hug 
        justify: "space-between"
    },
    MandateApproved :{
        width: 159,
        height: 32,
        gap: 4,
        paddingTop: 6,
        paddingRight: 16,
        paddingBottom: 6,
        paddingLeft: 16,
        borderRadius: 100,
        x : "#246BFD", 
        y : "#6F9EFF",// Define gradient colors
        start : { x: 0.8, y: 0 }, // Equivalent to 286.17 degrees
        end : {x: 0.2, y: 1},
    },
    BlueLine :{
        width : 200,
        height : 6,
        borderRdaius : 100,
        x : "#246BFD", 
        y : "#6F9EFF",// Define gradient colors
        start : { x: 0.8, y: 0 }, // Equivalent to 286.17 degrees
        end : {x: 0.2, y: 1},
    },
    MandateApproved2 :{
        width: 159,
        height: 32,
        gap: 4,
        paddingTop: 6,
        paddingRight: 16,
        paddingBottom: 6,
        paddingLeft: 16,
        borderRadius: 100,
        x : "#246BFD", 
        y : "#6F9EFF",// Define gradient colors
        start : { x: 0.8, y: 0 }, // Equivalent to 286.17 degrees
        end : {x: 0.2, y: 1},
    },
    RedLine :{
        width : 324,
        height : 6,
        borderRdaius : 100,
        x : "#FF4D67", 
        y : "#FF8A9B",// Define gradient colors
        start : { x: 0.8, y: 0 }, // Equivalent to 286.17 degrees
        end : {x: 0.2, y: 1},
    },

//profile page
    service:{
        width: 380, 
        height: 136, 
        borderRadius : 20, 
        backgroundColor: "#FFFFFF",  // White background
        shadowColor: "#04060F", // Shadow color
        shadowOffset: { width: 0, height: 4 }, // Shadow position
        shadowOpacity: 0.08, // Shadow visibility (8%)
        shadowRadius: 60, // Shadow blur
        elevation: 5,
    },

    maskk:{
        width : 380,
        height : 150,
    },
    auto:{
        width : 380,
        height : 136, 
        padding : 28,
        gap : 24,
    },
    auto1:{
        width : 324,
        height : 24, 
        gap : 32,
    },
    auto2:{
        width : 268,
        height : 24, 
        gap : 8,
    },
    iconedit : {
        width :24,
        height : 24, 
    },
    edit:{
        width: 18,
        height: 18,
        top: 3,
        left: 3,
    },
    auto3:{
        width: 324,
        height: 32,
        gap: 10,
    },
    green1:{
        width: 94,
        height: 32,
        gap: 4,
        paddingTop: 6,
        paddingRight: 16,
        paddingBottom: 6,
        paddingLeft: 16,
        borderRadius: 100,
        x : "#4ADE80", 
        y : "#73FFA6",// Define gradient colors
        start : { x: 0.8, y: 0 }, // Equivalent to 286.17 degrees
        end : {x: 0.2, y: 1},
    },
    blue1:{
        width: 118,
        height: 32,
        gap: 4,
        paddingTop: 6,
        paddingRight: 16,
        paddingBottom: 6,
        paddingLeft: 16,
        borderRadius: 100,
        x : "#246BFD", 
        y : "#6F9EFF",// Define gradient colors
        start : { x: 0.8, y: 0 }, // Equivalent to 286.17 degrees
        end : {x: 0.2, y: 1},
    },
    red1 :{
        width: 76,
        height: 32,
        gap: 4,
        paddingTop: 6,
        paddingRight: 16,
        paddingBottom: 6,
        paddingLeft: 16,
        borderRadius: 100,
        x : "#FF4D67", 
        y : "#FF8A9B",// Define gradient colors
        start : { x: 0.8, y: 0 }, // Equivalent to 286.17 degrees
        end : {x: 0.2, y: 1},
    },

    //occupation
    occupation  :{
        width: 380, 
        height: 176, 
        borderRadius : 20, 
        backgroundColor: "#FFFFFF",  // White background
        shadowColor: "#04060F", // Shadow color
        shadowOffset: { width: 0, height: 4 }, // Shadow position
        shadowOpacity: 0.08, // Shadow visibility (8%)
        shadowRadius: 60, // Shadow blur
        elevation: 5,
    },
    maskk2:{
        width : 380,
        height : 150,
    },
    container :{
        gap: 24,
        padding: 28,
    },
    container1 :{
        width: 324,
        height: 24,
        gap: 32,
    },
    container2 :{
        width: 268,
        height: 24,
        gap: 8,
    },
    iconedit2 :{
        width: 24,
        height: 24,
    },
    edit2:{
        width: 18,
        height: 18,
        top: 3,
        left: 3,
    },
    horizontal :{
        width: 324,
        height: 72,
        gap: 10,

    },
    blue2:{
        width: 55, 
        height: 32, 
        borderRadius : 100, 
        paddingTop: 6,
        paddingRight: 16,
        paddingBottom: 6,
        paddingLeft: 16,
        gap: 4,
        x : "#246BFD", 
        y : "#6F9EFF",// Define gradient colors
        start : { x: 0.8, y: 0 }, // Equivalent to 286.17 degrees
        end : {x: 0.2, y: 1},
    },

    green2:{
        width: 86, 
        height: 32, 
        borderRadius : 100, 
        paddingTop: 6,
        paddingRight: 16,
        paddingBottom: 6,
        paddingLeft: 16,
        gap: 4,
        x : "#4ADE80", 
        y : "#73FFA6",// Define gradient colors
        start : { x: 0.8, y: 0 }, // Equivalent to 286.17 degrees
        end : {x: 0.2, y: 1},

    },
    yellow2:{
        width: 115, 
        height: 32, 
        borderRadius : 100, 
        paddingTop: 6,
        paddingRight: 16,
        paddingBottom: 6,
        paddingLeft: 16,
        gap: 4,
        x : "#FACC15", 
        y : "#FFE580",// Define gradient colors
        start : { x: 0.8, y: 0 }, // Equivalent to 286.17 degrees
        end : {x: 0.2, y: 1},

    },
    red2 :{
        width: 70, 
        height: 32, 
        borderRadius : 100, 
        paddingTop: 6,
        paddingRight: 16,
        paddingBottom: 6,
        paddingLeft: 16,
        gap: 4,
        x : "#FF4D67", 
        y : "#FF8A9B",// Define gradient colors
        start : { x: 0.8, y: 0 }, // Equivalent to 286.17 degrees
        end : {x: 0.2, y: 1},
    },

})



