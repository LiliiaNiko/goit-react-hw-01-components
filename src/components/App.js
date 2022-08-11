import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../user.json';
import data from '../data.json';
import friends from "../friends.json";
import transactions from '../transactions.json';
import { GlobalStyle } from 'GlobalStyles';
//import { Box } from './Box';

export const App = () => {
  return (
    <div>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
      />
      <div>
      <Statistics title="Upload stats" stats={data} />
      
      </div>
      <div><FriendList friends={friends} /></div>
      <div><TransactionHistory items={transactions} /></div>
      <GlobalStyle />
    </div>
    
  );
};
