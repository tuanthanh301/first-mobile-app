import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, StatusBar, ScrollView, ImageBackground, TextInput, TouchableWithoutFeedback, FlatList } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import Carousel from 'react-native-anchor-carousel';
import Search from '../../components/common/Search';
import IconCategory from '../../components/common/IconCategory';
import Images from '../../assests';


const HomeFilm = () => {

  const [background, setBackground] = useState({
    uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9',
    name: 'Avengers: End Game',
    stat: '2019 ‧ Action/Sci-fi ‧ 3h 2m',
    desc: 'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.'
  })

  const [gallery, setgallery] = useState([

    { image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9', title: 'Avengers: End Game', released: '2019 ‧ Action/Sci-fi ‧ 3h 2m', key: '1', desc: 'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.' },
    { image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxo7Naxu0tjuSEZ9_faYL--aWjx8V5TKr4q2YeenYKXXik-T5P', title: 'Alita: Battle Angel', released: '2019 ‧ Action/Sci-fi ‧ 2h 2m', key: '2', desc: 'Alita, a battle cyborg, is revived by Ido, a doctor, who realises that she actually has the soul of a teenager. Alita then sets out to learn about her past and find her true identity.' },
    { image: 'https://www.gstatic.com/tv/thumb/v22vodart/15879807/p15879807_v_v8_aa.jpg', title: 'The Irish Man', released: '2019 ‧ Crime/Drama ‧ 3h 30m', key: '3', desc: 'In the 1950s, truck driver Frank Sheeran gets involved with Russell Bufalino and his Pennsylvania crime family. As Sheeran climbs the ranks to become a top hit man, he also goes to work for Jimmy Hoffa.' },
    { image: 'https://i.pinimg.com/originals/99/03/9a/99039a6afb682e42c9a12556071b38c9.jpg', title: 'John Wick Chapter 3', released: '2019 ‧ Action/Thriller ‧ 2h 10m', key: '4', desc: 'John Wick is declared excommunicado and a hefty bounty is set on him after he murders an international crime lord. He sets out to seek help to save himself from ruthless hitmen and bounty hunters.' },
    { image: 'https://upload.wikimedia.org/wikipedia/en/3/34/Tom_and_Jerry_Cowboy_Up.png', title: 'Tom and Jerry: Cowboy Up!', released: '2022 ‧ Action/Thriller ‧ 1h 15m', key: '5', desc: 'Tom and Jerry: Cowboy Up! is a 2022 American animated direct-to-video Western comedy film starring Tom and Jerry, produced by Warner Bros. Animation.' },
    { image: 'https://bazaarvietnam.vn/wp-content/uploads/2023/01/HBVN-phim-chieu-rap-2023-Evil-Dead-Rise.jpg', title: 'Evil Dead Rise', released: '2023 ‧ Action/Thriller ‧ 1h 36m', key: '6', desc: 'Evil Dead Rise is a 2023 American supernatural horror film written and directed by Lee Cronin. It is the fifth installment of the Evil Dead film series. The film stars Lily Sullivan and Alyssa Sutherland as two estranged sisters trying to survive and save their family from demonic creatures.' },
    { image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSvojK5wx-WhTMW17ps7c5A6aonXSPM5ISNpN8l-cVT2ZDd1BvJ', title: 'Indiana Jones and the Dial of Destiny', released: '2023 ‧ Action/Thriller ‧ 1h 50m', key: '7', desc: 'Indiana Jones and the Dial of Destiny is an upcoming American action-adventure film directed by James Mangold, who co-wrote the script with Jez Butterworth, John-Henry Butterworth, and David Koepp.' },

  ]);




  const [list, setList] = useState([
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKLiEyyz1Q9RC8EBYl3ijr3nuGeyO2ETmwy6Kdq0AQtD0elWD', key: '1' },
    { image: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg', key: '2' },
    { image: 'https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/spies-in-disguise-et00072276-10-03-2018-03-41-39.jpg', key: '3', },
    { image: 'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_.jpg', key: '4' },
  ]);

  const carouselRef = useRef(null);

  const { width, height } = Dimensions.get('window')

  const routeRecents = () => {
    props.navigation.navigate('Recents')
  }
  const renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            carouselRef.current.scrollToIndex(index);
            setBackground({
              uri: item.image,
              name: item.title,
              stat: item.released,
              desc: item.desc
            })
          }
          }
        >
          <Image source={{ uri: item.image }} style={styles.carouselImage} />
          <Text style={styles.carouselText}>{item.title}</Text>
          {/* <MaterialIcons name='library-add' size={30} color='white' style={styles.carouselIcon} /> */}
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
            <View>
              <Search />
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
                <Text style={styles.movieStat}>{background.stat}</Text>
              </View>
              <TouchableOpacity style={styles.playIconContainer}>
                <Image
                  style={styles.tinyLogo}
                  source={require("../../assests/icon/playicon.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.playIconOrderMovie}>
                <Text style={{color: 'white',fontSize: 13,fontWeight: '800'}}>Order Movie</Text>
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
                {/* <FontAwesome5  name='play' size={38} color='#fff' style={{position: 'absolute',top: '45%', left: '45%',opacity: 0.9}} /> */}
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
    width: 90,
    height: 35,
    backgroundColor: 'orange',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    right: 70,
    top: 35,
  },
});

export default HomeFilm;