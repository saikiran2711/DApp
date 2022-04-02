// SPDX-License-Identifier: MIT
pragma solidity >=0.4.0 <0.9.0;
pragma experimental ABIEncoderV2;
contract SemDetails{
  struct  Profile{
    string name;
    string email;
    uint256 rollNo;
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


contract Semester{


  mapping(address=> mapping(string=>int256)) public sem1 ;
   mapping(address=> mapping(string=>int256)) public sem2;
   mapping(address=> mapping(string=>int256)) public sem3;
  // mapping(uint256 => string) public gradeMapping;
  string[] sem1Subs=["Mathematics-1","Physics","Basics of Electrical Engineering","Physics Lab","Basics of Electrical Engineering","Engineering Graphics & Design"];
  function sem1temp() public {
    
  }
  function Sem1initializer () public {
    // sem1[msg.sender]["Mathematics-1"]=-2;
    // sem1[msg.sender]["Physics"]=-2;
    // sem1[msg.sender]["Basics of Electrical Engineering"]=-2;
    // sem1[msg.sender]["Physics Lab"]=-2;
    // sem1[msg.sender]["Basics of Electrical Engineering Lab"]=-2;
    // sem1[msg.sender]["Engineering Graphics & Design"]=-2;
    for(uint256 i=0;i<sem1Subs.length;i+=1){
      sem1[msg.sender][sem1Subs[i]]=-2;
    }
  }
  function getSemSubs() public returns(string[] memory){
    return sem1Subs;
  }
  function getSem1() public returns(int256[] memory) {
    int256[] memory scores = new int256[](sem1Subs.length);
    // string[] memory temp;
    for(uint256 i=0;i<sem1Subs.length;i+=1){
      scores[i]=sem1[msg.sender][sem1Subs[i]];
      // temp[i]=sem1Subs[i]; 
    }
    return(scores);
  }

  function Sem2initializer() public{
    sem2[msg.sender]["Mathematics-2"]=-2;
    sem2[msg.sender]["Chemistry"]=23;
    sem2[msg.sender]["Programming for Problem Solving"]=-2;
    sem2[msg.sender]["Chemistry Lab"]=-2;
    sem2[msg.sender]["Programming for Problem Solving Lab"]=-2;
    sem2[msg.sender]["WorkShop-Manufacture Lab"]=-2;
  }



  //IMP function to manage subjects
  // 0 -> Deleted Subject
  // -1 -> Failed subject
  // -2 -> Not initialized...

  //Gets the grade by giving points..
  
  function getGrade(uint256 subjectScore) public pure returns(string memory){
    if(subjectScore <=10) return "S";
    else if(subjectScore<=9) return "A";
    else if(subjectScore<=8) return "B";
    else if(subjectScore<=7) return "C";
    else if(subjectScore<=6) return "D";
    else if(subjectScore<=5) return "E";
    else return "F";
  }
  
  //Testing function
  function testDelete() public{
    delete sem2[msg.sender]["Chemistry"];
  }

  function Sem3initializer() public{
    sem3[msg.sender]["Discrete Mathematics"]=-2;
    sem3[msg.sender]["Environmental Science"]=-2;
    sem3[msg.sender]["Essence of Indian Traditional Knowledge"]=-2;
    sem3[msg.sender]["Programming Languages"]=-2;
    sem3[msg.sender]["Operations Research"]=-2;
    sem3[msg.sender]["Advanced Computer Skills Lab"]=-2;
    sem3[msg.sender]["Biology for Engineers"]=-2;
    sem3[msg.sender]["Digital Electronics"]=-2;
    sem3[msg.sender]["Basic Electronics"]=-2;
    sem3[msg.sender]["Basic Electronics Lab"]=-2;
    sem3[msg.sender]["Data Structures and Algorithms Lab"]=-2;
    sem3[msg.sender]["Data Structures and Algorithms"]=-2;
  }
}