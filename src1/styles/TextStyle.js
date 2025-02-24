import { StyleSheet } from "react-native"
export default StyleSheet.create({
    // On-Boarding part

    heading: {
        fontFamily: "Urbanist",  // ✅ Properly enclosed in quotes
        fontWeight: "700",       // ✅ Font weight should be a string in React Native
        fontSize: 32,
        // lineHeight: 35.2,
        textAlign: "center",
    },

    forgotPasswordLogin: {
        fontFamily: "Urbanist",
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 22.4,
        letterSpacing: 0.2,
        textAlign: "center",
        color: "#2B2162", // ✅ Correct color
        marginTop: 20,
    },



    //Forgot and Reset Password 
    Titles: {                   //H4 bold, Taska 
        fontfamily: "Urbanist",
        fontWeight: 700,
        fontSize: 24,
        lineHeight: 28.8,
        marginLeft: 10
    },
    //Instruction
    InstructionText: {
        //width: 380,
        // height: 44,
        fontFamily: "Urbanist",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 22.4,
        letterSpacing: 0.2,
        background: 212121, textAlign: "left",
        marginBottom: 10
    },
    //Congratulations
    modalText: {
        fontFamily: "Urbanist",
        fontweight: 700,
        fontSize: 24,
        lineHeight: 28.8,
        letterSpacing: 0,
        textAlign: "center",
        color: "#2B2162",
    },
    //Your account is ready to use
    modalText2: {
        fontFamily: "Source Sans Pro",
        fontWeight: 400,
        fontSize: 18,
        lineHeight: 27,
        letterSpacing: 0,
        textAlign: "center",

    },
    //Task tab style

    //lead task client task tab text
    tabText: {
        fontFamily: "Urbanist",
        fontWeight: "600",
        fontSize: 18,
        lineHeight: 25.2,
        letterSpacing: 0.2,
        textAlign: "center",
    },

    activeTabText: {
        color: "#2B2162",
    },
    inactiveTabText: {
        color: "#9E9E9E",
    },
    //Home & Action Menu 
    SearchBar: {                //Search
        fontfamily: "Urbanist",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 19.6,
    },

    subTitle: {
        fontfamily: "Urbanist",  //Recent Project + Notification part + Inbox Sec (msg)
        fontWeight: 700,
        fontSize: 18,
        lineHeight: 21.6,
    },


    //06 Profile & Setting  yet name to decide 
    //Home page
    textNum: {
        fontSize: 24,
        fontWeight: "700",
        color: "#212121",
        lineHeight: 28.8,
        fontFamily: "Urbanist",
        marginBottom: 5,

    },
    textLabel: {
        fontFamily: "Urbanist",
        fontWeight: "700",
        fontSize: 14,
        color: "#424242",
        lineHeight: 19.6,
        letterSpacing: 0.2,
        textAlign: "center",
        marginTop: 5,
    },
    upComingUp: {
        fontFamily: "Urbanist",
        fontWeight: "700",
        fontSize: 18,
        lineHeight: 21.6,
        color: "#212121",
    },
    SeeallText: {
        color: "#246BFD",
        fontFamily: "Urbanist",
        fontWeight: "700",
        fontSize: 16,
        lineHeight: 22.4,
        letterSpacing: 0.2,
        textAlign: "right",
        flex: 1
    },
    cardname: {
        width: 288,
        height: 24,
        color: "#212121",
        fontFamily: "Urbanist",
        fontWeight: "700",
        fontSize: 20,
        lineHeight: 24,
        letterSpacing: 0,
    },
    cardnum: {
        width: 288,
        height: 20,
        color: "#424242",
        fontFamily: "Urbanist",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 19.6,
        letterSpacing: 0.2,
    },
    carddate: {
        width: 288,
        height: 20,
        color: "#424242",
        fontFamily: "Urbanist",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 19.6,
        letterSpacing: 0.2,

    },

    //notification
    notificationtext: {
        fontFamily: "Urbanist",
        fontWeight: 700,
        fontSize: 18,
        lineHeight: 21.6,
        color: "#212121",
    },

    notificationtext1: {
        fontFamily: "Urbanist",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: 19.6,
        letterSpacing: 0.2,
        color: "#616161",
    },
    boldText: {
        fontFamily: "Urbanist",
        fontWeight: 700,
        fontSize: 14,
        lineHeight: 19.6,
        letterSpacing: 0.2,
        color: "#616161",
    },

    //Insurance and mutual fund text
    Insurance: {
        fontFamily: "Urbanist",
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 24,
        color: "#212121",
    },
    datesText: {
        fontFamily: "Urbanist",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 19.6,
        letterSpacing: 0.2,
        color: "#424242",
    },

    //edit profile page
    logouttext: {
        fontFamily: "Urbanist",
        fontWeight: 600,
        fontSize: 18,
        lineHeight: 25.2,
        letter: 0.2,
        color: "#F75555",
        textAlign: "center",  // Centers text horizontally
        alignSelf: "center",
    },
    DanielName: {
        fontFamily: "Urbanist",
        fontWeight: 700,
        fontSize: 24,
        lineHeight: 28.8,
        textAlign: "center",
        color: "#212121",
    },
    gmailText: {
        fontFamily: "Urbanist",
        fontWeight: 600,
        fontSize: 14,
        lineHeight: 19.6,
        letter: 0.2,
        color: "#212121",
        textAlign: "center",  // Centers text horizontally
    },
    serviceText: {
        fontFamily: "Urbanist",
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 24,
        color: "#212121",
    },
    InsuranceTextt: {
        fontFamily: "Urbanist",
        fontWeight: 600,
        fontSize: 14,
        lineHeight: 19.6,
        letter: 0.2,
        color: "#FFFFFF",
        textAlign: "center",
    },
    modallText: {
        fontFamily: "Urbanist",
        fontWeight: 700,
        fontSize: 28,
        lineHeight: 28.8,
        color: "#F75555",
        textAlign: "center",

    },
    modallText2: {
        fontFamily: "Urbanist",
        fontWeight: 700,
        fontSize: 28,
        lineHeight: 28.8,
        color: "#212121",
        textAlign: "center",
    },
    leadText: {
        fontFamily: "Urbanist",
        fontWeight: 700,
        fontSize: 18,
        lineHeight: 21.6,
        color: "#212121",
    },
    //LeadCardStyle
    logoutText: {
        fontFamily: "Urbanist",
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 24,
        color: "#212121",

    },
    namePhone: {
        fontFamily: "Urbanist",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 19.6,
        color: "#424242",
    },
    statusText: {
        fontFamily: "Urbanist",
        fontWeight: "600",
        fontSize: 14,
        lineHeight: 19.6,
        letterSpacing: 0.2,
        color: "#FFFFFF",
        textAlign: "center",
    },
    dateTime: {
        fontFamily: "Urbanist",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 14.4,
        letterSpacing: 0.2,
        color: "#9E9E9E",
    },
    //LeadCardStyle
    nameText: {
        fontFamily: "Urbanist",
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 24,
        color: "#212121",

    },
    namePhone: {
        fontFamily: "Urbanist",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 19.6,
        color: "#424242",
    },
    statusText: {
        fontFamily: "Urbanist",
        fontWeight: "600",
        fontSize: 14,
        lineHeight: 19.6,
        letterSpacing: 0.2,
        color: "#FFFFFF",
        textAlign: "center",
    },
    dateTime: {
        fontFamily: "Urbanist",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 14.4,
        letterSpacing: 0.2,
        color: "#9E9E9E",
    },

    //DetailItem Text---leaddetail and clientdetail
    label: {
        fontFamily: 'Urbanist',
        fontWeight: '500',
        fontSize: 14,
        color: '#616161',
    },
    detail: {
        fontFamily: 'Urbanist',
        fontWeight: '500',
        fontSize: 16,
        color: '#212121',
    },
    leadStatusText: {
        color: '#2B2162',
        fontSize: 14,
        fontWeight: '600',
    },
    serviceRequestText: {
        fontFamily: "Urbanist",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 22.4,
        letterSpacing: 0.2,
        color: "#212121",
    },

}
);


