import React from "react";
import produce from "immer";
import styled from "styled-components";

import { useQuery, gql } from '@apollo/client';
import useInfiniteScroll from "react-infinite-scroll-hook";
import { GridHeader, GridBody, HeaderRow, Col } from './GridStyling'

import BaseList from "./BaseList";
import EpisodeLine from "./EpisodeLine";

const GridParent = styled.div`
	border: '1px solid silver';
	border-top-width: 0;
	overflow-y: auto;
	height: 450px;
`
// calc(100vh - 170px);

const GET_EPISODES = gql`
	query episodes($page: Int, $filter: String) {
		episodes(page: $page, filter: { name: $filter }) {
			results {
				id
				name
				episode
				air_date
				characters {
					id
				}
			}
			info {
				next
			}
		}
	}
`;

function EpisodeList({ searchTerm }) {

	const { loading, error, data, fetchMore } = useQuery(GET_EPISODES, { 
		variables: { filter: searchTerm } //  page: 1, 
	});

	const { episodes } = data || {};
	const results = episodes?.results;
	const next = episodes?.info?.next;
	const hasNextPage = !!next;

	if (error) return <p>Error :(</p>;

	console.log("Episodes:", episodes, " loading: ", loading, "hasNextPage: ", hasNextPage)

	function handleLoadMore() {
		fetchMore({
			// This breaks "@apollo/client 3".
			// It doesn't toggle "loading" even if the "notifyOnNetworkStatusChange" is set to "true".
			// query: GET_EPISODES,
			variables: { page: next, filter: searchTerm },
			updateQuery: (prevResult, { fetchMoreResult }) => {
				const newEpisodes = fetchMoreResult?.episodes;
				console.log(newEpisodes?.results)
				const newData = produce(prevResult, (draft) => {
					let { episodes } = draft;
					if (episodes?.results && episodes?.info && newEpisodes?.results) {
						episodes.results.push(...newEpisodes.results);
						episodes.info = {...newEpisodes.info};
					}
				});
				return newData;
			},
		})
	}

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const infiniteRef = useInfiniteScroll({
		loading,
		hasNextPage,
		onLoadMore: handleLoadMore,
		scrollContainer: "parent"
	});

	return (
		<>
		<GridHeader>
			<HeaderRow background="gray">
				<Col size={5}>
					EPISODE
				</Col>
				<Col size={2} collapse="xs">
					CODE
				</Col>
				<Col size={3} collapse="xs">
					AIR DATE
				</Col>
				<Col size={3} justifyContent="center">
					#Characters
				</Col>					
			</HeaderRow>
		</GridHeader>
			
		<GridParent>
			<GridBody ref={infiniteRef}>
				<BaseList
					items={results}
					loading={loading}
					hasNextPage={hasNextPage}
					renderItem={episode => episode.id ? <EpisodeLine key={episode.id} {...episode} /> : null}
				>
					);
				</BaseList>
			</GridBody>
		</GridParent>
		</>
	);
}
export default EpisodeList;
