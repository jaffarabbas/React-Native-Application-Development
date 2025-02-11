import { FlatList, StyleSheet, View } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ testList, editFunc, deleteFunc }) => {
  return (
    <FlatList 
      data={testList}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <TodoItem item={item} index={index} editFunc={editFunc} deleteFunc={deleteFunc} />
      )}
    />
  );
};

export default TodoList;
