import Checkbox from "expo-checkbox";
import { Text, TouchableOpacity, View } from "react-native";
import { Style } from "./style";

interface CheckBoxProps {
    texto: String;
    checked: boolean;
    func?: () => void;
    // style?: StyleSheet<TextProps>;
}

export const CheckBox = ({texto, checked, func}: CheckBoxProps) => {
    return (
        <View style={Style.container}>
            <Text>{texto}</Text>
            <TouchableOpacity onPress={func}>
                <Checkbox value={checked} style={{marginRight:20}}
                />
            </TouchableOpacity>
        </View>
    )
}