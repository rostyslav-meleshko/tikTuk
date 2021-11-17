import React, { FC, useState, useEffect } from 'react';
import { FeedLine } from '../../typesDef';
import { serverRequest } from '../../Helpers/api';
import Loader from '../Loader/Loader';
import ErrorBlock from '../../Components/FeedLinePage/ErrorBlock';

const UserFeed: FC = () => {
  const [feedLine, setFeedLine] = React.useState<FeedLine[] | []>([]);
  const [isServerResponsed, setIsServerResponsed] = React.useState<boolean>(false);
  const [isServerError, setIsServerError] = React.useState<boolean>(false);

  const getFeedLineFromServer = async () => { //as server api with user feed working not correctly, a fetched standart feedline
    const serverResponse = await serverRequest('/trending/feed')
    try {
      setFeedLine(serverResponse);
      setIsServerResponsed(true);
    } catch (error) {
      setIsServerResponsed(true);
      setIsServerError(true);
      console.warn(error);
    };
  };

  useEffect(() => {
    getFeedLineFromServer();
  }, []);

  return (
    <>
      {!isServerResponsed && <Loader />}

      {isServerError && <ErrorBlock />}

      {isServerResponsed && !isServerError &&
        <div className="user-container__user-feed">
          {feedLine.map(feed => {
            return (
              <div>
                <video
                  preload="true"
                  loop={true}
                  width="207"
                  height="370"
                  controls
                  muted
                  playsInline
                >
                  <source src={feed.videoUrl} />
                </video>
              </div>
            )
          })}
        </div>}

      {isServerResponsed && !isServerError && feedLine.length === 0 &&
        <h2>No data at the moment. Please reload page</h2>
      }
    </>
  );
};

export default UserFeed;
