import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import db from '../config.js'

export default class ReadStory extends React.Component {
  constructor(props){
    super(props)
    this.state={
      search:'',
      allStories:[]
    }
  }
  componentDidMount = async ()=>{ 
    const query = await db.collection("Stories").get()
    query.docs.map((doc)=>{
      this.setState({ allStories: [...this.state.allStories,doc.data()] })
    })
  }

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
        data={this.state.allStories} renderItem={({item})=>(
          <View>
          <Text>
            {'Story Title: ' + item.storyTitle}
          </Text>
          <Text>
            {'Author: ' + item.author}
          </Text>
          <Text>
            {'Story: ' + item.story}
          </Text>
        </View>
         )} 
         keyExtractor={(item,index)=>index.toString()}>
         </SearchBar>
     );
  }
}