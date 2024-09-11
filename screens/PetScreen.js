import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import Entypo from 'react-native-vector-icons/Entypo'
import Services from '../components/Services'

const PetScreen = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <LinearGradient
            colors={['#fcbd9f', '#fa93e0']}
            style={{height: 250, padding: 18}}
            >
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10}}>
                    <Ionicons name='menu' size={25} color='#000'/>
                    <Ionicons name='infinite' size={25} color='#fff'/>
                    <TouchableOpacity style={{backgroundColor: '#f2f0f2', opacity: 0.6, padding: 5, borderRadius: 5}}>
                        <Octicons name='bell' size={20} color='#000'/>
                    </TouchableOpacity>
                </View>

                <Text style={{fontSize: 22, color: '#000', fontWeight: '600'}}>Hello,</Text>
                <Text style={{fontSize: 15, color: '#000', fontWeight: '500'}}>Fancy for a wash today!</Text>
            </LinearGradient>

            <Image
                resizeMode='center'
                style={{width: 50, height: 50, position: 'absolute', top: 140, left: 20,}}
                source={require('../images/paw1.png')}
            />

            <Image
                style={{width: 30, height: 30, position: 'absolute', top: 80, right: 0,}}
                source={require('../images/paw2.png')}
            />
            <View style={styles.mainView}>
                
                {/* Search bar */}
                <View style={styles.searchBar}>
                    <Ionicons name='search' size={20} color='#f772c6'/>
                    <TextInput
                        placeholder='What are you looking for?'
                        placeholderTextColor={'#f772c6'}
                        style={{fontSize: 14, right: 25, color:'#000'}}
                    />
                    <Ionicons name='settings-outline' size={20} color='#000' />
                </View>

                <ScrollView style={{paddingBottom: 20}}>

                    <Image
                        resizeMode='contain'
                        style={{ width: '100%', height: 120, marginTop: 25, marginHorizontal: 20, alignSelf: 'center'}}
                        source={require('../images/petbanner.png')}
                    />

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30}}>
                        <Text style={{fontSize: 15, color: '#000', fontWeight: '600'}}>Popular Services</Text>
                        <TouchableOpacity>
                            <Entypo name='dots-three-horizontal' size={20} color='#000'/>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 12, justifyContent: 'space-evenly'}}>
                        <View style={{flex: 0.5, flexDirection: 'column', height: '100%', marginRight: 10}}>
                            <Image
                                resizeMode='contain'
                                style={{width: '100%', height: 190}}
                                source={require('../images/pet_grooming.png')}
                            />
                            <Image
                                resizeMode='contain'
                                style={{width: '100%', height: 150}}
                                source={require('../images/pet_dating.png')}
                            />
                            <Image
                                resizeMode='contain'
                                style={{width: '100%', height: 200}}
                                source={require('../images/pet_adoption.png')}
                            />
                        </View>
                        <View style={{flex:0.5, flexDirection: 'column', height: '100%'}}>
                            <Image
                                resizeMode='contain'
                                style={{width: '100%', height: 140}}
                                source={require('../images/pet_walking.png')}
                            />
                            <Image
                                resizeMode='contain'
                                style={{width: '100%', height: 200}}
                                source={require('../images/pet_training.png')}
                            />
                        </View>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30}}>
                        <Text style={{fontSize: 15, color: '#000', fontWeight: '600'}}>Service Providers</Text>
                        <TouchableOpacity>
                            <Entypo name='dots-three-horizontal' size={20} color='#000'/>
                        </TouchableOpacity>
                    </View>

                    <Services/>
                    <Services/>
                    <Services/>
                    
                </ScrollView>
            </View>

            <Image
                resizeMode='center'
                style={{width: 100, height: 100, position: 'absolute', top: 135, right: 80,}}
                source={require('../images/pet1.png')}
            />

            <Image
                resizeMode='center'
                style={{width: 80, height: 80, position: 'absolute', top: 150, right: 18,}}
                source={require('../images/pet3.png')}
            />

            <Image
                resizeMode='center'
                style={{width: 90, height: 90, position: 'absolute', top: 145, left: 112,}}
                source={require('../images/pet2.png')}
            />

            
        </SafeAreaView>
    )
}

export default PetScreen

const styles = StyleSheet.create({
    searchBar: {
        width: '95%',
        height: 50,
        backgroundColor: '#fcd9ef',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18
    },
    mainView: {
        backgroundColor: '#fff',
        position: 'absolute',
        width: '100%',
        height: '72%',
        top: 220,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 18,
        paddingTop: 40,
    }
})