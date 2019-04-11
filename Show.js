import React, {Component} from 'react';
import {Text, Image, Button, View} from 'react-native';
import A from './style/style.js';

var img = require('./img/Aurora.jpg');

class Show extends Component {
    render(){
        return(
            <View>
                <Image source={img} style={A.imageStyle}/>
                <Button
                title="Back to landing"
                onPress={()=>this.props.switchScreen("landing")}
                />
            </View>
        );
    }
}

export default Show