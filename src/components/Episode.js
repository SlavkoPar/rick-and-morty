import React from 'react';
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import CharacterList from './CharacterList'


import { useQuery, gql } from '@apollo/client';

const EpisodeCard = styled.div`
	position: 'relative'
	background-color: gainsboro;
	border-radius: 10px;
	box-shadow: 3px 3px 25px -5px rgba(0,0,0,0.47);
	color: #1A1A1A;
	display: inline-block;
	margin: 20px 15px;
	mmmax-width: 300px;
	overflow: hidden;
`;

const EpisodeName = styled.div`
  font-size: 1.66rem;
`;

const EpisodeData = styled.div`
  padding: 0 15px;
`;

const GET_EPISODE = gql`
	query episode($id: ID!) {
		episode(id: $id) {
			id
			name
			air_date
			episode
			 created
			characters {
			  id
			  name
			  status
			  species
			  gender
			  location {
				 name
			  }
			  image
			  created
			  episode {
				  id
			  }
		 }
	
		}
	}
`;

export default function Episode() {
	let { id } = useParams();

	const { loading, error, data } = useQuery(GET_EPISODE, { 
		variables: { id } 
	});

	if (data)
		console.log('data', data)
	
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	const { name, air_date,	episode,	characters} = data.episode;

	return (
		<EpisodeCard>

			<EpisodeData>
				<EpisodeName>{name}</EpisodeName>
				<div>{episode}</div>
				<div>AIR DATE: {air_date}</div>
			</EpisodeData>

			<h4 style={{padding: '0px 15px'}}>Characters</h4>
			<CharacterList characters={characters} />
			<div style={{ position: 'absolute', right: '30px', top: '30px'}}>
				<Link to={`/`}>Back to Episodes</Link>
			</div>
  		</EpisodeCard>
	)
}