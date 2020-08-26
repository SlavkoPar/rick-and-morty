import React from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { Grid } from './GridStyling'

function InfiniteScrollWrapper({
  hasNextPage,
  loading,
  onLoadMore,
  children,
}) {
  const infiniteContainerRef = useInfiniteScroll({
    hasNextPage,
    loading,
    onLoadMore,
  });

  return <Grid ref={infiniteContainerRef}>{children}</Grid>;
}

export default InfiniteScrollWrapper;
