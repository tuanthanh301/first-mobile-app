import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import StyledCheckBox from '../../components/base/StyledCheckBox';
const DetailFilm = () => {
  const { navigate, goBack } = useNavigation();

  const onGoBack = () => {
    goBack();
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.logo}>
        <TouchableOpacity onPress={onGoBack}>
          <Image
            style={styles.Logoquaylai}
            source={require("../../assests/icon/Quaylai.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.imgFilm}>

        <View style={styles.anh}>
          <Image
            style={styles.anhphim}
            source={require("../../assests/icon/Tom_and_Jerry_The_Movie_Poster.png")}
          />
        </View>
        <View style={styles.danhgia}>
          <View style={styles.danhgiachung}>
            <Image
              style={styles.Logoicon}
              source={require("../../assests/icon/cam.png")}
            />
            <Text style={{ marginTop: 5, color: 'white' }}>
              Comedy
            </Text>
          </View>
          <View style={styles.danhgiachung}>
            <Image
              style={styles.Logoicon}
              source={require("../../assests/icon/dongho.png")}
            />
            <Text style={{ marginTop: 5, color: 'white' }}>
              1h 20m
            </Text>
          </View>
          <View style={styles.danhgiachung}>
            <Image
              style={styles.Logoicon}
              source={require("../../assests/icon/ngoisao.png")}
            />
            <Text style={{ marginTop: 5, color: 'white' }}>
              4.7/5
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.in4FilmName}>
        <View style={{ alignItems: 'center', marginBottom: 10, borderBottomWidth: 1, borderBottomColor: 'gray', width: '80%' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>TOM AND JERRY</Text>
        </View>
      </View>


      <View style={styles.in4Film}>
        <View style={styles.desFilm}>
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
          <StyledCheckBox />
        </View>
      </View>

      <View style={styles.backgroudButton}>
        <TouchableOpacity
          style={styles.button}>
          <Text style={styles.buttonText}>Get Reservation</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default DetailFilm

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3034df',
  },
  logo: {
    width: '100%',
    height: 50,
  },
  Logoquaylai: {
    position: 'absolute',
    width: 50,
    height: 20,
    top: 20,
    left: 25,
  },
  imgFilm: {
    width: '100%',
    height: 350,
    flexDirection: 'row',
  },

  anh: {
    width: '64%',
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',

  },

  anhphim: {
    width: '75%',
    height: '90%',
    borderRadius: 20,
    marginLeft: 38,
  },

  danhgia: {
    width: '36%',
    height: 350,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  danhgiachung: {
    width: 90,
    height: 90,
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

  },
  in4FilmName: {
    width: '100%',
    alignItems: 'center',
  },
  in4Film: {
    width: '100%',
    height: 270,
  },
  desFilm: {
    flexDirection: 'row',
    flexWrap: 'wrap',

    justifyContent: 'center',
  },
  Logoicon: {
    width: 30,
    height: 30,
  },
  backgroudButton: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: 'rgb(237, 139, 26)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  }
})