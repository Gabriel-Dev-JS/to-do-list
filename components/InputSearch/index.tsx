import { TextInput, View } from "react-native";
import { Style } from "./style";

interface InputSearchProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
}

export const InputSearch = ({placeholder, onChangeText, value}: InputSearchProps) => {
    return(
        <View style={Style.container}>
            <TextInput 
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            />
        </View>
    )
}