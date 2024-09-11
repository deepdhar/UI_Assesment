import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Recommended = props => {
    return (
        <View style={styles.cardView}>
            <View style={{width: 80, height: 80, backgroundColor: props.dpColor, borderRadius: 12, marginHorizontal: 8}}/>

            <View style={{flex: 1, marginHorizontal: 10, flexDirection: 'column'}}>
                <Text style={{color: '#000', fontWeight: '500', marginBottom: 10}}>{props.cardText}</Text>

                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{color: '#000', fontSize: 12}}>{props.updatedText}</Text>
                    <View style={{alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15, backgroundColor: 'purple', borderRadius: 12}}>
                        <Text style={{color: '#fff', fontSize: 10}}>{props.buttonText}</Text>
                    </View>
                </View>
            
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: '100%',
        height: 120,
        flexDirection: 'row',
        backgroundColor: '#e3cffc',
        marginTop: 18,
        borderRadius: 12,
        alignItems: 'center',
        paddingHorizontal: 10
    },
})

export default Recommended