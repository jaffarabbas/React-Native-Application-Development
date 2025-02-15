import {FlatList} from 'react-native';
import { CATEGORIES } from '../data/dummy_data';
import CategoryGridTitle from '../components/CategoryGridTitle';

function renderCategoryItem(itemData){
    return <CategoryGridTitle title={itemData.item.title} color={itemData.item.color}></CategoryGridTitle>
}

function CategoriesScreen(){
    return (
        <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem}></FlatList>
    )
}

export default CategoriesScreen;