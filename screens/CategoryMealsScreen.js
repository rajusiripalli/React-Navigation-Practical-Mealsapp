
import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {


    const renderMealItem = itemData => {
        return <MealItem  
                        title={itemData.item.title}
                        duration={itemData.item.duration}
                        complexity={itemData.item.complexity}
                        afforability={itemData.item.afforability}
                        onSelectMeal={()=> {}} 
                />
        
    }
    //Reading Params Upon Navigation
    const catId = props.route.params.categoryId;
  
    
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    const displayedMeals = MEALS.filter( meal => meal.categoryIds.indexOf(catId) >= 0)
    return(
        <View style={styles.screen}>
                 <FlatList data={displayedMeals} 
                        keyExtractor={(item, index)=> item.id} 
                        renderItem={renderMealItem} 
                        style={{width: '100%'}}
                />
        </View>
    )
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})