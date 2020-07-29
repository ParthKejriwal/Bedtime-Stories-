import React from 'react';
import { Text, View } from 'react-native';
import db from '../config.js';
import { FlatList } from 'react-native-gesture-handler';

export default class Searchscreen extends React.Component {

constructor(props){
  super(props)
  this.state=({allStories:[]})
}

componentDidMount = async ()=>{ 
  const query = await db.collection("Stories").get()
  query.docs.map((doc)=>{
    this.setState({ allStories: [...this.state.allStories,doc.data()] })
  })
}

    render() {
      return (
       <FlatList data={this.state.allStories} renderItem={({item})=>(
        <View>
        <Text>
          {'Story Title: ' + item.stortTitle}
        </Text>
        <Text>
          {'Story: ' + item.storyText}
        </Text>
        <Text>
          {'Author: ' + item.author}
        </Text>
      </View>
       )} 
       keyExtractor={(item,index)=>index.toString()}>
       </FlatList>
      );
    }
  }