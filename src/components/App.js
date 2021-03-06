import React from "react";
// Always install react-router-dom for dom based web apps
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history";

// We never use <a /> link tags in React Apps. Clicking a
// link tag browser makes a request to url /pagetwo and
// development server responds with index.html file.
// Browser receives index.html file, dumps old HTML file
// it was showing (including all of our React/Redux state)
// data!
// index.html file lists our JS files in script tags,
// browser downloads and executes these scripts.
// Our app starts up again but without our React/Redux state
// data we just had before.

// For React apps we use <Link /> tags from react-router-dom
// When clicking a <Link /> tag React Router prevents
// browser from navigation to the new page and fetching
// new index.html file!
// URL still changes. React Router 'History' component sees
// updated URL, takes URL and sends it to BrowserRouter.
// BrowserRouter communicates the URL to Route components.
// Route components re-render to show new set of components.

// Term Single Page App (SPA) comes from this. User loads
// a single html file and navigate around it. User navigates
// inside a single html document, we are just hiding and
// showing different components based on the url. We are
// tricking the user into thinking they are going to
// different pages, when we are just showing and hiding
// different components.

const App = () => {
  return (
    <div className="ui container">
      {/* We pass in our own history object */}
      <Router history={history}>
        <div>
          <Header />
          {/* Route checks path as URL.contains(path) so eg.
      /streams/new will also show our root '/' component
      StreamList as URL contains '/'. To prevent this
      we specify exact. Colon : is the character that
      notifies that this is a variable (or a wildcard value)and not a fixed url. 
      Switch is only going to show one Route at a time. First Route path that gets matched is only going to show and
      no other potential matching routes*/}
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
