import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


const FavoritesScreen = (props) => {
    return(
        <View style={styles.screen}>
      <Text>Favorites Screen !!</Text>
        </View>
    )
};

export default FavoritesScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})