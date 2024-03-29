import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, StatusBar, ScrollView, ImageBackground, TextInput, TouchableWithoutFeedback, FlatList } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import Carousel from 'react-native-anchor-carousel';
import Search from '../../components/common/Search';
import IconCategory from '../../components/common/IconCategory';
import Images from '../../assests';
import { useNavigation } from '@react-navigation/native';
import { film } from '../../assests/data/Film';


const HomeFilm = () => {

  const { navigate } = useNavigation();

  const [background, setBackground] = useState({
    uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9',
    name: 'Avengers: End Game',
    time: '2019 ‧ Action/Sci-fi ‧ 3h 2m',
    desc: 'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.'
  })

  const [gallery, setgallery] = useState(film);

  const [list, setList] = useState([
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKLiEyyz1Q9RC8EBYl3ijr3nuGeyO2ETmwy6Kdq0AQtD0elWD', key: '1' },
    { image: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg', key: '2' },
    { image: 'https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/spies-in-disguise-et00072276-10-03-2018-03-41-39.jpg', key: '3', },
    { image: 'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_.jpg', key: '4' },
  ]);

  const carouselRef = useRef(null);

  const { width, height } = Dimensions.get('window')

  // const routeRecents = () => {
  //   props.navigation.navigate('Recents')
  // }
  const renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            carouselRef.current.scrollToIndex(index);
            setBackground({
              uri: item.image,
              name: item.title,
              time: item.time,
              desc: item.desc,

            })
          }
          }
        >
          <Image source={{ uri: item.image }} style={styles.carouselImage} />
          <Text style={styles.carouselText}>{item.title}</Text>
          {/* <MaterialIcons name='library-add' size={30} color='white' style={styles.carouselIcon} /> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.playIconOrderMovie}
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
        // onPress={goToDetailFilm}
        >
          <Text style={{ color: 'white', fontSize: 13, fontWeight: '800' }}>Order Movie</Text>
        </TouchableOpacity>
      </View>

    )
  }

  return (
    <ScrollView style={{ backgroundColor: '#000' }} blurRadius={100}>

      <StatusBar backgroundColor='#000' barStyle='light-content' />

      <View style={styles.carouselContentContainer}>
        <View style={{ ...StyleSheet.absoluteFill, backgroundColor: '#000' }}>
          <ImageBackground source={{ uri: background.uri }} style={styles.ImageBg} blurRadius={10}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold', paddingLeft: 5, marginTop: 20, marginBottom: 25 }}>Welcome Back</Text>
            </View>
            <View style={styles.category}>
              <View style={styles.categoryseeall}>
                <Text style={{ fontSize: 22, fontWeight: 'bold', paddingLeft: 8, color: 'white' }}>
                  Category
                </Text>
                <TouchableOpacity>
                  <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>
                    See all
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.categoryclick}>
                <IconCategory text='Phim Ma' categoryfilmIMG={Images.icons.iconCategory.phimma} />
              </View>
            </View>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginLeft: 10, marginVertical: 10 }}>Top Popular Movie</Text>
            <View style={styles.carouselContainerView}>
              <Carousel style={styles.carousel}
                data={gallery}
                renderItem={renderItem}
                itemWidth={200}
                containerWidth={width - 20}
                separatorWidth={0}
                ref={carouselRef}
                inActiveOpacity={0.4}
              //pagingEnable={false}
              //minScrollDistance={20}
              />
            </View>


            <View style={styles.movieInfoContainer}>
              <View style={{ justifyContent: 'center' }}>
                <Text style={styles.movieName}>{background.name}</Text>
                <Text style={styles.movieStat}>{background.time}</Text>
              </View>
              <TouchableOpacity style={styles.playIconContainer}>
                <Image
                  style={styles.tinyLogo}
                  source={require("../../assests/icon/playicon.png")}
                />
              </TouchableOpacity>

            </View>
            <View style={{ paddingHorizontal: 14, marginTop: 20 }}>
              <Text style={{ color: 'white', opacity: 0.8, lineHeight: 20 }}>
                {background.desc}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>
      <View style={{ marginHorizontal: 14, marginTop: 70 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, marginTop: 36 }}>
          <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', }}>My List</Text>
          <Text style={{ color: '#02ad94', fontSize: 14, fontWeight: 'normal' }}>View All</Text>
        </View>

        <FlatList
          style={{ marginBottom: 30 }}
          horizontal={true}
          data={list}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={{ marginRight: 20 }}>
                <Image source={{ uri: item.image }} style={{ height: 300, width: 200 }} />
                <View style={{ position: "absolute", height: 5, width: '100%', backgroundColor: '#02ad94', opacity: 0.8 }}></View>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({


  // CAROUSEL STYLES

  carouselImage: {
    width: 200,
    height: 320,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)'
  },
  carouselText: {
    paddingLeft: 14,
    color: 'white',
    position: 'absolute',
    bottom: 10,
    left: 2,
    fontWeight: 'bold'
  },
  carouselIcon: {
    position: 'absolute',
    top: 15,
    right: 15
  },
  carouselContentContainer: {
    flex: 1,
    backgroundColor: '#000',
    height: 720,
    paddingHorizontal: 14
  },
  // SearchboxContainer: {
  //     flexDirection: 'row',
  //     marginVertical: 20, 
  //     width: '95%',
  //     alignSelf: 'center', 
  //     backgroundColor: '#fff', 
  //     elevation: 10,
  //     borderRadius: 4,
  //   },
  //   Searchbox: {
  //     padding: 12,
  //     paddingLeft: 20,
  //     fontSize: 16,
  //   },
  SearchboxIcon: {
    position: 'absolute',
    right: 20,
    top: 14
  },
  ImageBg: {
    flex: 1,
    height: null,
    width: null,
    opacity: 1,
    justifyContent: 'flex-start',
  },
  carouselContainerView: {
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    flex: 1,
    overflow: 'visible',
  },
  movieInfoContainer: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 14
  },
  movieName: {
    paddingLeft: 14,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 6,
  },
  movieStat: {
    paddingLeft: 14,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 7,
    opacity: 0.8
  },
  playIconContainer: {
    backgroundColor: '#212121',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 25,
    marginBottom: 14
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  category: {
    height: 130,
  },

  categoryseeall: {
    width: '95%',
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  categoryclick: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 100,
    paddingHorizontal: 30,
  },
  playIconOrderMovie: {
    width: 85,
    height: 30,
    backgroundColor: 'orange',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    top: 10,
    left: 10,
  },
});

export default HomeFilm;