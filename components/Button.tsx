import { View, Text, StyleSheet } from 'react-native';

function Button () {
  return (
    <View style={styles.botao}>
    <Text style={styles.text}> 
      Inicie sua jornada na DRM!
    </Text>
  
    </View>
  )
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#70bdcc',
    justifyContent: 'center',
    width: 300,
    height: 60,
    alignSelf: 'center',
    marginTop: 10,
  },
  text: {
  color: 'blue',
  fontWeight: 'bold',
  textAlign: 'center',
  }
})
export default Button 