import { TextInput, TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const TodoInput = ({ test, setTest, testFunc, isEdit }) => {
  return (
    <View>
      <TextInput 
        value={test} 
        onChangeText={setTest} 
        style={styles.textInput} 
        placeholder="Enter task..."
        placeholderTextColor="#888"
      />
      <TouchableOpacity style={styles.addButton} onPress={testFunc}>
        <Text style={styles.addButtonText}>{isEdit ? 'Update Task' : 'Add Task'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: 300,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TodoInput;
