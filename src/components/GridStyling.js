import styled from "styled-components";

export const Grid = styled.div`
`

export const HeaderRow = styled.div`
	display: flex;
	border-bottom: 1px solid silver;
	align-items: center;
	background:  ${(props) => props.background ?? 'transparent' };
	padding: 5px 10px;
	color: white;
	height: 30px;
`


export const Row = styled.div`
	display: flex;
	border-bottom: 1px solid silver;
	background:  ${(props) => props.background ?? 'transparent' };
	padding: 5px 10px;
	:hover { background-color: #f5f5f5; }
	:nth-child(even) { background-color: #f2f2f2; }
`

const media = {
	xs: (styles) => `
		@media only screen and (max-width: 580px) {
			${styles}
		}
	`
}

export const Col = styled.div`
	display: flex;
	justify-content: ${ (props) => props.justifyContent ?? "flex-start" }; 
	flex: ${(props) => props.size };
	${(props) => props.collapse && media[props.collapse](`
		display : none;
	`)}
`


