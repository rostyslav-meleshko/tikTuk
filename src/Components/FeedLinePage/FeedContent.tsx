import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FeedLine } from '../../typesDef';
import { roundCommentsValue } from '../../Helpers/functions';
import { setAuthorMeta } from '../../Redux/store';

type FeedContentProps = {
  feed: FeedLine;
}

const FeedContent: FC<FeedContentProps> = ({ feed }) => {
  const dispatch = useDispatch();
  const windowWidth = window.outerWidth;
  const authorMeta = feed.authorMeta;

  const pickUserData = () => {
    dispatch(setAuthorMeta(authorMeta));
  }

  return (
    <>
      <div className="feed-container__avatar">
        <Link to={`/user/${feed.authorMeta.name}`}>
          <img
            src={feed.authorMeta.avatar}
            role="link"
            alt="user_avatar"
            height={windowWidth > 640 ? '56' : '36'}
            width={windowWidth > 640 ? '56' : '36'}
            onClick={pickUserData}
          />
        </Link>
      </div>

      <div className="feed-container__body feed-content">
        <Link to={`/user/${feed.authorMeta.name}`} className='feed-content__link'>
          <div className="feed-content__name"
            role="link"
            onClick={pickUserData}
          >
            <span className="feed-content__name--main">
              {feed.authorMeta.name}
            </span>
            <span className="feed-content__name--sub">
              {feed.authorMeta.nickName}
            </span>
          </div>
        </Link>

        <div>{feed.text}</div>

        {feed.hashtags.length > 0 &&
          <div className="feed-content__hashtags">
            <span>
              {feed.hashtags.map(hashtag => (
                <span key={hashtag.id} className="feed-content__hashtags--hashtag">
                  #{hashtag.name}
                </span>
              ))}
            </span>
          </div>
        }

        <div className='feed-content__video'>
          <video
            preload="true"
            autoPlay
            loop={true}
            width={windowWidth > 640 ? '336px' : '207px'}
            height={windowWidth > 640 ? '600px' : '370px'}
            controls
            muted
            playsInline
          >
            <source src={feed.videoUrl} />
          </video>
        </div>

        <div className='feed-content__comments'>
          <span>
            <b>Comments:</b>&nbsp;{roundCommentsValue(feed.commentCount)}
          </span>
          <span>
            <b>Likes:</b>&nbsp; {roundCommentsValue(feed.diggCount)}
          </span>
        </div>
      </div>
    </>
  )
}

export default FeedContent;
