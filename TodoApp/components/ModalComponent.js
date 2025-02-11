import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { Button } from 'react-native-paper';

export default function ModalComponent({ visible, onClose }) {
  return (
    <Modal isVisible={visible} onBackdropPress={onClose}>
      <View style={styles.modalContent}>
        <Text style={styles.modalText}>This is a beautiful modal!</Text>
        <Button mode="contained" onPress={onClose}>Close</Button>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: { backgroundColor: 'white', padding: 20, borderRadius: 10, alignItems: 'center' },
  modalText: { fontSize: 18, marginBottom: 15 },
});
