import { globalStyles } from "@/styles/global-styles";
import { Text, View } from "react-native"
import CambiarButton from "@/components/CambiarButton"
import { Colors } from "react-native/Libraries/NewAppScreen";

const CambiarelColor=()=>{
    return(
      
        <View>
        <Text>
          Cambiar aletoriamente el color 
        </Text>
        {/* <View style={globalStyles.button}>
            <CambiarButton
            label="Cambiar Color"
            blackText
            color = {Colors.textPrimary}
            backgroundColor={Colors.backgroundButton}
            onPress = {}
            />
        </View> */}
        </View>
    );

}
