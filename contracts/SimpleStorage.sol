// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;

contract SimpleStorage {
  uint  storedData;
  address addr;
  mapping(address => uint) mapped;
  function set(uint x) public {
    storedData = x;
    mapped[addr]=storedData;
  }

  function get() public view returns (uint) {
    return storedData;
  }
}

// contract SemDetails{
//   struct profile{
//     string name;
//     string email;
//     uint256 phone;
//   }
//   struct semdetails{
//     fixed gpa;
//   }
//      profile s;
// }
