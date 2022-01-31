import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, FlatList, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AddModal from '../components/AddModal';
import initialData from '../shared/MockData/FakeData';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height
import ProductReducer from '../redux/productReducer';
import ImagePicker from 'react-native-image-crop-picker';




const renderItem = ({ item }) => {
    return (
        <View style={styles.productsWrapper}>
            <Image source={{ uri: item.photo }} style={styles.productImage} />
            <View style={styles.wrapperFooter}>
                <Text style={styles.productName}>{item.name}</Text>
                <View style={styles.productsWrapper2}>
                    <Text style={styles.purchasePrice}>{item.purchasePrice}</Text>
                </View>
            </View>

        </View>
    )

}

const Inventory = () => {

    const [isModalVisible, setModalVisible] = useState(false);
    const [name, setName] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [purchasePrice, setPurchasePrice] = React.useState('')
    const [imageSource, setImageSource] = React.useState({});

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }





    const [productData, dispatchProductData] = React.useReducer(ProductReducer, {
        products: initialData,
    });

    const handleAddProduct = () => {
        if (name == "") {
            alert('Name cannot be empty')
        } else if (category == "") {
            alert('Category cannot be empty')
        } else if (purchasePrice == "") {
            alert("Price cannot be empty")
        } else {
            dispatchProductData({ type: 'ADD_ITEM', name, category, purchasePrice, imageSource, id: getRandomArbitrary() })
        }


        setName('')
        setCategory('')
        setPurchasePrice('')
        setModalVisible(!isModalVisible);

    }

    const handleChangeName = (name, value) => {
        setName(value)
    }
    const handleChangeCategory = (name, value) => {
        setCategory(value)
    }

    const handleChangePrice = (name, value) => {
        setPurchasePrice(value)
    }

    const selectImage = () => {
        ImagePicker.openPicker({
            //width: 300,
            height: 400,
            cropping: true,
            includeBase64: true,
            compressImageQuality: 0.4
        }).then(image => {
            setImageSource(image)

        });
    }



    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <Text style={styles.Title}>Inventory</Text>
                <TouchableOpacity onPress={toggleModal}>
                    <Feather name="plus-circle" color="blue" size={30}
                        style={styles.Icon}
                    />
                </TouchableOpacity>

            </View>
            <View style={styles.content}>
                <FlatList
                    // style={styles.content}
                    numColumns={2}
                    data={productData.products}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>

            <AddModal
                isVisible={isModalVisible}
                name={name}
                category={category}
                purchasePrice={purchasePrice}
                toggleModal={toggleModal}
                handleChangeName={handleChangeName}
                handleChangeCategory={handleChangeCategory}
                handleChangePrice={handleChangePrice}
                selectImage={selectImage}
                imageSource={imageSource}
                onAdd={handleAddProduct}



            />

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
        height: 75,
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
    },
    Category: {
        width: width,
        height: 80,
        flexDirection: 'row'
    },

    content: {
        // flex: 1,
        width: width,
        height: height,
        marginLeft: 12,


    },

    productsWrapper: {
        width: 160,
        height: 200,
        marginLeft: 20,
        borderRadius: 20,
        marginTop: 20,
        // elevation: 20,
    },

    wrapperFooter: {
        width: '100%',
        height: '40%',
        backgroundColor: '#eaeaea',
        position: 'absolute',
        bottom: 0,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20



    },
    productsWrapper2: {
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 8

    },
    Icon: {
        paddingRight: 20,
        paddingTop: 20
    },
    purchasePrice: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black', paddingLeft: 20
    },
    productName: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingTop: 20,
        paddingLeft: 20
    },
    productImage: {
        width: '100%',
        height: '70%',
        borderRadius: 20,
        position: "absolute"
    }


})

