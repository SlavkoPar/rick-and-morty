import { useRef, useState, useEffect } from 'react';


// Hook
export function useHover()  {
	const [hoverProps, setValue] = useState({ isHovered: false });
 
	const divRef = useRef(null);
 
	const handleMouseOver = () => setValue({ isHovered: true });
	const handleMouseOut = () => setValue({ isHovered: false });
 
	useEffect(
	  () => {
		 const node = divRef.current;
		 if (node) {
			node.addEventListener('mouseenter', () => handleMouseOver());
			node.addEventListener('mouseleave', () => handleMouseOut());
			return () => {
				node.removeEventListener('mouseenter', () => handleMouseOver());
				node.removeEventListener('mouseleave', () => handleMouseOut());
			};
		 }
	  }, [divRef.current] // Recall only if ref changes
	);
 
	return [divRef, hoverProps];
}

