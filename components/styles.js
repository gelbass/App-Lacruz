import { StyleSheet } from "react-native";

const Styles =StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 30
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  inputTex: {
    width: 200,
    margin: 5,
    padding: 10,
    borderBottomColor: "#79B6FC",
    borderBottomWidth: 1,
    color: "#000"
  },
  text: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    color: "#000"
  },
  inputContainer: {
    margin: 50,
    padding: 5,
    with: 200,
    borderColor: "#79B6FC",  
    borderTopWidth: 1,
    
  },
  button: {
    margin:20,
    padding:10,
    borderRadius: 10,
    color: '#ffff',
    backgroundColor:'#9CCFF6'
  },
  mensaje:{
    margin: 20,
    fontWeight: 'bold',
    fontSize: 15,
    textAlign:'center'
  }
});

export default Styles;