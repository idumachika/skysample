import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Platform, ActivityIndicator, Image } from 'react-native'
import Modal from "react-native-modal";
import ProductHeader from './ProductHeader';
import camera from '../assets/Icon/camera.png';
import ImagePicker from 'react-native-image-crop-picker';
import CustomInput from './CustomInput';




const AddModal = (props) => {
    console.log("the initial state", props)
    const { name, category, purchasePrice, description, imageSource } = props
    const [uploading, setUploading] = React.useState(false);



    return (
        <Modal isVisible={props.isVisible}
            style={styles.container}
        >
            <View style={styles.ModalContent}>
                <View style={styles.Header}>
                    <TouchableOpacity onPress={props.toggleModal}>
                        <Text style={styles.Cancelbtn}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={props.onAdd} >
                        <Text style={styles.Title}>Add</Text>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity
                    onPress={() =>
                        props.selectImage()
                    }
                    activeOpacity={0.75}
                    style={styles.center}
                >
                    <ProductHeader
                        imageSource={imageSource.hasOwnProperty('path')
                            ? { uri: imageSource.path }
                            : null}

                    />
                    {uploading ? (
                        <ActivityIndicator
                            style={styles.avatar.icon}
                            size="large"
                            color="#fff"
                        />
                    ) : (
                        <Image source={camera} style={styles.avatar.icon} />
                    )}
                </TouchableOpacity>

                <CustomInput label="Name" value={name} onChange={val => props.handleChangeName('name', val)} />
                <CustomInput label="Category" value={category} onChange={val => props.handleChangeCategory('type', val)} />
                <CustomInput label="Prices" value={purchasePrice} onChange={val => props.handleChangePrice('purchasePrice', val)} />
                {/* <CustomInput label="Description" value={description} onChange={val => props.onChange('description', val)} />   */}



            </View>
        </Modal>
    )
}


export default AddModal
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        margin: 0,
        marginTop: 20



    },
    ModalContent: {
        flex: 1,

    },
    Header: {
        height: 75,
        justifyContent: "space-between",
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 20


    },
    Title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
        // paddingLeft: 20,
        // paddingTop: 20,
    },
    Cancelbtn: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'blue',
        // paddingLeft: 20,
        // paddingTop: 20,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    avatar: {
        content: {
            backgroundColor: '#FEEDDB',
            borderRadius: 120,
            height: 120,
            overflow: 'hidden',
            width: 120
        },
        self: {
            height: 120,
            resizeMode: 'cover',
            width: 120
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