import { Switch, Route } from 'react-router-dom'
import Detail from './containers/Detail';
import Home from './containers/Home';

function App() {
    return (
        <Switch>
          <Route path={"/"} component={Home} exact />
          <Route path={"/:id"} component={Detail} />
        </Switch>
    );
}

export default App;
