import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Card } from '.'

class BookList extends React.Component {

    renderItem({ item }) {
        return (
            <Card>
                <Text>{item.title}</Text>
            </Card>
        )
    }

    render() {
        const { books } = this.props;
        return (
            <View>
                <FlatList
                    data={books}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.isbn} />
            </View>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(BookList);