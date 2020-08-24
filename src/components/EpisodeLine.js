import React from 'react';
import { useHover } from './useHover'
import { Link  } from 'react-router-dom'


export default function EpisodeLine({id, name, air_date, episode, characters}) {

	const [hoverRef, hoverProps] = useHover();

	return (
		<tr>
			<td>
				<Link to={`/episode/${id}`}>{name}</Link>
				<div>
					{episode},  {air_date}
				</div>
			</td>
			<td style={{textAlign: 'center'}}>
				<div ref={hoverRef} style={{position: 'relative'}}>
					#{characters.length} 
					{hoverProps.isHovered &&
						<button className="show-more" title="Edit" onClick={() => {}}>
							Show
						</button>}
				</div>
			</td>
		</tr>		
	)
}