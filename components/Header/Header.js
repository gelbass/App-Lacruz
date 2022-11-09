import { Image, Text, View } from "react-native";

import StylesHeader from "./StylesHeader";

const Header = () =>{
  return(
    <View style={style.header}>
      <Image source={require("../../img/Cesta.jpg")}/>
      <Text style={style.titulo}>Lista de compras</Text>

    </View>
  );
};
const style = StylesHeader;
export default Header;