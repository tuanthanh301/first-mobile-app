import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { film } from '../../assests/data/Film';
import { useNavigation } from '@react-navigation/native';


const FilmItems = ({ item }: any) => {
  const { navigate, goBack } = useNavigation();
  return (

    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigate('DetailFilm', {
          uri: item.image,
          name: item.title,
          stat: item.released,
          desc: item.desc,
          time: item.time,
          imgDetailFilm: item.imgDetailFilm,
        })
      }}
    >

      <Text style={{ marginTop: 10, fontSize: 18, fontWeight: '800', marginLeft: 15, color: 'white' }}>
        {item.title}
      </Text>
      <View style={styles.foter}>
        <Image
          style={{ width: '80%', height: '100%'}}
          source={{ uri: item.image }}
        />
      </View>



    </TouchableOpacity>
  )
}

export default FilmItems

const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
    width: '75%',
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 30,
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  foter: {
    width: 200,
    height: 250,
    borderWidth: 1,
    borderRadius: 30,
    marginBottom: 10,
    marginTop: 10,
    alignItems: "center",
    backgroundColor: 'white',
  }
})