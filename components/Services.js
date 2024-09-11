import { View, Text, Image } from 'react-native'
import React from 'react'

const Services = () => {
    return (
        <View style={{flexDirection: 'row', width: '100%', height: 120, marginTop: 15, backgroundColor: '#e3cffc', borderRadius: 12, justifyContent: 'space-between', alignItems: 'center', padding: 18}}>
            <Image
                style={{width: 50, height: 50}}
                source={require('../images/dp.png')}
            />
            <View style={{justifyContent: 'center', right: 20,}}>
                <Text style={{color: '#000', fontSize: 16, fontWeight: '500',}}>Rohit Singhania</Text>
                <Text style={{color: '#000', fontSize: 12, fontWeight: '400',}}>Lorem ipsum dior Sit Amet Consector.</Text>
                <View style={{marginTop: 10, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15, backgroundColor: 'purple', borderRadius: 5, width: 100, paddingVertical: 5}}>
                    <Text style={{color: '#fff', fontSize: 10}}>Know More</Text>
                </View>
            </View>
        </View>
    )
}

export default Services