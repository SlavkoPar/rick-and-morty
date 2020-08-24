import React, { useState } from 'react';
import {debounce} from 'lodash';


export default function Search({searchTerm, onSearch}) {

	const [term, setTerm] = useState(searchTerm);

	const delayed = debounce((t) => onSearch(t), 1000)

	const handleChange = event => {
		setTerm(event.target.value);
		delayed(event.target.value)
	}

	return (
		<input
      	type="text"
			placeholder="Search"
			value={term}		  
			onChange={handleChange}
      />
	)
}

