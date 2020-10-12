import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, SafeAreaView, FlatList, StyleSheet, StatusBar }
  from 'react-native';
import { fetchData } from '../utils/api';
import { receiveEntries } from '../actions'
import DeckIcon from './DeckIcon';

class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    fetchData()
      .then((value) => {
        dispatch(receiveEntries(value));
      }
    )
  }
  renderItem = ({ item }) => (<DeckIcon style={styles.item} deck={item} />)
  render() {
    const { decks } = this.props;
    return(
      <SafeAreaView style={styles.container}>
        {decks.length
          ? <FlatList
              data={decks}
              renderItem={this.renderItem}
              keyExtractor={item => item}
              />
          : <Text>No Decks Created Yet.</Text>
        }
      </SafeAreaView>
    )
  }
}

function mapStateToProps( state ) {
  return {
    decks: Object.keys(state)
  }
}

export default connect(mapStateToProps)(DeckList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems: 'stretch'
  }
})