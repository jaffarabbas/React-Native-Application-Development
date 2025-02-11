import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default function App() {
  const [test, setTest] = useState('');
  const [testList, setTestList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const testFunc = () => {
    if (isEdit) {
      setTestList(testList.map((item, index) => (index === editIndex ? test : item)));
      setIsEdit(false);
      setEditIndex(null);
      setTest('');
      return;
    }

    setTestList([...testList, test]);
    setTest('');
  };

  const editFunc = (index) => {
    setIsEdit(true);
    setEditIndex(index);
    setTest(testList[index]);
  };

  const deleteFunc = (index) => {
    setTestList(testList.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do List</Text>
      <TodoInput 
        test={test} 
        setTest={setTest} 
        testFunc={testFunc} 
        isEdit={isEdit} 
      />
      <TodoList testList={testList} editFunc={editFunc} deleteFunc={deleteFunc} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 40,
    color: '#333',
  },
});
