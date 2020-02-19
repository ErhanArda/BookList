import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import BookList from './components/bookList'

export default function App() {
  return (
    <Provider store={createStore(reducers)}>
      <View style={styles.container}>
        <Header headerText='Book List'/>
        <BookList/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
});
