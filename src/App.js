import React, { Suspense } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/header/header"
import NotFound from './NotFound';
import Loading from './Loading';

const LocationRoute = React.lazy(() => import('./components/location/geodata'))
const VisitRecordRoute = React.lazy(() => import('./components/visitRecord/visitRecord'))
const Home = React.lazy(() => import('./components/home/home'))

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="body-wrapper" id="body-wrapper">
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/location" component={LocationRoute} />
              <Route path="/visitrecord" component={VisitRecordRoute} />
              <Route component={NotFound}></Route>
            </Switch>
          </Suspense>
        </div>
      </div>
    </Router>
  )
};

export default App;