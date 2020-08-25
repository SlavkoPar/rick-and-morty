import React, { useState } from "react";
import LoadingIndicator from "./LoadingIndicator";


function BaseList({ items = [], renderItem, loading, maxVisibleItemCount,  ...rest }) {
  const [expand, setExpand] = useState(!maxVisibleItemCount);

  function toggleExpand() {
    setExpand(!expand);
  }

  const itemCount = items.length;
  const isInitialFetch = Boolean(loading && !itemCount);

  return (
    <LoadingIndicator loading={isInitialFetch}>
      {/* <tbody {...rest}> */}
        {items?.map((item, i) =>
          item && (!maxVisibleItemCount || expand || i < maxVisibleItemCount)
            ? renderItem(item, i)
            : null,
        )}
        {maxVisibleItemCount && itemCount && itemCount > maxVisibleItemCount ? (
          <tr onClick={toggleExpand}>
            <td>{`SHOW ${expand ? "LESS" : "MORE"}`}</td>
          </tr>
        ) : null}
        {loading ? (
          <tr>
            <td><LoadingIndicator loading /></td>
          </tr>
        ) : null}
      {/* </tbody> */}
    </LoadingIndicator>
  );
}

export default BaseList;
