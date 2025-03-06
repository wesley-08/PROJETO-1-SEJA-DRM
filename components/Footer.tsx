import { View, Text, StyleSheet } from 'react-native';

function Footer() {
  return (
    <View>
      <Text style={styles.text}>
       2024 EEEp Deputado Roberto Mesquita
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  text:{
    textAlign: 'center'
  }
})
export default Footer ;