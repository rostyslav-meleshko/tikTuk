import React, { FC, useEffect, useMemo } from 'react';
import { FeedLine } from '../../typesDef';
import { serverRequest } from '../../Helpers/api';
import FeedContent from './FeedContent';
import Loader from '../Loader/Loader';
import PaginationButtons from './PaginationButtons';
import ErrorBlock from './ErrorBlock';
import './FeedLinePage.scss'

export const PAGINATION_PAGES = [1, 2, 3];

const FeedLinePage: FC = () => {
  const [feedLine, setFeedLine] = React.useState<FeedLine[] | []>([]);
  const [isServerResponsed, setIsServerResponsed] = React.useState<boolean>(false);
  const [isServerError, setIsServerError] = React.useState<boolean>(false);
  const [paginationPage, setPaginationPage] = React.useState(1);
  const feedCountPerPage = 10;

  const getFeedLineFromServer = async () => {
    const serverResponse = await serverRequest('/trending/feed')
    try {
      setFeedLine(serverResponse);
      setIsServerResponsed(true);
    } catch (error) {
      setIsServerResponsed(true);
      setIsServerError(true);
      console.warn(error)
    }
  };

  const handlePageChange = (page: number) => {
    if (page === paginationPage) {
      return
    } else {
      setPaginationPage(page)
    }
  }

  const showableFeedLine = useMemo(() => {
    const indexStart = (feedCountPerPage * paginationPage) - feedCountPerPage;
    const indexEnd = (feedCountPerPage * paginationPage) - 1;

    return (
      [...feedLine].slice(indexStart, indexEnd)
    )
  }, [paginationPage, feedLine])

  useEffect(() => {
    getFeedLineFromServer();
  }, []);

  return (
    <div className="container-feedline">
      <span>FeedLinePage</span>

      {!isServerResponsed && <Loader />}

      {showableFeedLine.length > 0 &&
        <div className="container-feedline__buttons">
          <PaginationButtons
            paginationPage={paginationPage}
            handlePageChange={handlePageChange}
          />
        </div>
      }

      {isServerError && <ErrorBlock />}

      {showableFeedLine.map((feed) => {
        return (
          <div className='feed-container' key={feed.id}>
            <FeedContent feed={feed} />
          </div>
        )
      })}
      {console.log(feedLine)}

      {showableFeedLine.length > 0 &&
        <div className="container-feedline__buttons">
          <PaginationButtons
            paginationPage={paginationPage}
            handlePageChange={handlePageChange}
          />
        </div>
      }
    </div>
  )
}

export default FeedLinePage;