import styled from "styled-components";

export const Grid = styled.div`
`

export const HeaderRow = styled.div`
	display: flex;
	border-bottom: 1px solid silver;
	align-items: center;
	background:  ${(props) => props.background ? props.background : 'transparent' };
	padding: 5px 10px;
	color: white;
	height: 30px;
`


export const Row = styled.div`
	display: flex;
	border-bottom: 1px solid silver;
	background:  ${(props) => props.background ? props.background : 'transparent' };
	padding: 5px 10px;
`

const media = {
	xs: (styles) => `
		@media only screen and (max-width: 480px) {
			${styles}
		}
	`
}

export const Col = styled.div`
	display: flex;
	justify-content: ${ (props) => props.justifyContent? props.justifyContent : "flex-start" }; 
	flex: ${(props) => props.size };
	${(props) => props.collapse && media[props.collapse](`
		display : none;
	`)}
`


