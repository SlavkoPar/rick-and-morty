import React, { useState } from 'react';
import styled from "styled-components";
import produce from "immer";

import Search from './Search'
import EpisodeList from './EpisodeList'

import { useQuery, gql } from '@apollo/client';
import InfiniteScrollWrapper from "./InfiniteScrollWrapper"

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

const EpisodesCard = styled.div`
	position: 'relative'
	background-color: gainsboro;
	border-radius: 10px;
	box-shadow: 3px 3px 25px -5px rgba(0,0,0,0.47);
	color: #1A1A1A;
	display: inline-block;
	margin: 20px 15px;
	width: 98%;
	overflow: hidden;
`;


// const NavBar = styled.div`
// 	display: flex;
// 	justify-content: flex-end;
// 	margin: 20px 15px;
// 	width: 90%;
// 	overflow: hidden;
// `;


// const Button = styled.button`
// 	font-size: 1em;
// 	margin: 1em;
// 	padding: 0.25em 1em;
// 	border-width: 1px;
// 	border-radius: 3px;
// `;


export default function Episodes() {
	const [searchTerm, setSearchTerm] = useState("");

	//console.log ('zovem bre filter, page:', page, ' searchTerm:', searchTerm)
	const { loading, error, data, fetchMore } = useQuery(GET_EPISODES, { 
		variables: { page: 1, filter: searchTerm } 
	});
	
	if (error) return <p>Error :(</p>;

	const { episodes } = data || {};

	const results = episodes?.results;
	const next = episodes?.info?.next;
	const hasNextPage = !!next;
	
	return (
		<EpisodesCard>

			<div style={{padding:'5px 10px', width: '20%'}}>
				<Search searchTerm={searchTerm} onSearch={(val) => setSearchTerm(val)}></Search>
			</div>

			<table>
				<thead>
					<tr>
						<th>Episode</th>
						<th style={{ textAlign: 'center', width: '130px'}}>#Characters</th>
					</tr>
				</thead>		
				<InfiniteScrollWrapper
					hasNextPage={hasNextPage}
					loading={loading}
					onLoadMore={() =>
						fetchMore({
							// This breaks "@apollo/client 3".
							// It doesn't toggle "loading" even if the "notifyOnNetworkStatusChange" is set to "true".
							// query: GET_EPISODES,
							variables: { page: next, filter: searchTerm },
							updateQuery: (prevResult, { fetchMoreResult }) => {
								const newEpisodes = fetchMoreResult?.episodes;
								const newData = produce(prevResult, (draft) => {
									let { episodes } = draft;
									if (episodes?.results && episodes?.info && newEpisodes?.results) {
										episodes.results.push(...newEpisodes.results);
										episodes.info = newEpisodes.info;
									}
								});
								return newData;
							},
						})
					}
				>
					<EpisodeList episodes={results} loading={loading || hasNextPage} />
				</InfiniteScrollWrapper>
			</table>
		</EpisodesCard>
	)

}

