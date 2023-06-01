import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Iconic from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Colors } from '../helper/helper'

const Mine = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerImgInput}>
        <Image source={require('../assets/men.jpeg')} style={{ width: 45, height: 45, borderRadius: 50 }} />
        <View style={styles.inputContainer}>
          <Iconic name='search' color={'#6c6c6c'} style={{ marginLeft: 10, marginRight: 5 }} size={20} />
          <TextInput
            style={styles.searchBar}
            placeholder='1 year annualized 5% deposit'
            placeholderTextColor={'#6c6c6c'}
          />
        </View>
      </View>

    <ScrollView>
      {/* headerIcon Section */}
      <View style={styles.headerIconContainer}>
        <View>
          <View style={styles.headerIconBg}>
            <Iconic name='scan-sharp' color={Colors.lightGolden} size={30} />
          </View>
          <Text style={[styles.iconText,{textAlign:"center",fontSize:13}]}>Scan</Text>
        </View>

        <View>

        <View style={styles.headerIconBg}>
          <AntDesign name='barcode' color={Colors.lightGolden} size={30} />
        </View>
        <Text style={[styles.iconText,{textAlign:"center",fontSize:13}]}>code</Text>
       </View>

       <View>
        <View style={[styles.headerIconBg, { transform: [{ rotate: '-90deg' }] }]}>
          <Iconic name='ios-battery-charging-sharp' color={Colors.lightGolden} size={30} />
        </View>
        <Text style={[styles.iconText,{textAlign:"center",fontSize:13}]}>Charge</Text>
        </View>
      <View>
        <View style={styles.headerIconBg}>
          <Entypo name='credit-card' color={Colors.lightGolden} size={30} />
        </View>
        <Text style={[styles.iconText,{textAlign:"center",fontSize:13}]}>Repayment</Text>
        </View>
      </View>

      {/* LoanCard */}
      <View style={styles.goldenBox}>
        <View style={styles.textEyeBox}>
          <Text style={styles.commonTextStyle}>Bullion can borrow  </Text>
          <Iconic name='eye-outline' color='#00000090' />
        </View>

        <View style={styles.balanceBtnBox}>
          <Text style={{ fontWeight: '700', fontSize: 22 }}>39000.00</Text>
          <TouchableOpacity style={{ backgroundColor: "#000", paddingVertical: 5, paddingHorizontal: 20, borderRadius: 50 }}>
            <Text style={{ color: Colors.lightGolden }}>LOAN</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.commonTextStyle}>Total Amount 42000.00 Dollar</Text>
        <Text style={styles.commonTextStyle}>Daily Routine rate is as low as 0.05%</Text>
      </View>
      <View style={styles.lightBlackBox}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 5 }}>
          <Text style={{ fontWeight: '700', fontSize: 22, color: "#fff" }}>1084.00</Text>
          <View style={styles.repayMentBtn}>
            <Text style={{ fontWeight: '700', fontSize: 16, color: Colors.lightGolden }}>Repayment</Text>
            <Text style={{ fontWeight: '700', fontSize: 22 }}>d</Text>
          </View>
        </View>


        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Text style={[styles.commonTextStyle, { color: "#ffffff70" }]}>Expected Return Amount </Text>
          <Text style={[styles.commonTextStyle, { color: "#ffffff70" }]}>2019/09/02</Text>
        </View>

      </View>


      {/* CenterIcons */}
      <View style={styles.middleIconsBox}>
        <View>
          <View style={styles.middleIconTextBox}>
            <Iconic name='scan-sharp' color={Colors.lightGolden} size={30} />
            <Text style={styles.iconText}>Small vault</Text>
          </View>
          <View style={styles.middleIconTextBox}>
            <Fontisto name='flash' color={Colors.lightGolden} size={30} />
            <Text style={styles.iconText}>Flash</Text>
          </View>
        </View>

        <View>
          <View style={styles.middleIconTextBox}>
            <FontAwesome5 name='box' color={Colors.lightGolden} size={30} />
            <Text style={styles.iconText}>White stripe</Text>
          </View>
          <View style={styles.middleIconTextBox}>
            <FontAwesome name='bank' color={Colors.lightGolden} size={30} />
            <Text style={styles.iconText}>Bank</Text>
          </View>
        </View>

        <View>
          <View style={styles.middleIconTextBox}>
            <FontAwesome5 name='boxes' color={Colors.lightGolden} size={30} />
            <Text style={styles.iconText}>Bullion</Text>
          </View>
          <View style={styles.middleIconTextBox}>
            <Fontisto name='blood-drop' color={Colors.lightGolden} size={30} />
            <Text style={styles.iconText}>Living</Text>
          </View>
        </View>

        <View>
          <View style={styles.middleIconTextBox}>
            <Entypo name='shield' color={Colors.lightGolden} size={30} />
            <Text style={styles.iconText}>Insurance</Text>
          </View>
          <View style={styles.middleIconTextBox}>
            <FontAwesome name='bus' color={Colors.lightGolden} size={30} />
            <Text style={styles.iconText}>Traffic Travel</Text>
          </View>
        </View>

        <View>
          <View style={styles.middleIconTextBox}>
            <MaterialCommunityIcons name='stocking' color={Colors.lightGolden} size={30} />
            <Text style={styles.iconText}>Stock</Text>
          </View>
          <View style={styles.middleIconTextBox}>
            <MaterialCommunityIcons name='gamepad-round-down' color={Colors.lightGolden} size={30} />
            <Text style={styles.iconText}>More</Text>
          </View>
        </View>
      </View>

      {/* Images Section */}
      <View style={styles.bottomImages}>
        <Image resizeMode='cover' source={require('../assets/img1.jpg')} style={{ height: 200, width: 180, borderRadius: 15 }} />
        <Image resizeMode='cover' source={require('../assets/img2.jpg')} style={{ height: 200, width: 180, borderRadius: 15 }} />
      </View>
      </ScrollView>

    </View>
  )
}

export default Mine

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 40,
    paddingHorizontal: 10
  },
  headerImgInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#141414",
    height: 40,
    borderRadius: 50,
    width: "84%"
  },
  searchBar: {
    color: "#fff"
  },
  headerIconContainer: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    // paddingHorizontal:5
  },
  headerIconText:{
    marginTop:10,
    fontSize:12,

  },
  headerIconBg: {
    height: 55,
    width: 55,
    backgroundColor: "#141414",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50

  },

  goldenBox: {
    backgroundColor: Colors.lightGolden,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  }
  ,
  textEyeBox: {
    flexDirection: "row",
    alignItems: "center"
  },
  balanceBtnBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    marginVertical: 10
  },
  commonTextStyle: {
    fontSize: 12,
    fontWeight: '500',
    color: "#00000090"
  },
  lightBlackBox: {
    backgroundColor: '#141414',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  repayMentBtn: {
    flexDirection: "row",
    alignItems: "center"
  },


  middleIconsBox: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 3

  },
  middleIconTextBox: {
    alignItems: "center",
    marginBottom: 30
  },
  iconText: {
    color: "#ffffff80",
    fontSize: 11,
    marginTop: 10
  },
  bottomImages: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }


})
