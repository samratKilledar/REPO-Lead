import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: 60,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 12,
    gap: 20,
    backgroundColor: "#FAFAFA",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 13.33,
    height: 16.67,
    top: 2,
    left: 2,
    marginRight: 12,
    color: "#616161",
    resizeMode: "contain",
  },
  followupicon: {
    width: 13.33,
    height: 16.67,
    top: 2,
    left: 2,
    marginRight: 12,
    color: "#616161",
    resizeMode: "contain",
  },
  searchbaricon:{
    width: 15,
    height: 15,
    resizeMode: "contain",
  },
    width: 18,   
    height: 57,
    resizeMode: "contain", 
  },
  followup: {
    position: "absolute",
    top: 1,
    right: 1,
    width: 40,  
    height: 24,
  },

  input: {
    flex: 1,
    fontFamily: "Urbanist",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 19.6,
    letterSpacing: 0.2,
    color: "#616161",

  },
  eyeIcon: {
    width: 16.67,
    height: 14.17,
    top: 2.92,
    left: 1.67,
    tintColor: "#616161",
  },
});
