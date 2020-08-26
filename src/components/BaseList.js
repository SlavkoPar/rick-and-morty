import React, { useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import { Row, Col } from './GridStyling'


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
          <Row onClick={toggleExpand}>
            <Col>{`SHOW ${expand ? "LESS" : "MORE"}`}</Col>
          </Row>
        ) : null}
        {loading ? (
          <Row>
            <Col><LoadingIndicator loading /></Col>
          </Row>
        ) : null}
      {/* </tbody> */}
    </LoadingIndicator>
  );
}

export default BaseList;
