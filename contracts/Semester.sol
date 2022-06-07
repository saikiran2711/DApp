// SPDX-License-Identifier: MIT
pragma solidity >=0.4.0 <0.9.0;
pragma experimental ABIEncoderV2;

contract Semester{


   mapping(address=> mapping(uint256=> mapping(string=>int256))) public sem ;
   mapping(uint256=>string[]) public subjects;




string[] sem1Subs=["Mathematics-1","Physics","Basics of Electrical Engineering","Physics Lab","Basics of Electrical Engineering Lab","Engineering Graphics & Design"];

string[] sem2Subs=["Mathematics-2","Chemistry","Programming for Problem Solving","Chemistry Lab","Programming for Problem Solving Lab","WorkShop-Manufacture Lab"];

string[] sem3Subs = ["Discrete Mathematics","Environmental Science","Essence of Indian Traditional Knowledge","Programming Languages","Operations Research","Advanced Computer Skills Lab","Biology for Engineers","Digital Electronics","Basic Electronics","Basic Electronics Lab","Data Structures and Algorithms","Data Structures and Algorithms Lab"];

string[] sem4Subs = ["Computer Organization",
			"Object Oriented Programming Using Java",
			"Database Mangement Systems",
			"OOP Using Java Lab",
			"Effective Tech.Comm in English",
			"Mathematics-3",
			"Indian Constitution",
			"Signals and Systems",
			"Computer Organization Lab",
			"Database Management Systems Lab",
			"Finance and Accounting"];

string[] sem5Subs = ["Operating Systems","Software Engineering","Artificial Intelligence","Web and Internet Technologies","Automata Languages and Computation","Blockchain Technologies","Software Engineering Lab","Operating Systems Lab","Mini Project Lab"];
string[] sem6Subs = ["Compiler Design","Computer Networks","Design and Analysis of Algorithms","Internet of Things","Cloud Computing","Disaster Mitigation"];
string[] sem7Subs = ["Information Security","Data science using R programming","Distributed Systems","Enterpreneurship"];
string[] sem8Subs = ["Mobile Computing","Road Safety Engineering"];
  function seminitializer()public  {
      subjects[0]=sem1Subs;
      subjects[1]=sem2Subs;
      subjects[2]=sem3Subs;
      subjects[3]=sem4Subs;
      subjects[4]=sem5Subs;
      subjects[5]=sem6Subs;
      subjects[6]=sem7Subs;
      subjects[7]=sem8Subs;
      for(uint256 i=0;i<8;i++){
        for(uint256 j=0;j<subjects[i].length;j++){
          sem[msg.sender][i+1][subjects[i][j]]=-2;
        }
      }

  }

  
  function getSemSubs(uint256 semNumber) public view returns(string[] memory){
   
    string[] memory temp=subjects[semNumber-1];
    return temp;
  }

  

  function getsem(uint256 semNumber) public view returns(int256[15] memory) {
    int256[15] memory  scores;
    // string[] memory temp;
    for(uint256 i=0;i<subjects[semNumber-1].length;i++){
      scores[i]=sem[msg.sender][semNumber][subjects[semNumber-1][i]];
      // temp[i]=semSubs[i]; 
    }
    return(scores);
  }
  
  function setsem(int256[] memory arr,uint256 semNumber) public returns(int256[] memory ){
      for(uint256 i=0;i<subjects[semNumber-1].length;i++){
          sem[msg.sender][semNumber][subjects[semNumber-1][i]]=arr[i];
      }
      return arr;
  }  
  
}