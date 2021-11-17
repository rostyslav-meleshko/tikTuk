import { FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IUserInfo } from '../../typesDef';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { serverRequest } from '../../Helpers/api';
import { stateAuthorMeta } from '../../Redux/store';
import { roundCommentsValue } from '../../Helpers/functions';
import Loader from '../Loader/Loader';
import ErrorBlock from '../../Components/FeedLinePage/ErrorBlock';

type MatchParams = {
  userName: string;
}

const UserInfo: FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const userName = match.params.userName;
  const authorMeta = useSelector(stateAuthorMeta);

  const [userInfo, setUserInfo] = useState<IUserInfo | null>(null); // this code written as simulation of calling server, as no usefull data not coming from required api method
  const [isServerResponsed, setIsServerResponsed] = useState(false);
  const [isServerError, setIsServerError] = useState(false);
  const windowWidth = window.outerWidth;

  useEffect(() => { // this code written as simulation of calling server, as no usefull data not coming from required api method
    const getUserInfo = async () => {
      const userInfoFromServer = await serverRequest(`/user/info/${userName}`)
      try {
        setIsServerResponsed(true);
        setUserInfo(userInfoFromServer);
        setIsServerError(false);
      } catch (error) {
        setIsServerResponsed(true);
        setIsServerError(true);
        console.warn(error)
      };
    };
    getUserInfo();
  }, [userName]);

  console.log('userInfo from server', userInfo)
  return (
    <>
      {!isServerResponsed &&
        <>
          <Loader />
          <div>Loading user info...</div>
        </>
      }

      {isServerError && <ErrorBlock />}

      {((authorMeta !== null && isServerResponsed && !isServerError) &&
        <div className="user-container__user-info">
          <div className="user-card">
            <div className="user-card__avatar">
              <img
                height={windowWidth > 640 ? '220' : '60'}
                width={windowWidth > 640 ? '220' : '60'}
                src={authorMeta?.avatar}
                alt="user_avatar"
              />
            </div>

            <div className="user-card__info">
              <h1>{authorMeta.nickName}</h1>
              <h2>{authorMeta.name}</h2>
              <h3>Total videos - {authorMeta.video}</h3>
              <h3>Fans - {roundCommentsValue(authorMeta.fans)}</h3>
              <h3>Likes - {roundCommentsValue(authorMeta.heart)}</h3>
              <h3>Following - {authorMeta.following}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default withRouter(UserInfo);
