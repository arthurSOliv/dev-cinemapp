import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
// import { Feather as Icon, FontAwesome } from '@expo/vector-icons';

export default function MenuItem(props) {

  const navigation = useNavigation();

  function handleNavigateHome() {
    navigation.navigate('Home');
  }
  function handleNavigateBuscar() {
    navigation.navigate('Buscar');
  }
  function handleNavigateFavoritos() {
    navigation.navigate('Favoritos');
  }

  return (
    <View>
      <View style={styles.footer}>
          <Text style={styles.linkText} onPress={handleNavigateHome}>Home</Text>
          <Text style={styles.linkText} onPress={handleNavigateBuscar}>Buscar</Text>
          <Text style={styles.linkText} onPress={handleNavigateFavoritos}>Favoritos</Text>
      </View >
    </View>
  );
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#ffffff",
        marginTop: 20,
        height: 60,
        paddingLeft: 20,
        paddingRight: 20,
    },

    linkText: {
        textAlign: 'center',
        width: '30%',
        fontSize: 20,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#5CB7F4'
    }
});