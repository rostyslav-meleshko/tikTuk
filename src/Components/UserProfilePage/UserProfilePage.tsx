import { FC } from 'react';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';
import UserFeed from './UserFeed';
import './UserProfilePage.scss';

const UserProfilePage: FC = () => {

  return (
    <div className="user-container">
      <Link to='/feed'>
        <span className="user-container__back-button">
          back to feed
        </span>
      </Link>
      <UserInfo />
      <UserFeed />
    </div>
  )
}

export default UserProfilePage;