import React from "react";
import LoadingIndicator from "./LoadingIndicator";
import { Row, Col } from './GridStyling'


function BaseList({ items = [], renderItem, loading, hasNextPage,  ...rest }) {

  const itemCount = items.length;
  const isInitialFetch = Boolean(loading && !itemCount);

  return (
    <LoadingIndicator loading={isInitialFetch}>
		{items?.map((item, i) =>
			item ? renderItem(item, i)	: null,
		)}
		
		{loading ? (
			<Row>
			<Col><LoadingIndicator loading={loading} /></Col>
			</Row>
		) : null}
    </LoadingIndicator>
  );
}

export default BaseList;
