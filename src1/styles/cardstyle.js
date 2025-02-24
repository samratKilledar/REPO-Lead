import { StyleSheet } from "react-native";

export default StyleSheet.create({
    //home page cards
    //project card
    project: {
        borderRadius: 20,
        borderWidth: 2,
        backgroundColor: "#FFFFFF",
        borderColor: "#EEEEEE",
        shadowColor: "#04060F",
        marginLeft: 10,
        padding: 20
    },
    //Task Card List 
    //upcoming task
    //upcoming meetings
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
    //Auto Layout Vertical
    Vertical: {
        width: 288,
        height: 80,
        gap: 8,

    },
    arrow: {
        width: 24,
        height: 24,
        maxWidth: 24,
        aspectRatio: 1,
        alignSelf: "flex-end",
    },
    //leads

    //profile logout page
    green1: {
        gap: 4,
        height: 32,
        paddingTop: 6,
        paddingRight: 16,
        paddingBottom: 6,
        paddingLeft: 16,
        borderRadius: 100,
        overflow: 'hidden',
    },
    blue1: {
        flex: 0.6,
        gap: 4,
        height: 32,
        paddingTop: 6,
        paddingRight: 16,
        paddingBottom: 6,
        paddingLeft: 16,
        borderRadius: 100,
        overflow: 'hidden',
    },
    red1: {
        flex: 0.3,
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
        flex: 0.3,
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
        flex: 0.4,
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
    },
    Inside: {
        // width : 288,
        height: 140,
        gap: 8,
    },
});
