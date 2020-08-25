import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import BackToTop from './components/BackToTop'

import { 
	ApolloProvider, 
	ApolloClient, 
	InMemoryCache
} from '@apollo/client';

import { relayStylePagination } from "@apollo/client/utilities";

import Episodes from './components/Episodes'
import Episode from './components/Episode'

const client = new ApolloClient({
	uri: "https://rickandmortyapi.com/graphql",
	cache: new InMemoryCache({
	  typePolicies: {
		 Query: {
			fields: {
			  // Reusable helper function to generate a field
			  // policy for the Query.search field, keyed by
			  // search query:
			  search: relayStylePagination(["query"]),
			},
		 },
	  },
	}),
 });




function App() {
  return (
	<Router>
		<ApolloProvider client={client}>
			<>
			<div>
				{/* <nav><ul><li><Link to="/">Home</Link></li></ul></nav> */}
				<Switch>
					<Route path="/episode/:id">
						<Episode />
					</Route>
					<Route path="/">
						<Episodes />
					</Route>
				</Switch>
			</div>
			<BackToTop />
			</>
	 	</ApolloProvider>
	 </Router>
  );
}

export default App;
