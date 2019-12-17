import React from 'react';
import './app.css';
import Header from '../header';
import {Route, Switch} from 'react-router-dom';
import {FilmsPage, CharactersPage, PlanetsPage, StarshipsPage, HomePage} from '../pages'

function App() {

  return (
    <main className="app">
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/films" component={FilmsPage} />
        <Route path="/characters" component={CharactersPage} />
        <Route path="/starships/:page/:search?" 
              render={({match})=>{
                // console.log('fromApp match=', match)
                // console.log('fromApp location=', location)
                const {page, search} = match.params;
              return <StarshipsPage page={page} search={search}/>}} />
        <Route path="/planets" component={PlanetsPage} />
        <Route render={() => <h2>Page not found</h2>} /> 
      </Switch>
    </main>

  );
}
export default App;
