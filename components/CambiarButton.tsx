import { Colors } from "@/constants/Colors";
import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import * as Haptics from 'expo-haptics'
interface Props{
    label: string,
    color?:String,
    blackText?: boolean,
    backgroundColor?: string,
    onPress: () => void,
}

const CambiarButtom = ({
    label,
    color = Colors.backgroundButton,
    backgroundColor=Colors.backgroundButton,
    blackText= true,
    onPress
} : Props) => {
  return (
    <Pressable 
        style={({pressed}) => ({
          ...globalStyles.button, 
          backgroundColor, 
          opacity: pressed ? .8 : 1,
        })}
        onPress={() => {
          Haptics.selectionAsync()
          onPress()
        }}>
        <Text 
            style={{...globalStyles.TextConteiner, color: blackText ? '#000' : '#fff'}}>
            {label}
        </Text>
    </Pressable>
  )
}
export default CambiarButtom