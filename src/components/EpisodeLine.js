import React from 'react';
import { useHover } from './useHover'
import { Link  } from 'react-router-dom'
import { Row, Col } from './GridStyling'

export default function EpisodeLine({id, name, air_date, episode, characters}) {

	const [hoverRef, hoverProps] = useHover();

	return (
		<Row>
			<Col size={5}>
				<Link to={`/episode/${id}`}>{id} {name}</Link>
			</Col>
			<Col size={2} collapse="xs">
				{episode}
			</Col>
			<Col size={3} collapse="xs">
				{air_date}
			</Col>
			<Col size={3} justifyContent="center">
				<div ref={hoverRef} style={{position: 'relative'}}>
					#{characters.length} 
					{hoverProps.isHovered &&
						<button className="show-more" title="Show characters" onClick={() => {}}>
							Show
						</button>}
				</div>
			</Col>
		</Row>		
	)
}