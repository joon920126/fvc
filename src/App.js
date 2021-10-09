import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/login";
import Main from "./pages/main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path='/main' component={Main} />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;