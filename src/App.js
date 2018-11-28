import React, { Component } from 'react';
import Web3 from 'web3';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isConnected: false, peers: 0, version: ''};
    this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    this.contractAddress = '0xFE290088Ef9d7953bf288b1393bff747150b7A94';
  }
  componentWillMount() {
    if(this.web3 && this.web3.isConnected()) {
      this.setState({isConnected: true});
      if(this.web3.net.listening) {
        this.setState({peers: this.web3.net.peerCount});
      }
      this.setState({version: this.web3.version.node})
    }
  }
  render() {
    return (
      <div>
        <h1>dApp Basic Example</h1>
        <h2 id="balance">Current Balance = <span id="currentBalance"></span></h2>
        <button id="button" onclick="javascript:getBalance()">Get New Balance</button>
        <hr/>
        <br/>
        <label for="newBalance" class="col-lg-2 control-label"><strong>New Balance</strong></label>
        <input id="newBalance" type="number" value="300">
        </input>
        <button id="button" onclick="javascript:setBalance()">Set New Balance</button>
        <br/>
        <label><strong>Status</strong></label>
        <h4 id="status"></h4>
        <br>
        </br>
        <h2>Is connected?:</h2><br/> {this.state.isConnected?'Connected to local node':'Not Connected'}
        <br/>
        <br/>
        <h2>The number of peers:</h2><br/> {this.state.peers}
        <br/>
        <br/>
        <h2>Node info:</h2><br/> {this.state.version}
      </div>
    );
  }
  
}


export default App;