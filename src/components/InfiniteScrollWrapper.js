import React from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { Grid } from './GridStyling'

function InfiniteScrollWrapper({
  loading,
  hasNextPage,
  onLoadMore,
  children,
}) {
  const infiniteContainerRef = useInfiniteScroll({
    loading,
    hasNextPage,
	 onLoadMore,
	 scrollContainer: "parent"
  });

  return <Grid ref={infiniteContainerRef}>{children}</Grid>;
}

export default InfiniteScrollWrapper;
