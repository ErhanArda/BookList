import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = (props) =>{
    return (
        <View style={styles.cardWrapper}>
            {props.children}
        </View>
    )
}
const styles = StyleSheet.create({
    cardWrapper:{
        height:50
    }
});
export { Card };