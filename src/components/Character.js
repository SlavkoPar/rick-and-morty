import React from 'react';

export default function Character({id, name, episode, image}) {
	return <div key={id} className="item">
		<img alt="Actor" style={{ width:120, height: 120}} src={image}></img>
		<div>{name}</div>
		<div>Episodes: {episode.length}</div> 
	</div>
} 