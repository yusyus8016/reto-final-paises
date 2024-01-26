import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import { ApolloProvider,ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient ({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache ()
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);


