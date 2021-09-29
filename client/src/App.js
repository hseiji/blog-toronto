import NavbarComp from "./components/navbar/NavbarComp";
import Home from "./components/pages/home/Home";
import Post from "./components/pages/post/Post";
import Edit from "./components/pages/edit/Edit";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
      <NavbarComp/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/edit">
          <Edit/>
        </Route>
        <Route path="/posts/:postId">
          <Post/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
