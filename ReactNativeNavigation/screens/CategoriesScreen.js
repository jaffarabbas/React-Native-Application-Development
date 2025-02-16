import {FlatList} from 'react-native';
import { CATEGORIES } from '../data/dummy_data';
import CategoryGridTitle from '../components/CategoryGridTitle';


function CategoriesScreen({navigation}){
    function renderCategoryItem(itemData){
        function onPressHandler(){
            console.log('CategoryGridTitle Pressed');
            navigation.navigate('MealsDetial',{
                categoryID:itemData.item.id
            });
        }
        return <CategoryGridTitle title={itemData.item.title} color={itemData.item.color} onPress={onPressHandler}></CategoryGridTitle>
    }
    return (
        <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} numColumns={2}></FlatList>
    )
}

export default CategoriesScreen;