import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import DeckIcon from './DeckIcon';

class DeckList extends Component {
  render() {
    const { decks } = this.props;
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {decks.length
          ? decks.map((deck) => (
              <DeckIcon key={deck} title={deck} />
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