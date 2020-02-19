import React, {Component} from 'react';
import { StyleSheet, Text } from 'react-native';

import { Card } from './common'

class BookItem extends Component{
    render(){

        const{  book } = this.props;
        return(
            <Card>
            <Text style={styles.titleStyle}>{book.title}</Text>
            <Text style={styles.authorStyle}>{book.author}</Text>

        </Card>
        )
    }
}
const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 16,
        color: 'black'
    },
    authorStyle:{
        fontSize:13,
        color:'grey',
    }
});

export default BookItem;