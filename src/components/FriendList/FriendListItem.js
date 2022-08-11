import PropTypes from 'prop-types';
import { FriendItem, OnlineStatus, FriendName } from './FriendListItem.styled';


export const FriendListItem = ({ avatar, name, isOnline }) => {
    return(<FriendItem>
    <OnlineStatus>{isOnline}</OnlineStatus>
  <img  src={avatar} alt="User avatar" width="48" />
        <FriendName>{name}</FriendName>
</FriendItem>)
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
}
