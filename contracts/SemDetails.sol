// SPDX-License-Identifier: MIT
pragma solidity >=0.4.0 <0.9.0;
contract SemDetails{
  struct  profile{
    string name;
    string email;
    uint256 phone;
  }

  semdetails[8] totalSems;
  semdetails stt=semdetails(2,9);
  mapping(address=>profile) mappedData;
  struct semdetails{
    uint256 montessa;
    uint256 decimal;
  }
     profile  s;
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