import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height

const Inventory = () => {

    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <Text style={styles.Title}>Inventory</Text>
                <Feather name="plus-circle" color="blue" size={24}
                    style={{ paddingRight: 20, paddingTop: 20 }}
                />
            </View>

        </View>)
}
export default Inventory


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    Header: {
        width: width,
        height: 100,
        marginTop: 45,
        justifyContent: "space-between",
        flexDirection: 'row'

    },
    Title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        paddingLeft: 20,
        paddingTop: 20,
    }
})

