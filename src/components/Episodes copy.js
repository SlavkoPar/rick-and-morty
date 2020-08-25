import React, { useState } from 'react';
import styled from "styled-components";

import Search from './Search'
import EpisodeLine from './EpisodeLine'

import { useQuery, gql } from '@apollo/client';

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


const NavBar = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 20px 15px;
	width: 90%;
	overflow: hidden;
`;


const Button = styled.button`
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border-width: 1px;
	border-radius: 3px;
`;


let pg = 1;
export default function Episodes() {
	const [page, setPage] = useState(1);
	const [searchTerm, setSearchTerm] = useState("");

	//console.log ('zovem bre filter, page:', page, ' searchTerm:', searchTerm)
	const { loading, error, data, fetchMore } = useQuery(GET_EPISODES, { 
		variables: { page: page, filter: searchTerm } 
	});
	if (data)
		console.log('data', data)
	
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	const onFetchMore = () => {
		pg++;
		fetchMore({
			variables: {
				page: pg,
				filter: searchTerm
			},
      	fetchPolicy: "cache-and-network",
			updateQuery: (previousResult, { fetchMoreResult }) => {
				if (!fetchMoreResult) 
					return previousResult;
				return {
					episodes: {
						results: [
					  		//...previousResult.episodes.results,
					  		...fetchMoreResult.episodes.results,
						],
						info: {
							next: fetchMoreResult.episodes.info.next
						}
					}
			 	}
			}
		})
	}

	const results = (data && data.episodes.results) || [];
	const hasMore = data && data.episodes.info.next;
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
				<tbody>
					{
						results.map(episode => <EpisodeLine key={episode.id} {...episode} />)
					}
				</tbody>
			</table>
		
			<NavBar>
				{results && hasMore &&
					<Button onClick={onFetchMore}> 
						Show More Episodes
					</Button>
				}
				{results && pg > 1 &&
					<Button onClick={() => { pg=1; setPage(0); }}> 
						Top
					</Button>
				}
			</NavBar>

		</EpisodesCard>
	)

}

