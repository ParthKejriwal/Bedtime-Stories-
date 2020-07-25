import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView,ToastAndroid } from 'react-native';
import db from '../config.js'

export default class WriteStory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            storyText: '',
        }
    }

    submitStory = () => {
        console.log(db.collection("Stories"))
        ToastAndroid.show("Your Story has been submitted",ToastAndroid.SHORT)
        db.collection("Stories").add({
            title: this.state.title,
            author: this.state.author,
            storyText: this.state.storyText,
        })
        this.setState({
            title: '',
            author: '',
            storyText: ''
        })
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}> 
<View style={styles.container}>
                <TextInput
                    placeholder="Story Title"
                    placeholderTextColor='black'
                    onChangeText={(text) => {
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}
                    style={styles.title}/>
                <TextInput
                    placeholder="Author"
                    placeholderTextColor='black'
                    onChangeText={(text) => {
                        this.setState({
                            author: text
                        })
                    }}
                    value={this.state.author}
                    style={styles.author}/>
                <TextInput
                    placeholder="Write your story"
                    placeholderTextColor='black'
                    onChangeText={(text) => {
                        this.setState({
                            storyText: text
                        })
                    }}
                    value={this.state.storyText}
                    style={styles.storyText}
                    multiline={true}
                                multiline
            numberOfLines={16}

            maxLength={1000}
                    />

                <TouchableOpacity
                    onPress={this.submitStory}
                    
                >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 30,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        height: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center'
    }
});