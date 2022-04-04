// SPDX-License-Identifier: MIT
pragma solidity >=0.4.0 <0.9.0;
pragma experimental ABIEncoderV2;
contract Semester{


  mapping(address=> mapping(string=>int256)) public sem1 ;
   mapping(address=> mapping(string=>int256)) public sem2;
   mapping(address=> mapping(string=>int256)) public sem3;
  // mapping(uint256 => string) public gradeMapping;
  string[] sem1Subs=["Mathematics-1","Physics","Basics of Electrical Engineering","Physics Lab","Basics of Electrical Engineering Lab","Engineering Graphics & Design"];
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

  
  function getSemSubs() public view returns(string[] memory){
    return sem1Subs;
  }
  function getSem1() public view returns(int256[] memory) {
    int256[] memory scores = new int256[](sem1Subs.length);
    // string[] memory temp;
    for(uint256 i=0;i<sem1Subs.length;i+=1){
      scores[i]=sem1[msg.sender][sem1Subs[i]];
      // temp[i]=sem1Subs[i]; 
    }
    return(scores);
  }
  
  function setSem1(int256[] memory arr) public {
      for(uint256 i=0;i<sem1Subs.length;i++)
      sem1[msg.sender][sem1Subs[i]]=arr[i];
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