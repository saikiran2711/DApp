// SPDX-License-Identifier: MIT
pragma solidity >=0.4.0 <0.9.0;
pragma experimental ABIEncoderV2;

contract SEMT{


   mapping(address=> mapping(uint256=> mapping(string=>int256))) public sem ;
   mapping(uint256=>string[]) public subjects;
//   ["Mathematics-1","Physics","Basics of Electrical Engineering","Physics Lab","Basics of Electrical Engineering Lab","Engineering Graphics & Design"]
      
//   ["Mathematics-2","Chemistry","Programming for Problem Solving","Chemistry Lab","Programming for Problem Solving Lab","WorkShop-Manufacture Lab"],
//   ["Discrete Mathematics","Environmental Science","Essence of Indian Traditional Knowledge","Programming Languages","Operations Research","Advanced Computer Skills Lab","Biology for Engineers","Digital Electronics","Basic Electronics","Basic Electronics Lab","Data Structures and Algorithms","Data Structures and Algorithms Lab"],
//   ["Computer Organization",
// 		"Object Oriented Programming Using Java",
// 		"Database Mangement Systems",
// 		"OOP Using Java Lab",
// 		"Effective Tech.Comm in English",
// 		"Mathematics-3",
// 		"Indian Constitution",
// 		"Signals and Systems",
// 		"Computer Organization Lab",
// 		"Database Management Systems Lab",
// 		"Finance and Accounting"],
//         ["Operating Systems","Software Engineering","Artificial Intelligence","Web and Internet Technologies","Automata Languages and Computation","Blockchain Technologies","Software Engineering Lab","Operating Systems Lab","Mini Project Lab"],
//         ["Compiler Design","Computer Networks","Design and Analysis of Algorithms","Internet of Things","Cloud Computing","Disaster Mitigation"],
//         ["Information Security","Data science using R programming","Distributed Systems","Enterpreneurship"],
//         ["Mobile Computing","Road Safety Engineering"]



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
  function seminitializer () public{
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
    // for(uint256 i=0;i<sem1Subs.length;i+=1){
    //   sem[msg.sender][1][sem1Subs[i]]=-2;
    //   subjects[0][i]=sem1Subs[i];
    // }
    
    // for(uint256 i=0;i<sem2Subs.length;i+=1){
    //     sem[msg.sender][2][sem2Subs[i]]=-2;
    //     subjects[1][i]=sem2Subs[i];
    // }

    // for(uint256 i=0;i<sem3Subs.length;i+=1){
    //     sem[msg.sender][3][sem3Subs[i]]=-2;
    //     subjects[2][i]=sem3Subs[i];
    // }

    // for(uint256 i=0;i<sem4Subs.length;i+=1){
    //     sem[msg.sender][4][sem4Subs[i]]=-2;
    //     subjects[3][i]=sem4Subs[i];
    // }
    // for(uint256 i=0;i<sem5Subs.length;i+=1){
    //     sem[msg.sender][5][sem5Subs[i]]=-2;
    //     subjects[4][i]=sem5Subs[i];
    // }
    // for(uint256 i=0;i<sem6Subs.length;i+=1){
    //     sem[msg.sender][6][sem6Subs[i]]=-2;
    //     subjects[5][i]=sem6Subs[i];
    // }
    // for(uint256 i=0;i<sem7Subs.length;i+=1){
    //     sem[msg.sender][7][sem7Subs[i]]=-2;
    //     subjects[6][i]=sem7Subs[i];
    // }
    // for(uint256 i=0;i<sem8Subs.length;i+=1){
    //     sem[msg.sender][8][sem8Subs[i]]=-2;
    //     subjects[7][i]=sem8Subs[i];
    // }
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
  
//   function Sem2initializer() public{
//     sem2[msg.sender]["Mathematics-2"]=-2;
//     sem2[msg.sender]["Chemistry"]=23;
//     sem2[msg.sender]["Programming for Problem Solving"]=-2;
//     sem2[msg.sender]["Chemistry Lab"]=-2;
//     sem2[msg.sender]["Programming for Problem Solving Lab"]=-2;
//     sem2[msg.sender]["WorkShop-Manufacture Lab"]=-2;
//   }



//IMP function to manage subjects
// 0 -> Deleted Subject
// -1 -> Failed subject
// -2 -> Not initialized...

//Gets the grade by giving points..
  
//   function getGrade(uint256 subjectScore) public pure returns(string memory){
//     if(subjectScore <=10) return "S";
//     else if(subjectScore<=9) return "A";
//     else if(subjectScore<=8) return "B";
//     else if(subjectScore<=7) return "C";
//     else if(subjectScore<=6) return "D";
//     else if(subjectScore<=5) return "E";
//     else return "F";
//   }
  
//Testing function
//   function testDelete() public{
//     delete sem2[msg.sender]["Chemistry"];
//   }

//   function Sem3initializer() public{
//     sem3[msg.sender]["Discrete Mathematics"]=-2;
//     sem3[msg.sender]["Environmental Science"]=-2;
//     sem3[msg.sender]["Essence of Indian Traditional Knowledge"]=-2;
//     sem3[msg.sender]["Programming Languages"]=-2;
//     sem3[msg.sender]["Operations Research"]=-2;
//     sem3[msg.sender]["Advanced Computer Skills Lab"]=-2;
//     sem3[msg.sender]["Biology for Engineers"]=-2;
//     sem3[msg.sender]["Digital Electronics"]=-2;
//     sem3[msg.sender]["Basic Electronics"]=-2;
//     sem3[msg.sender]["Basic Electronics Lab"]=-2;
//     sem3[msg.sender]["Data Structures and Algorithms Lab"]=-2;
//     sem3[msg.sender]["Data Structures and Algorithms"]=-2;
//   }


}