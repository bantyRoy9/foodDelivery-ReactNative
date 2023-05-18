import { StyleSheet,Platform } from "react-native"
export default StyleSheet.create({
    androidSaveAreaView:{
        flex:1,
        paddingTop: Platform.OS === 'android' ? 35 : 0,
        marginRight:1,
        marginLeft:1
    }
});
