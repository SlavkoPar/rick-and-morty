import React from "react";
import LoadingIndicator from "./LoadingIndicator";
import { Row, Col } from './GridStyling'


function BaseList({ items = [], renderItem, loading, hasNextPage,  ...rest }) {

  // const itemCount = items.length;
  // const isInitialFetch = Boolean(loading && !itemCount);
  //  <LoadingIndicator loading={isInitialFetch}>

  return (
	<>
		{items?.map((item, i) =>
			item ? renderItem(item, i)	: null,
		)}
		
		{loading ? (
			<Row>
				<Col>
					<LoadingIndicator loading={loading} />
				</Col>
			</Row>
		) : null}
	</>
  );
}

export default BaseList;
