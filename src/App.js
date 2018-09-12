import React, { Component } from 'react';
import './App.css';
import { Button, NavBar, Icon } from 'antd-mobile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          hello world!!!
        </p>
        <Button type="primary">Button</Button>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
          ]}
        >NavBar</NavBar>

      </div>
    );
  }
}

export default App;
