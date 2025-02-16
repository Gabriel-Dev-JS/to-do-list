import { KeyboardTypeOptions, TextInput, View } from "react-native";
import { Style } from "./style";

interface InputSearchProps {
    placeholder?: string;
    value?: string | undefined;
    type?: KeyboardTypeOptions;
    // onChangeText: (text: string | number) => void;
    onChangeText: (text: any) => void;
}

export const InputSearch = ({placeholder, onChangeText, value, type}: InputSearchProps) => {
    return(
        <View style={Style.container}>
            <TextInput 
            keyboardType={type}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            />
        </View>
    )
}