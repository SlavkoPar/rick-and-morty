import React, { useState } from 'react';
import styled from "styled-components";

import Search from './Search'
import EpisodeList from './EpisodeList'

const EpisodesCard = styled.div`
	// position: 'relative';
	background-color: gainsboro;
	border-radius: 10px;
	box-shadow: 3px 3px 25px -5px rgba(0,0,0,0.47);
	color: #1A1A1A;
	display: inline-block;
	margin: 20px 15px;
	width: 98%;
	overflow: hidden;
`;

export default function Episodes() {
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<EpisodesCard>

			<div style={{padding:'5px 10px', width: '20%'}}>
				<Search searchTerm={searchTerm} onSearch={(val) => setSearchTerm(val)}></Search>
			</div>
			
			<EpisodeList searchTerm={searchTerm} />	
			{/* <InfiniteList scrollContainer="parent" /> */}

		</EpisodesCard>
	)

}

