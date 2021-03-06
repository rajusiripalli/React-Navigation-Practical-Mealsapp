import React from 'react';
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';


const CategoriesScreen = props =>  {

    const renderGridItem = (itemData) => {
        return <CategoryGridTile title={itemData.item.title} 
                                 color={itemData.item.color}
                                 onSelect={()=> {
                                     //Passing Params Upon Navigation
                                    props.navigation.navigate("CategoryMealsScreen", {categoryId: itemData.item.id, title: itemData.item.title})
                                }}
                 />
      }


    
    return (
           <FlatList 
            keyExtractor={(item, index) => item.id}
                data={CATEGORIES}
                renderItem={renderGridItem}
                numColumns={2}
            
           
           />
    )
};




const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },

});

export default CategoriesScreen;