import { Pressable, StyleSheet, Text} from 'react-native'
import React from 'react'
interface Props {
  label: string;
  OnPress?: () => void;
  onLongPress?: () => void;
  position?: "left" | "right" ;
}
export default function FAB({
  label,
  OnPress,
  onLongPress,
  position = "right",
} : Props) {
  return (
    <Pressable 
          onPress={OnPress}
          onLongPress={onLongPress}
          style={({pressed}) =>[
            styles.floatingbutton,
            position == 'right' ? styles.positionRigth
            : styles.positionLeft,
            pressed ? {opacity: 0.7 } : {opacity: 1}
            ]}>
            <Text style = {styles.FlotingButtonText}>+1</Text>
          </Pressable>
  );
}
const styles = StyleSheet.create({
  floatingbutton: 
  {
    position: 'absolute', 
    bottom: 20,
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 600,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    elevation: 3,
  },
  FlotingButtonText: 
  {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    width: 25, 
    height: 25,
    textAlign: 'center'
  },
  positionLeft: {
    left: 20
  },
  positionRigth: 
  {
    right: 20
  },
})