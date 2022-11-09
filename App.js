import {
  Button,
  FlatList,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

// import CheckBox from "@react-native-community/checkbox";
import Header from "./components/Header/Header";
import ModalAux from "./components/Modals/Modal";
import Styles from "./components/styles";
import { useState } from "react";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const onHandleChangeText = t => {
    setTextItem(t);
  };
  const add = () => {
    setList(currentItems => [
      ...currentItems,
      { id: Math.random().toString(), value: textItem }
    ]);
    setTextItem("");
  };
  const selectedItem = id => {
    setItemSelected(list.filter(item => item.id === id)[0]);
    setModalVisible(true);
  };

  const renderItem = ({ item }) =>
    <TouchableOpacity onPress={() => selectedItem(item.id)} style={styles.text}>
      <Text>
        {item.value}
      </Text>
    </TouchableOpacity>;

  const deleteItem = () => {
    setList(currentItems =>
      currentItems.filter(item => item.id !== itemSelected.id)
    );
    setItemSelected({});
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.itemContainer}>
        <TextInput
          style={styles.inputTex}
          placeholder="Ingrese nombre"
          value={textItem}
          onChangeText={onHandleChangeText}
        />
        <Pressable onPress={() => add()} style={styles.button}>
            <Text>Agregar</Text>
          </Pressable>
      </View>
      <View style={styles.inputContainer}>
        {console.log(list.length)}
        {list.length==0 && <Text style={styles.mensaje}>Lista de compras esta vacia</Text>}
        <FlatList
              data={list}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
        {/* <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        /> */}
      </View>
      <ModalAux
        isVisible={modalVisible}
        closeModal={setModalVisible}
        actionDeleteItem={deleteItem}
        item={itemSelected}
      />
    </View>
  );
}

const styles = Styles;
