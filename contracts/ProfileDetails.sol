// SPDX-License-Identifier: MIT
pragma solidity >=0.4.0 <0.9.0;
pragma experimental ABIEncoderV2;
contract ProfileDetails{
  struct  Profile{
    string name;
    string email;
    string rollNo;
    uint256 phone;
    string addrss;
    uint256 aadharNumber;
    string bloodgrp;
  }
  struct Address{
    string country;
    string state;
    uint256 pincode;
    string city;
  }
  struct Relation{
    string fatherName;
    string motherName;
  }

  mapping(address=>Profile) ProfileDetails;
  mapping(address=>Address) AddressDetails;
  mapping(address=>Relation) RelationDetails;

  function getProfile()public view returns(Profile memory, Relation memory, Address memory){
    Profile memory temp=ProfileDetails[msg.sender];
    Address memory temp1=AddressDetails[msg.sender];
    Relation memory temp2=RelationDetails[msg.sender];
    return(
     temp,temp2,temp1
    );
  }

  function setProfile(Profile memory t3,Relation memory t1,Address memory t2) public{
    RelationDetails[msg.sender]=t1;
    AddressDetails[msg.sender]=t2;
    ProfileDetails[msg.sender]=t3;
  }


  // function setProfile(string memory _name,string memory _email,uint256 _rollNo,uint256 _phone,string memory _addrss, string memory _fatherName, string memory _motherName,uint256 _aadharNumber, string memory _country,string memory _state,string memory _city,uint256 _pincode,string memory _bloodgrp) public {
  //   ProfileDetails[msg.sender]=Profile({name:_name,email:_email,rollNo:_rollNo,phone:_phone,addrss:_addrss,aadharNumber:_aadharNumber,bloodgrp:_bloodgrp});
  //   AddressDetails[msg.sender]=Address({country:_country,state:_state,city:_city,pincode:_pincode});
  //   RelationDetails[msg.sender]=Relation({fatherName:_fatherName,motherName:_motherName});
  // }


  // string memory,string memory,uint256,uint256,string memory,string memory, string memory,uint256,string memory,string memory,string memory,uint256,string memory
//   function getProfile() 
//   string[] sem1=["MATHEMATICS-1","PHYSICS",""];
//   mapping(address=>Subject[]) userData;
//   mapping(address=>profile) mappedData;

//   function addSpecificSem(uint256 semNumber,uint256 preDecimal,uint256 postDecimal) public{
//     // semdetails memory sem=semdetails(preDecimal,postDecimal,semNumber);
//     // userData[msg.sender].push(sem);
//   }
  // struct Sem1{
  //     mapping(string=>uint256) subjects;
  // }
  // Sem1 s;

  //  temp.name,
  //     temp.email,
  //     temp.rollNo,
  //     temp.phone,
  //     temp.addrss,
  //     temp2.fatherName,
  //     temp2.motherName,
  //     temp.aadharNumber,
  //     temp1.country,
  //     temp1.state,
  //     temp1.city,
  //     temp1.pincode,
  //     temp.bloodgrp

//   s.subjects["Mathematics"]

//   struct Subject{
//     string name;
//     string subjectCode;
//     uint256 grade;
//   }


// struct semester1{
//     uint256 M1;
//     uint256 PHYSICS;
//     uint256 BASIC_ELECTRICAL_ENGINEERING;
// }



// mapping(uint256=>Subject[]) Semester;
// string[] sem1=["MATHEMATICS-1","PHYSICS","BASIC ELECTRICAL ENGINEERING","PHYSICS LAB","BASIC ELECTRICAL ENGINEERING LAB","ENGINEERING GRAPHICS & DESIGN"];
// string[] sem2=["ENGLISH","MATHEMATICS-2","CHEMISTRY","PROGRAMMING FOR PROBLEM SOLVING","ENGLISH LAB","CHEMISTRY LAB","PROGRAMMING FOR PROBLEM SOLVING LAB","WORKSHOP-MANUFACTURE PROCESS LAB"];

// function setSemester(string subjname,string subcode,uint256 grade,uint256 semNumber) public {
//     Subject memory temp=Subject(subjname,subcode,grade);
//     Semester[semNumber].push(temp);
// }

// function setAllSemester(string[] subsname, string[] subscode, uint256[] grades,uint256 semNumber)public{
//     for(uint256 i=0;i<subsname.length;i+=1){
//         setSemester(subsname[i],subscode[i],grades[i],semNumber);
//     }
// }

// function getSemester(uint256 semNumber) public view returns(Subject[]){
//     return Semester[semNumber];
// }





//   struct Semester{
//     Subject[] sub;
//   }

//   mapping(uint256=>Subject[]) Semester;
//   mapping(uint256=>Subject) SubjectsInSemester;
//   Subject  subj=Subject("A","PC",1);
//   Semester[0].push(subj)
  // function setProfile(string memory _name,string memory _email,uint256 _phone) public {
  //   mappedData[msg.sender]=profile(_name,_email,_phone);

  // }
  // function getProfile() public view returns(string memory _name,string memory _email,uint256 _phone){
  //   string memory name=mappedData[msg.sender].name;
  //   string memory email=mappedData[msg.sender].email;
  //   uint256 phone =mappedData[msg.sender].phone;
  //   return(name,email,phone);
  //    }
}


