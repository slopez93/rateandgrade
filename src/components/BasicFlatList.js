import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { View, StyleSheet, TouchableOpacity, Text, FlatList, Image } from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";

class MyListItem extends React.PureComponent {

  press = (id) => {
      this.props.onPress(id);
  }  

  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity onPress={this.press}>
          <ListItem
            title={item.title}
          />
      </TouchableOpacity>
    )
  }
}

class BasicFlatList extends React.Component {

  static propTypes = {
      items: PropTypes.array.isRequired,
      loadMore: PropTypes.func,
      itemPress: PropTypes.func
  }

  constructor(props) {
    super(props);
  }

  handleLoadMore = () => {
    console.log('end');
    if (typeof this.props.loadMore === 'undefined') {
      return;
    }
    this.props.loadMore();
  }

  _keyExtractor = (item, index) => item.userId;

  _renderItem = ({item}) => (
    <MyListItem
      item={item}
      onPress={this.props.itemPress}
    />
  );

  render() {
    return (
        <FlatList
            data={this.props.items}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={0.3}
        />
    );
  }
}

export default BasicFlatList;
