import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


const FiltersScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Filters Screen !!</Text>
        </View>
    )
};


export default FiltersScreen;


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})