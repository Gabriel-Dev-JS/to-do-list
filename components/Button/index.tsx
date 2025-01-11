import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface ButtonProps {
    title: string;
    // onPress: () => string;
    onPress: () => void;
}

export const Button = ({title, onPress}:ButtonProps) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>
                {title} 
            </Text>
        </TouchableOpacity>
    )
}