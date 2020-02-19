import React from 'react';
import { View, FlatList} from 'react-native';
import { connect } from 'react-redux';
import BookItem from './bookItem';

class BookList extends React.Component {

    myRenderItem({ item }) {
        return (
            <BookItem book={item}/>
        )
    }

    render() {
        const { books } = this.props;
        return (
            <View>
                <FlatList
                    data={books}
                    renderItem={this.myRenderItem}
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