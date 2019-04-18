import React, { Component } from 'react';

class Game extends React.Component {
  render() {
    return (
      <div>
        Here is a function
      </div>
    );
  }
}      
      
class HomePage extends Component {
  render() {
    return (
      <div>
        Home page
        <Game />
      </div>
    )
  }
}
export default HomePage;
