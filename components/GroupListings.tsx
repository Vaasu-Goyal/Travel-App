import { FlatList,ListRenderItem, StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { GroupType } from '@/types/groupType'



import Listings from './Listings'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const GroupListings = ({ listings }: { listings: GroupType[] }) => {
  const renderItem: ListRenderItem<GroupType> = ({ item }) => {
    return (
      <View  style={styles.items}>
        <Image source={{ uri: item.image }} style={styles.images} />
        <View>
          <Text style = {styles.itemTxt}>{item.name}</Text>
          <View style ={{flexDirection:"row",alignItems:'center'}}>
            <Ionicons name = "star" size = {20} color ={Colors.primaryColor}/>
            <Text style = {styles.itemRating}>{item.rating}</Text>
            <Text style = {styles.itemReview}>({item.reviews})</Text>
          </View>
        </View>
      </View>
    );
  }


  return (
    <View style={{marginVertical:20}}>
      <Text style={styles.title}>Top Travel Groups</Text>
      <FlatList data = {listings} renderItem={renderItem} horizontal showsHorizontalScrollIndicator= {false}/>
    </View>
  )
}

export default GroupListings

const styles = StyleSheet.create({
  title:{
    fontSize:22,
    fontWeight:'600',
    color:Colors.black,
    marginBottom:10,

  },
  items:{
    backgroundColor:Colors.white,
    padding:10,
    borderRadius:10,
    marginRight:20,
    flexDirection:'row',
    alignItems:'center',
  
  },
  images:{
    width:80,
    height:100,
    borderRadius:10,
    marginRight:10
  },
  itemTxt:{
    fontSize:14,
    fontWeight:'600',
    color:Colors.black,
    marginBottom:8

  },
  itemRating:{
    fontSize:14,
    fontWeight:'600',
    color:Colors.black,
    marginLeft:5,
    marginRight:2,
  },
  itemReview:{
    fontSize:14,
    fontWeight:'600',
    color:'#999',

  }
});


