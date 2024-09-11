import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'

const CategoryButtons = props => {

    const navigation = useNavigation();

    return (
        <LinearGradient
            colors={[props.colorOne, props.colorTwo, props.colorThree]}
            style={[styles.categories, {borderColor: props.colorBorder,}]}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
        >
            <TouchableOpacity onPress={()=>{navigation.navigate('Pet')}}>
                <Text style={styles.smallText}>{props.buttonName}</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    categories: {
        marginRight: 5,
        paddingHorizontal: 15,
        paddingVertical: 8, 
        borderRadius: 60,
        borderWidth: 0.5,
    },
    smallText: {
        color: '#000',
    },
})

export default CategoryButtons