import React, { useEffect, useState } from 'react';

import './style.scss';
import data from 'data/top-games.json';
import SimpleCard from 'components/SimpleCard';
import getImage from 'utils/image';

const TIMER_INITIAL_VALUE_IN_MS = 2000;
function Main() {
  const { data: games } = data;
  const [index, setIndex] = useState(0);
  const [view, setView] = useState(games[index]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((oldIndex) => {
        if (oldIndex >= games.length - 1) {
          return 0;
        }

        return oldIndex + 1;
      });
    }, TIMER_INITIAL_VALUE_IN_MS);

    return () => {
      clearInterval(intervalId);
    };
  }, [games.length]);

  useEffect(() => {
    setView(games[index]);
  }, [index, games]);

  return (
    <main className="main">
      <div className="main--banner">
        <img src={getImage(view.images, 'OfferImageWide')} alt={view.title} />
        <div className="main--banner-info">
          <h3>{view.description}</h3>

          <button type="button">
            立刻加入愿望清单
          </button>
        </div>
      </div>
      <div>
        {
          games.map(({ title, images }, idx) => (
            <SimpleCard
              key={title}
              active={idx === index}
              image={getImage(images, 'Thumbnail')}
              title={title}
              onClick={() => {
                setIndex(idx);
              }}
            />
          ))
        }
      </div>
    </main>
  );
}

export default Main;
