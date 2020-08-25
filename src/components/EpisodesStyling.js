import styled from "styled-components";

export const Table = styled.div`
		display: grid;
		grid-template-columns: 1fr minmax(120px, 240px);
`

export const Row = styled.div`
	padding: 8px 4px;
	border-bottom: 1px solid #ddd;
	:hover {background-color: #f5f5f5;}
	:nth-child(even) {background-color: #f2f2f2;}
`

export const Cell = styled.span`
	padding: 8px 4px;
`