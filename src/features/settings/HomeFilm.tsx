import {
  FlatList, StyleSheet, Text, TouchableOpacity, View, ScrollView, Image, ImageSourcePropType
} from 'react-native'
import React from 'react'
import Search from '../../components/common/Search'
import IconCategory from '../../components/common/IconCategory'
import Images from '../../assests'
import Index from '../../components/common/CarouselFilm'
import data from '../../assests/data/Film.json';
import ProductItem from '../../components/common/FilmItems';
import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    id: '0',
    title: 'Phim Hay',
    imgFilm: '("../../assests/icon/Tom_and_Jerry_The_Movie_Poster.png")',
  },
  {
    id: '1',
    title: 'Phim KEKE',
  },
  {
    id: '2',
    title: 'Phim KHEKHE',
  },
  {
    id: '0',
    title: 'Phim Hay',
    imgFilm: '("../../assests/icon/Tom_and_Jerry_The_Movie_Poster.png")',
  },
  {
    id: '1',
    title: 'Phim KEKE',
  },
  {
    id: '2',
    title: 'Phim KHEKHE',
  },
];

type ItemProps = {
  title: string,
  imgFilm: ImageSourcePropType,
};

const Item = ({ title, imgFilm }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Image
      style={styles.tinyLogo}
      source={require("../../assests/icon/Tom_and_Jerry_The_Movie_Poster.png")}
    />
  </View>
);

const HomeFilm = () => {
  const { navigate } = useNavigation();
  const [index, setIndex] = React.useState(0)

  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Text style={{ fontSize: 28, fontWeight: 'bold' }}>
          Hello, abcxyz
        </Text>
        <Text style={{ fontSize: 18 }}>
          Hay dat ve xem phim di nao ??
        </Text>
      </View>

      <View style={styles.setupSearch}>
        <Search />
      </View>
      <ScrollView>
        <View style={styles.category}>
          <View style={styles.categoryseeall}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 22 }}>
              Category
            </Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 15, fontWeight: 'bold', paddingLeft: 22, marginLeft: 170 }}>
              See all >
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.categoryclick}>
            <IconCategory text='Phim Ma' categoryfilmIMG={Images.icons.iconCategory.phimma} />
          </View>
        </View>
        <View style={styles.HOTfilm}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 15 }}>
            Phim sắp chiếu
          </Text>
          <FlatList
            data={DATA}
            horizontal
            showsHorizontalScrollIndicator={true}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item title={item.title} />}
          />
        </View>
      </ScrollView>

    </View >
  )
}

export default HomeFilm

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3034df',
  },

  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 300,
    height: 400,
  },
  title: {
    fontSize: 32,
  },


  welcome: {
    marginTop: 10,
    width: '100%',
    height: 70,
    backgroundColor: 'blue',
    paddingLeft: 10,
  },
  setupSearch: {
    marginTop: -15,
  },

  category: {
    height: 130,
  },

  categoryseeall: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },

  categoryclick: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 100,
    paddingHorizontal: 30,

  },
  HOTfilm: {
    width: '100%',
    height: 500,
  },
})
