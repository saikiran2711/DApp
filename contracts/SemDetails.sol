// SPDX-License-Identifier: MIT
pragma solidity >=0.4.0 <0.9.0;
pragma experimental ABIEncoderV2;


contract SemDetails{
  struct  profile{
    string name;
    string email;
    uint256 phone;
  }

  profile  s;
  mapping(address=>semdetails[]) userData;
  mapping(address=>profile) mappedData;

  function addSpecificSem(uint256 semNumber,uint256 preDecimal,uint256 postDecimal) public{
    semdetails memory sem=semdetails(preDecimal,postDecimal,semNumber);
    userData[msg.sender].push(sem);
  }

  
  struct semdetails{
    uint256 montessa;
    uint256 decimal;
    uint256 semNumber;
  }
  function getSemDetails() public view returns(semdetails[] memory){
    return userData[msg.sender];
  }
     
  function setProfile(string memory _name,string memory _email,uint256 _phone) public {
    mappedData[msg.sender]=profile(_name,_email,_phone);
  }
  function getProfile() public view returns(string memory _name,string memory _email,uint256 _phone){
    string memory name=mappedData[msg.sender].name;
    string memory email=mappedData[msg.sender].email;
    uint256 phone =mappedData[msg.sender].phone;
    return(name,email,phone);
     }
}