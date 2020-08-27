import React from "react";
import BaseList from "./BaseList";
import EpisodeLine from "./EpisodeLine";


function renderItem(episode) {
  if (episode.id) {
    return <EpisodeLine key={episode.id} {...episode} />;
  }

  return null;
}

function EpisodeList({ episodes, loading, hasNextPage }) {
  return (
    <BaseList
      items={episodes}
      loading={loading}
      hasNextPage={hasNextPage}
      renderItem={renderItem}
    >
      );
    </BaseList>
  );
}

export default EpisodeList;
