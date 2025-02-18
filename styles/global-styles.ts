import { Colors } from "@/constants/Colors"
import {Button, StyleSheet} from "react-native"

export const globalStyles = StyleSheet.create(
    {
        background:{
            flex: 1,
            backgroundColor: Colors.background,
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingBottom: 20
        },
        button:{
            height: 70,
            width: 300,
            justifyContent:'center',
            alignItems: 'center',
            borderRadius: 20,
            marginHorizontal: 30,
            paddingHorizontal:5,
        },
        TextConteiner:{
            color: Colors.textPrimary,
            fontSize: 20,
            textAlign: "center",
            fontWeight: 800,
            width:400
        },
        Conteiner:{
            flex:1,
            justifyContent: "space-between",
            paddingBottom: 20,
            alignItems:"center",
            paddingVertical: 20,
            
        },
    })