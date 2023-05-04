import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

export default function App() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [isfocused, setIsFocused] = useState('false');

  const addItem = () => {
    if (itemName.trim() !== '') {
      setItems([...items, itemName]);
      setItemName('');
    }
  };

  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const editItem = (index, newItem) => {
    const newItems = [...items];
    newItems[index] = newItem;
    setItems(newItems);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TO DO LIST</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Task"
        value={itemName}
        onChangeText={(text) => setItemName(text)}
      />
      <TouchableOpacity style={styles.button} onPress={addItem}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
      {items.map((item, index) => (
        <View key={index} style={styles.item}>
          <TextInput
            // style={styles.itemInput}
            value={item}
            onChangeText={(text) => editItem(index, text)}
            style={[styles.itemInput, isfocused && styles.focusedInput]}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <TouchableOpacity
            style={styles.itemButton}
            onPress={() => deleteItem(index)}>
            <Text style={styles.itemButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7F8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#9CA1A6',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    width: '50%',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  // itemInput: {
  //   borderWidth: 1,
  //   borderColor: '#ccc',
  //   borderRadius: 4,
  //   padding: 10,
  //   flex: 1,
  //   marginRight: 10,
  // },
  itemInput: {
    height: 40,
    width: 200,
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 10,
    flex: 1,
    borderColor: 'gray',
    padding: 10,
  },
  focusedInput: {
    borderColor: 'blue',
  },
  itemButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  itemButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
