import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';

class BookList extends React.Component {


    render() {
        const { books } = this.props;

        return (
            <View>
                <FlatList
                    data={books}
                    renderItem={({ item }) => <Text>{item.title}</Text>}
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