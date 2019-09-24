import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TouchableOpacity, FlatList } from 'react-native';
import { colors } from '../styles/base';

class MyListItem extends React.PureComponent {

  press = (id) => {
      this.props.onPress(id);
  }  

  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity onPress={() => this.press(item.survey_id)}>
          <Item>
            <Inline>
              <PollTitle>{item.name}</PollTitle>
              <PollVotes>{item.total_votes !== null ? item.total_votes : 0}</PollVotes>
            </Inline>
            <PollDate>{item.created}</PollDate>
          </Item>
      </TouchableOpacity>
    )
  }
}

class PollsList extends React.Component {

  static propTypes = {
      items: PropTypes.array.isRequired,
      loadMore: PropTypes.func,
      itemPress: PropTypes.func
  }

  constructor(props) {
    super(props);
  }

  handleLoadMore = () => {
    if (typeof this.props.loadMore === 'undefined') {
      return;
    }
    this.props.loadMore();
  }

  _keyExtractor = (item) => item.survey_id;

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

const Item = styled.View`
  flex: 1;
  paddingVertical: 10;
  borderBottomWidth: 1;
  borderColor: #ededed;
`;

const Inline = styled.View`
  flex: 1;
  flexDirection: row;
  justifyContent: space-between;
`;

const PollTitle = styled.Text`
  color: ${colors.black};
  fontSize: 13;
`;

const PollVotes = styled.Text`
  color: ${colors.black};
  fontSize: 12;
`;

const PollDate = styled.Text`
  color: red;
  fontSize: 12;
`;

export default PollsList;
