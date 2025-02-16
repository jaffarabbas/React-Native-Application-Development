import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MEALS } from '../data/dummy_data';
import MealItem from '../components/MealItem';

function MealsDetail({ route }) {
    const catID = route.params.categoryID;

    const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catID) >= 0);

    function renderMealItem(itemData) {
        const item = itemData.item;
        const mealProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
        }
        return <MealItem {...mealProps} />
    }
    return (
        <View style={styles.gridItem}>
            <FlatList data={displayMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem}></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        padding: 16,
    },
})

export default MealsDetail