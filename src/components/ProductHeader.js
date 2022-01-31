import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

const ProductHeader = props => {
    const { imageSource } = props;
    console.log("imageSource", imageSource)
    return (

        <View style={styles.container}>
            <View>
                <View style={styles.avatar.content}>
                    <Image
                        style={styles.avatar.self}
                        source={
                            imageSource}
                    />
                </View>
            </View>
        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        content: {
            backgroundColor: '#FEEDDB',
            overflow: 'hidden',
            width: 120

        },
        self: {
            height: 120,
            resizeMode: 'cover',
            width: 120,

        },
        icon: {
            position: 'absolute',
            borderColor: '#00000015',
            borderWidth: 1,
            top: '30%',
            width: 50,
            height: 50,
            resizeMode: 'contain'
        }
    },

})
export default ProductHeader