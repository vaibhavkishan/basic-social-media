import './App.css';
import Main from './components/Main';
import { Route, Switch } from 'react-router';
import NavBar from './components/NavBar';
import Users from './components/Users';
import Login from './components/Login';

function App() {
  return (
    <div className="backgroundGray">
      <NavBar />
      <br />
      <main className="Container">
        <Switch>
          <Route path="/users" component={Users} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Main} />

          {/* <Route
              path="/movies"
              render={(props) => <Movies {...props} user={this.state.user} />}
            /> */}
          {/* <Redirect from="/" exact to="/movies" />
            <Redirect to="/notFound" /> */}
        </Switch>
      </main>
    </div>
  );
}

export default App;
