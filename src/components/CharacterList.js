import React from 'react';
import Character from './Character'
import'./CharacterList.css'


export default function CharacterList({characters}) {
	return (
		<div className="container">
			{characters.map(character => <Character key={character.id} {...character} />)}
		</div>
	)
}

