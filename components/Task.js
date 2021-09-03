import React from 'react';
import { View, Text, StyleSheet, ProgressViewIOSComponent, TouchableOpacity } from 'react-native';

const Task = (props) => {

    return (
        <View>
            <Text>{props.text}</Text>
        </View>
    )
} 

export default Task; 