import React, { Component }  from 'react';
import { connect } from 'dva';

class Home extends Component {
  render() {
    return (
      <div className="home-page"> 
      <h1>hello react app</h1>
      </div>
    )
  }
}

export default connect()(Home);

module.exports = Home;