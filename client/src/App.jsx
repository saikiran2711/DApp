import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SemDetails.json";
import getWeb3 from "./getWeb3";
import "./App.css";
import SignUpFormBox from "./SignUp";
class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      console.log("Network id is : ", networkId);
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      console.log("Address id is : ", deployedNetwork);
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address
      );
      console.log(instance);
      let result=await instance.methods.setProfile("abc","abc@zxyc.com",22222222222).send({from:accounts[7]});
      console.log(result);
      // instance.methods.getProfile().call().then((res,err)=>{
      //   console.log("RES "+res);
      // })
      // let resultSem=await instance.methods.getSemDetails().call({from:accounts[7]});
      // console.log("Res sem: "+resultSem);
      // let resu=await instance.methods.setProfile("abc","abc@zxyc.com",22222222222).call({from:accounts[7]});
      // console.log("resu : "+resu);
      // resu=await instance.methods.getProfile().call({from:accounts[7]});
      // console.log("Get RES "+resu);
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };
  // runExample = async () => {
  //   const { accounts, contract } = this.state;

  //   // Stores a given value, 5 by default.
  //   await contract.methods.set(10).send({ from: accounts[1] });

  //   // Get the value from the contract to prove it worked.
  //   const response = await contract.methods.get().call();

  //   // Update state with the result.
  //   this.setState({ storageValue: response });
  // };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <SignUpFormBox />
      // <div className="App">
      //   <h1>Good to Go!</h1>
      //   <p>Your Truffle Box is installed and ready.</p>
      //   <h2>Smart Contract Example</h2>
      //   <p>
      //     If your contracts compiled and migrated successfully, below will show
      //     a stored value of 5 (by default).
      //   </p>
      //   <p>
      //     Try changing the value stored on <strong>line 42</strong> of App.js.
      //   </p>
      //   <div>The stored value is: {this.state.storageValue}</div>
      // </div>
    );
  }
}

export default App;
