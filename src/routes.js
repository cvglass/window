const React = require('react');
// const reactRouter = require('react-router');
const Route = require('react-router').Route;

//components
const Home = require('./components/home');

class routes extends React.Component {
  render() {
    return(
      <Route path="/" component={Home} />
    )
  }
}
