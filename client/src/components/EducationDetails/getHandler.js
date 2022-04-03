// import getWeb3 from "../../web3";
import Web3 from "web3";
import SemDetails from "../../contracts/Semester.json";
export let acc;
export async function connectionHandler() {
  console.log("in function");
  const provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");
  const web3 = new Web3(provider);
  //   const web3 = await getWeb3();
  const networkId = await web3.eth.net.getId();
  const deployedNetwork = SemDetails.networks[networkId];
  let instance = new web3.eth.Contract(
    SemDetails.abi,
    deployedNetwork && deployedNetwork.address
  );
  console.log("Got instance!!!!!");
  acc = await web3.eth.getAccounts();
  acc = acc[0];
  console.log(acc);
  // return instance;
}

export const getSemDetails = async (accountNo) => {
  connectionHandler().then(async (res, err) => {
    if (res) {
      let result = await res.methods.getSem1().call({ from: accountNo });
      console.log(result);
      //   return result;
    } else {
      console.log(err);
    }
  });
};
export const getSemSubjects = async (accountNo) => {
  connectionHandler().then(async (res, err) => {
    if (res) {
      let result = await res.methods.getSemSubs().call({ from: accountNo });
      console.log(result);
      return result;
    } else {
      console.log(err);
    }
  });
};

export const setSemDetails = async (accountNo, arr) => {
  //accountNo:'string', arr:Array of scores (size == subject's size)
  connectionHandler().then(async (re, er) => {
    if (re) {
      let result = await re.methods
        .setSem1(arr)
        .send({ from: accountNo, gas: 300000 });
      return result;
    } else {
      console.log(er);
    }
  });
};
