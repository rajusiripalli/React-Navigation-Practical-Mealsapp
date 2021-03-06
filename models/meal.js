
class Meal {
    constructor(id, 
                categoryIds, 
                title, 
                afforability, 
                complexity, 
                imageUrl, 
                duration, 
                ingredients, 
                steps, 
                isGlutenFree, 
                isVegan, 
                isVegetarian, 
                isLactoseFree 
         ){

            this.id = id;
            this.categoryIds = categoryIds;
            this.title = title;
            this.imageUrl = imageUrl;
            this.ingredients = ingredients;
            this.steps = steps;
            this.duration = duration;
            this.complexity = complexity;
            this.afforability = afforability;
            this.isGlutenFree = isGlutenFree;
            this.isVegan = isVegan;
            this.isVegetarian = isVegetarian;
            this.isLactoseFree = isLactoseFree;
            
                
                

    }
}

export default Meal;