import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { ListOfFriends, ListContainer } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ListContainer>
      <ListOfFriends>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ListOfFriends>
    </ListContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};
