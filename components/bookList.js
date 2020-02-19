import React from 'react';
import { Text, View, FlatList,StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { Card } from '.'

class BookList extends React.Component {

    myRenderItem({ item }) {
        return (
            <Card>
                <Text style={styles.titleStyle}>{item.title}</Text>
                <Text style={styles.authorStyle}>{item.author}</Text>

            </Card>
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

export default connect(mapStateToProps)(BookList);