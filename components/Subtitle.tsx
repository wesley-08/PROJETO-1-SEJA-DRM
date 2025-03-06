import { View, Text, StyleSheet } from 'react-native';

function Subtitle () {
  return (
    <View>
    <View style={styles.titlebox}>
      <Text style={styles.title}>
       Escolha um curso e faça sua história!
      </Text>
      </View>
      <Text style={styles.title2}>
      Aqui voçê pode escolher  cursar Administração, Desenvolvimnto de Sistema ou Redes de Computadores. 
      Todos eles possuem em alta demanda no mercado atual
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    titlebox: {
    backgroundColor: 'orange',
    justifyContent:'center', 
    height: 50
  },
  title:{
    fontSize: 17,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  title2:{
    marginHorizontal: 10,
    marginBottom: 24,
  }
})
export default Subtitle 