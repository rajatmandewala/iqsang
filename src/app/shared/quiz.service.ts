import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  readonly rooturl=window["cfgApiBaseUrl"]+"/iqs";
//readonly rooturl='http://18.219.108.8/iqs';
  qns:any[];
  seconds:number;
  tempSecond:number;
  timer;
  qnProgress:number;

  constructor(private http:HttpClient){}

  registerInstitue(username:string,pass:string){
     var body={
       userName:username,
       password:pass
     }
     return this.http.post(this.rooturl+'/register',body);
   }
   
   registerUser(username:string,pass:string,adminid:number){
    var body={
      userName:username,
      password:pass,
      adminId:adminid
    }
    return this.http.post(this.rooturl+'/register',body);
  }

    //topicName
//topicDescription
//topicType
  addTopic(topicname:string,topicDescription:string,topictype:string) {
    var body={
      topicName:topicname,
      topicDescription:topicDescription,
      topicType:topictype
    }
    return this.http.post(this.rooturl+'/topic/add',body);
  }
  
   checkUser(username:string,pass:string){
     var body={
      userName:username,
      password:pass
     }
     return this.http.post(this.rooturl+'/checkuser',body);
   }

   addQuestion(question:string,Option1:string,Option2:string,Option3:string,Option4:string,answer:string,TopicId:number){        
    var body={
      questionName:question,
      option1:Option1,
      option2:Option2,
      option3:Option1,
      option4:Option2,
      topicId:TopicId
    }
    return this.http.post(this.rooturl+'/question/addquestion',body);
   }

   getQuestions(topicId:number){
   // console.log('getquestion method');
   // console.log(topicId);
    return this.http.get(this.rooturl+'/test/gettopicquestion?topicId='+topicId);
    //return this.http.get('http://18.219.108.8/iqs/test');
  }
  displayTimeElasped(){
    return Math.floor(this.seconds/3600) + ':' + Math.floor(this.seconds/60) + ':' + Math.floor(this.seconds % 60);
  }

  getUserType(){
    return this.http.get(this.rooturl+'/getusertype');
  }

  getUserByUserName(uName:string){
    return this.http.get<any[]>(this.rooturl+'/userexist?userName=${uName}');
  }
  getAllTopics(){
    return this.http.get(this.rooturl+'/topic/getalltopics');
  }

  getTopicQuestion(tid:number){
   return this.http.get(this.rooturl+'/test/gettopicquestion?topicId=${tid}'); 
  }

  authUser(username:string,pass:string){
    var body={
     userName:username,
     password:pass
    }
    return this.http.post(this.rooturl+'/validuser',body);
  }
}
