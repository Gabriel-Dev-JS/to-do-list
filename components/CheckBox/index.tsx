import { EvilIcons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { Text, TouchableOpacity, View } from "react-native";
import { Style } from "./style";

export interface CheckBoxProps {
    tarefa: String;
    checked: boolean | undefined;
    func?: () => void;
    iconTrash?: () => void;
    iconUpdate?: () => void;
}

export const CheckBox = ({tarefa, checked, func, iconTrash, iconUpdate}: CheckBoxProps):JSX.Element => {
    return (
        <View style={Style.container}>
            <View style={{flexDirection:'row', width:"85%", marginLeft:4}}>
                <TouchableOpacity onPress={func}>
                    <Checkbox value={checked} style={{marginRight:20}}/>
                </TouchableOpacity>
                <Text>{tarefa}</Text>
            </View>
            <View style={{height:"100%", justifyContent:'space-between'}}>
                <TouchableOpacity onPress={iconUpdate}>
                <EvilIcons name="pencil" size={34} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={iconTrash} style={{marginBottom:8}}>
                    <EvilIcons name="trash" size={34} color="black" />
                </TouchableOpacity>
            </View>
            
        </View>
    )
}