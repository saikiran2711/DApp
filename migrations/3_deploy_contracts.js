var SemDetails = artifacts.require("./SemDetails.sol");

module.exports = function(deployer) {
  deployer.deploy(SemDetails);
};