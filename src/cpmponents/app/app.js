import React from 'react';
import './app.css';
import Header from '../header';
import {Route, Switch} from 'react-router-dom';
import {FilmsPage, CharactersPage, PlanetsPage} from '../pages'

function App() {

  return (
    <main className="app">
      <Header />
      <Switch>
        <Route path="/" render={() => <h2>Welcome to StarDB</h2>} exact/>
        <Route path="/films" component={FilmsPage} />
        <Route path="/characters" component={CharactersPage} />
        {/* <Route path="/characters/:page?" component={CharactersPage} /> */}
        {/* <Route path="/characters/:page?" 
              render={({match})=>{
                const {page} = match.params;
                console.dir(`fromApp page=${page}`)
              return <CharactersPage page={page}/>}} /> */}
        <Route path="/planets" component={PlanetsPage} />
        <Route render={() => <h2>Page not found</h2>} /> 
      </Switch>
    </main>

  );
}
export default App;
