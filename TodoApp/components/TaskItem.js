import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Swipeable } from 'react-native-gesture-handler';
import { useTheme } from 'react-native-paper';

export default function TaskItem({ task, onEdit, onDelete, onOpenModal }) {
  const { colors } = useTheme(); // Access theme colors

  const renderRightActions = () => (
    <View style={styles.swipeActions}>
      <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
        <Icon name="delete" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={[styles.taskContainer, { backgroundColor: colors.surface }]}>
        <Text style={[styles.taskText, { color: colors.text }]}>{task}</Text>
        <View style={styles.actions}>
          <TouchableOpacity onPress={onEdit}>
            <Icon name="pencil" size={24} color={colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onOpenModal}>
            <Icon name="information" size={24} color={colors.accent} />
          </TouchableOpacity>
        </View>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2, // Adds a subtle shadow for better UI
  },
  taskText: {
    fontSize: 16,
    fontWeight: '500',
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
  },
  swipeActions: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
});
