import PropTypes from 'prop-types';
import { Box } from '../Box' 
//import { startTransition } from 'react';
import { ProfileAvatar, UserName, UserTag, UserLocation, UserStats, StatsItem, StatsSpan } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
  return (<Box
    className='profile'
    p={4}
    ml='auto'
    mr='auto'
    width='300px'
    bg='muted'
    mt={3}
        >
      <Box>
        <ProfileAvatar
        src={avatar} alt="user avatar"
        />
        <UserName>{username}</UserName>
        <UserTag>{`@${tag}`}</UserTag>
        <UserLocation>{location}</UserLocation>
       </Box>
        <UserStats>
    <StatsItem>
      <StatsSpan>Followers</StatsSpan>
          <StatsSpan>{followers}</StatsSpan>
    </StatsItem>
    <StatsItem>
      <StatsSpan>Views</StatsSpan>
    <StatsSpan>{views}</StatsSpan>
    </StatsItem>
    <StatsItem>
      <StatsSpan>Likes</StatsSpan>
          <StatsSpan>{likes}</StatsSpan>
    </StatsItem>
        </UserStats>
        </Box>)
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
}
