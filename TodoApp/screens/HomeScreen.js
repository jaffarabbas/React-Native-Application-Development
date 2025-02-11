import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { TextInput, Button, Card, useTheme, IconButton } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import TaskItem from '../components/TaskItem';
import ModalComponent from '../components/ModalComponent';
import { lightTheme, darkTheme } from '../utils/theme';
import { Provider as PaperProvider } from 'react-native-paper';

export default function HomeScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;
  const { colors } = theme;

  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddOrEditTask = () => {
    if (task.trim() === '') return;
    
    if (editIndex !== null) {
      let updatedTasks = [...taskList];
      updatedTasks[editIndex] = task;
      setTaskList(updatedTasks);
      Toast.show({ type: 'info', text1: 'Task Updated!' });
    } else {
      setTaskList([...taskList, task]);
      Toast.show({ type: 'success', text1: 'Task Added!' });
    }

    setTask('');
    setEditIndex(null);
  };

  return (
    <PaperProvider theme={theme}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.header}>
          <Button mode="text" onPress={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </Button>
        </View>

        <Card style={styles.card}>
          <TextInput 
            label="Enter Task" 
            value={task} 
            onChangeText={setTask} 
            mode="outlined" 
            style={styles.input} 
          />
          <Button mode="contained" onPress={handleAddOrEditTask} style={styles.addButton}>
            {editIndex !== null ? 'Update Task' : 'Add Task'}
          </Button>
        </Card>

        <FlatList 
          data={taskList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TaskItem 
              task={item} 
              onEdit={() => setEditIndex(index)}
              onDelete={() => setTaskList(taskList.filter((_, i) => i !== index))}
              onOpenModal={() => setModalVisible(true)}
            />
          )}
        />

        <ModalComponent visible={modalVisible} onClose={() => setModalVisible(false)} />
        <Toast />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: { padding: 15, marginBottom: 10 },
  input: { marginBottom: 10 },
  addButton: { backgroundColor: '#6200ee' },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
});
