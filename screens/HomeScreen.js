import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import CategoryButtons from '../components/CategoryButtons'
import { ScrollView } from 'react-native-gesture-handler'
import Recommended from '../components/Recommended'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

    const navigation = useNavigation();

    const [searchText, setSearchText] = useState("");

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.mainContainer}>
                <LinearGradient
                    colors={['#a969fa', '#ccabf7', '#e3cffc']}
                    style={[styles.violetView, {}]}
                ></LinearGradient>
                
                <View style={{paddingHorizontal: 18, width: '100%', position: 'absolute', top: 20, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                    <TouchableOpacity>
                        <MaterialIcons name='menu' size={30} color='#fff'/>
                    </TouchableOpacity>

                    <Ionicons style={{}} name='infinite' size={30} color='#fff'/>
                </View>

                <View style={styles.firstView}>
                    <Image
                        style={{position: 'absolute', width: 90, height: 80, left: 180, borderTopRightRadius: 18}}
                        source={require('../images/img1.png')}
                    />
                    <Text style={styles.smallText}>Welcome,</Text>
                    <Text style={styles.largeText}>Find Your</Text>
                    <Text style={styles.largeText}>Dream Selector!</Text>

                    <View style={styles.searchBar}>
                        <Ionicons name='search' size={20} color='orange'/>
                        <TextInput
                            placeholder="What are you looking for?"
                            placeholderTextColor={'gray'}
                            value={searchText}
                            onChangeText={text => setSearchText(text)}
                            style={{fontSize: 12, marginLeft: 3, color: '#000'}}
                        />
                    </View>

                </View>

                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={styles.secondView}>

                        {/* Explore Categories */}
                        <View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Text style={{fontSize: 15, color: '#000', fontWeight: '600'}}>Explore Categories</Text>
                                <TouchableOpacity>
                                    <Entypo name='dots-three-horizontal' size={20} color='#000'/>
                                </TouchableOpacity>
                            </View>

                            <View style={{flexDirection: 'row', marginTop: 10}}>
                                <CategoryButtons colorOne='#fff' colorTwo='#fff' colorThree='#93b7fa' colorBorder='#93b7fa' buttonName='Construction' />
                                <CategoryButtons colorOne='#fff' colorTwo='#fff' colorThree='#facf93' colorBorder='#facf93' buttonName='Entertainment' />
                            </View>

                            <View style={{flexDirection: 'row', marginTop: 10}}>
                                <CategoryButtons colorOne='#fff' colorTwo='#ffdbfc' colorThree='#fa84ee' colorBorder='#fa84ee' buttonName='Pet Care' />
                                <CategoryButtons colorOne='#fff' colorTwo='#fff' colorThree='#7dfaf2' colorBorder='#7dfaf2' buttonName='Home Care' />
                                <CategoryButtons colorOne='#fff' colorTwo='#fff' colorThree='#f5983b' colorBorder='#f5983b' buttonName='Events' />
                            </View>

                            <View style={{flexDirection: 'row', marginTop: 10}}>
                                <CategoryButtons colorOne='#fff' colorTwo='#d6cafc' colorThree='#8865fc' colorBorder='#744aff' buttonName='Healthcare' />
                            </View>

                        </View>

                        {/* Popular Sectors */}
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 25}}>
                                <Text style={{fontSize: 15, color: '#000', fontWeight: '600'}}>Popular Sectors</Text>
                                <TouchableOpacity>
                                    <Entypo name='dots-three-horizontal' size={20} color='#000'/>
                                </TouchableOpacity>
                            </View>
                        <View style={{flexDirection: 'row', marginTop: 5, justifyContent: 'space-between', width: '100%'}}>
                            <TouchableOpacity onPress={()=>{navigation.navigate('Pet')}}>
                                <Image
                                    resizeMode='contain'
                                    style={styles.image}
                                    source={require('../images/home_services.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{navigation.navigate('Pet')}}>
                                <Image
                                    resizeMode='contain'
                                    style={styles.image}
                                    source={require('../images/healthcare.png')}
                                />
                            </TouchableOpacity>
                        </View>

                        {/* Recommended for you */}
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 18}}>
                            <Text style={{fontSize: 15, color: '#000', fontWeight: '600'}}>Recommended For You</Text>
                            <TouchableOpacity>
                                <Entypo name='dots-three-horizontal' size={20} color='#000'/>
                            </TouchableOpacity>
                        </View>

                        {/* Card view */}
                        <Recommended
                            dpColor='#f79979'
                            updatedText='Updated | 6:30 AM' 
                            buttonText='Explore'
                            cardText='Now share the Construction Sectors with your anyone and can save it as bookmark'
                        />

                        <Recommended
                            dpColor='#f79979'
                            updatedText='Updated | 6:30 AM' 
                            buttonText='Explore'
                            cardText='Now share the Construction Sectors with your anyone and can save it as bookmark'
                        />

                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    categories: {
        marginRight: 5,
        paddingHorizontal: 15,
        paddingVertical: 8, 
        borderRadius: 60,
        borderWidth: 0.5,
    },
    firstView: {
        width: 270,
        height: 200,
        backgroundColor: '#e3ffb0',
        position: 'absolute',
        top: 80,
        padding: 25,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 60,
    },
    image: {
        width: 150,
        height: 150
    },
    largeText: {
        color: '#000',
        fontSize: 22,
        fontWeight: '600'
    },
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    searchBar: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        marginTop: 10,
        borderRadius: 12,
        alignItems: 'center'
    },
    secondView: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 80,
        borderTopLeftRadius: 28,
        paddingVertical: 20,
        paddingHorizontal: 18,
    },
    smallText: {
        color: '#000',
        marginBottom: 2
    },
    violetView: {
        width: '100%',
        height: 200,
        // backgroundColor: '#cf9df5',
        borderBottomRightRadius: 60
    }
})