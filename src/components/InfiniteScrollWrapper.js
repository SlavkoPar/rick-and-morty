import React from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";

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

  return <tbody ref={infiniteContainerRef}>{children}</tbody>;
}

export default InfiniteScrollWrapper;
