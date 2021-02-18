import { StyleSheet,Dimensions} from 'react-native';


export const globalStyle = StyleSheet.create({
    
//-=======================header gredient
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    wLogo: {
        marginTop: 15,
        marginRight: 40,
        width: 22,
        height: 15,

    },  logoDiv: {
        position: "absolute",
        left: 110,
        top: 15,
    },
    header: {
        marginBottom: 5,
        backgroundColor: '#006ADE',
        justifyContent: "center",
        alignItems: "center",
        height: Dimensions.get('window').height - Dimensions.get('window').height / 1.15,
    },
    head: {
        marginBottom: 5,
        width: "100%",
        flexDirection: "row",
    },
 
    div: {
        marginTop: 40,
        width: "65%",
        height: 40,
        alignItems: "center",
    },
    headdiv: {
        marginTop: 40,
        width: "16%",
        height: 20,
        alignItems: "center",
    },
    footer: {
        flex: 2,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",

    },

    image1: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
    },
    logo: {
        position: "absolute",
        left: 110,
        top: 15,
    },
    get: {
        color: "white",
        fontFamily: "Ebrima",
        fontSize: 14,
        letterSpacing: .8,
        textDecorationStyle: "solid",
        fontWeight:'bold',
        marginBottom: 20,
        lineHeight: 18,
    },
    work: {
        color: "white",
        fontFamily: "Ebrima",
        fontSize: 14,
        letterSpacing:.8,
        marginBottom: 20,
        fontWeight:"200",
        lineHeight: 18,
    },
    chevIcon: {
        marginTop: 15,
        width: 12,
        height: 16,
        //    height:20,
        //     width: 20,
    },
    profileLogo: {
        marginTop: 10,
        width: 30,
        height: 30,
        // width: "45%",
    },
    chevron: {
        marginTop: 15,
        width: 12,
        height: 16,
        //    height:20,
        //     width: 20,
    },
    Image: {
        marginTop: 15,
        marginRight: 40,
        width: 22,
        height: 15,
    },

    btn: {
        marginTop: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 30,
        width: 280,
        height: 39,

    },

    btntext: {
        color: "#fff",
        padding: 7,
        textAlign: "center",
        fontFamily: "Ebrima",
        fontSize: 16,
        fontWeight:'bold',
    },
    // INPUT FORM
    
    inputdiv: {
        backgroundColor: "white",
        width: 260,
        height: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
        marginBottom: 5,

    },

    form2: {
        borderRadius: 4,
        // marginTop: 20,
        paddingBottom: 5,
        paddingTop: 5,
        backgroundColor: "white",
        borderBottomWidth: 2,
        borderBottomColor: "#aeb0b3",
        color: "rgb(0,0,0)",
        width: 250,
        height: 30,
        // marginVertical: 5,
        marginHorizontal: 5,
        // paddingLeft: 13,
    }
    ,
    form3: {
        borderRadius: 4,
        backgroundColor: "white",
        color: "rgb(0,0,0)",
        width: 260,
        textAlignVertical: 'top',
        paddingTop: 5,
        marginVertical: 10,
        marginHorizontal: 50,
        paddingLeft: 13,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,

    }




});