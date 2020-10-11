import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
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
  render() {
    const { decks } = this.props;
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {decks.length
          ? decks.map((deck) => (
              <DeckIcon key={deck} deck={deck} />
            ))
          : <Text>No Decks Created Yet.</Text>
        }
      </View>
    )
  }
}

function mapStateToProps( state ) {
  return {
    decks: Object.keys(state)
  }
}

export default connect(mapStateToProps)(DeckList);