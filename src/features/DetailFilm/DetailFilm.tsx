import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const DetailFilm = () => {
  const { navigate,goBack } = useNavigation();

  const onGoBack = () => {
    goBack();
  };
  return (
    <View style={styles.container}>
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
            <Text style={{ marginTop: 5 }}>
              Comedy
            </Text>
          </View>
          <View style={styles.danhgiachung}>
            <Image
              style={styles.Logoicon}
              source={require("../../assests/icon/dongho.png")}
            />
            <Text style={{ marginTop: 5 }}>
              1h 20m
            </Text>
          </View>
          <View style={styles.danhgiachung}>
            <Image
              style={styles.Logoicon}
              source={require("../../assests/icon/ngoisao.png")}
            />
            <Text style={{ marginTop: 5 }}>
              4.7/5
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.in4Film}>
        <View style={{ alignItems: 'center', marginBottom: 10, borderBottomWidth: 1, borderBottomColor: 'gray', width: '80%' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>TOM AND JERRY</Text>
        </View>
      </View>

      <ScrollView>
        <View style={styles.in4Film}>
          <View style={styles.desFilm}>
            <Text style={{ marginTop: 5 }}>
              Chưa thấy ai cover nhạc của Tùng hay cho đến khi xem video này ạ. Thực sự bản phối quá hay và giọng bạn nữ cũng hợp nữa. Có thể hát nhạc của Tùng đã khó rồi mà bản phối này đối với mình quá đỉnh luôn.😍
              203
              Phản hồi
              5 phản hồi
              Quang Minh Tăng
              Quang Minh Tăng
              1 năm trước
              Một phần trình diễn tuyệt vời. Từ giai điệu, giọng hát, bản phối, hình thể trên sân khấu từng động tác rất đẹp. Không liên quan mấy chứ body và bộ đồ của chị rất hợp 😁
              46
              Phản hồi
              Ngth Thuyquynh
              Ngth Thuyquynh
              1 năm trước
              Sơn Tùng M-TP là idol của mình, trước giờ những bài cover nhạc của Tùng mình đều ko thích. Nhưng riêng bản phối này thật quá tuyệt vời, rất hợp với vibe của bài hát, nghe như những năm 80,90 vậy
              hưa thấy ai cover nhạc của Tùng hay cho đến khi xem video này ạ. Thực sự bản phối quá hay và giọng bạn nữ cũng hợp nữa. Có thể hát nhạc của Tùng đã khó rồi mà bản phối này đối với mình quá đỉnh luôn.😍
              203
              Phản hồi
              5 phản hồi
              Quang Minh Tăng
              Quang Minh Tăng
              1 năm trước
              Một phần trình diễn tuyệt vời. Từ giai điệu, giọng hát, bản phối, hình thể trên sân khấu từng động tác rất đẹp. Không liên quan mấy chứ body và bộ đồ của chị rất hợp 😁
              46
              Phản hồi
              Ngth Thuyquynh
              Ngth Thuyquynh
              1 năm trước
              Sơn Tùng M-TP là idol của mình, trước giờ những bài cover nhạc của Tùng mình đều ko thích. Nhưng riêng bản phối này thật quá tuyệt vời, rất hợp với vibe của bài hát, nghe như những năm 80,90 vậy</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.backgroudButton}>
        <TouchableOpacity
          style={styles.button}>
          <Text style={styles.buttonText}>Get Reservation</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  in4Film: {
    alignItems: 'center',
  },
  desFilm: {
    width: '85%',
    alignItems: 'center',
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