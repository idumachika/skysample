import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';


export default function CustomInput({ style, ...props }) {
    const { onChange, value } = props
    return (
        <View style={{ width: '100%', paddingHorizontal: 20 }}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                {...props}
                style={[styles.input, style]}
                placeholderTextColor={'darkgray'}
                value={value}
                onChangeText={onChange}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#e8e8e8',
        width: '100%',
        padding: 10,
        height: 50,
        borderRadius: 8,
        color: 'black',
        fontSize: 16

    },
    label: {
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.15,
        color: '#000000',
        // fontFamily: Fonts.regular
    }
});
