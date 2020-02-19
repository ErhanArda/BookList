import React, { Component } from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux' ;
import { Card } from './common';
import *  as actions from '../actions';

class BookItem extends Component {
    render() {

        const { book } = this.props;
        return (
            <TouchableOpacity onPress={() => this.props.selectBook(book)}>
                <Card>
                    <Text style={styles.titleStyle}>{book.title}</Text>
                    <Text style={styles.authorStyle}>{book.author}</Text>
                </Card>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 16,
        color: 'black'
    },
    authorStyle: {
        fontSize: 13,
        color: 'grey',
    }
});

export default connect(null,actions) (BookItem);