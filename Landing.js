import React, {Component} from 'react';
import {Text, Image, Button, View} from 'react-native';
import A from './style/style.js';


var img = require('./img/logo.png');

class Landing extends Component{
    render(){
        return(
            <View style={A.container}>
                <Image source={img} style={A.imageStyle}/>
                <Text>Hello I am here</Text>
                {console.log("Landing is working")}
                <Button
                title="Click to go Show"
                onPress={()=>this.props.switchScreen("screen")}
                />
            </View>
        );
    }
}

export default Landing;