import React from "react";
import styled from "styled-components";

function handleClick() {
  window.scroll({
    top: 0,
    left: 0,
	 behavior: "smooth",
  });
}

const Fab = styled.button `
	position: "fixed";
	bottom: 20;
	right: 20;
	zIndex: 1999;
	border-width: 1px;
	border-radius: 15px;
	width: 30px;
	height: 30px;
`
function BackToTop() {
  return (
	<Fab onClick={handleClick}>
		<span style ={{fontSize: '25px'}}>^</span>
	</Fab>
  );
}

export default BackToTop;
