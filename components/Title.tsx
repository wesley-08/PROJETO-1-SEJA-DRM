import { View, Text, StyleSheet } from 'react-native';

function Title () {
  return (
    <View>
      <View style={styles.titlebox}>
      <Text style={styles.title}>
       Bem vindo á EEEP Deputado roberto mesquita
      </Text>
      </View>
      <Text>
      venha fazeer parte a eecola que prepara 
        profisionais  para 
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titlebox: {
    backgroundColor: 'green',
    justifyContent:'center', 
    height: 80
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  title2:{
    marginHorizontal: 10,
    marginBottom: 24
  }

})
export default Title 