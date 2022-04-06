import { RedoTwoTone } from "@mui/icons-material";
import Web3 from "web3";
import SemDetails from "../../contracts/SEMT.json";
export let acc;
export async function connectionHandler() {
  console.log("in function");
  const provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");
  const web3 = new Web3(provider);

  const networkId = await web3.eth.net.getId();
  const deployedNetwork = SemDetails.networks[networkId];
  let instance = new web3.eth.Contract(
    SemDetails.abi,
    deployedNetwork && deployedNetwork.address
  );

  return instance;
}
export const semInitializer = async (accountNo) => {
  let instance = await connectionHandler();
  let result = await instance.methods
    .seminitializer()
    .send({ from: accountNo, gas: 5000000 });
  console.log(result);
};
export const getSemDetails = async (semNumber, accountNo) => {
  console.log("Sem Number : ", semNumber);
  let instance = await connectionHandler();
  let result = await instance.methods
    .getsem(semNumber)
    .call({ from: accountNo });
  console.log(result);
  return result;
  // connectionHandler().then(async (res, err) => {
  //   if (res) {
  //     let result = await res.methods.getSem1().call({ from: accountNo });
  //     console.log(result);
  //     //   return result;
  //   } else {
  //     console.log(err);
  //   }
  // });
};
export const getSemSubjects = async (semNumber, accountNo) => {
  let instance = await connectionHandler();
  let result = await instance.methods
    .getSemSubs(semNumber)
    .call({ from: accountNo });
  //   connectionHandler().then(async (res, err) => {
  //        result = await res.methods.getSemSubs().call({ from: accountNo });
  //     //   console.log(result);
  //     //   return result;
  //   });
  return result;
};

export const setSemDetails = async (semNumber, accountNo, arr) => {
  //accountNo:'string', arr:Array of scores (size == subject's size)
  let instance = await connectionHandler();
  console.log(arr, "ARRR");
  console.log(semNumber, "seEM");
  console.log(accountNo, "ACCC");
  let result = await instance.methods
    .setsem(arr, semNumber)
    .send({ from: accountNo, gas: 300000 });
  console.log(result);
  return result;
};
