import { Injectable } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentuser=''
  currentacno=''
  
  constructor() { }

  userdetails:any={
    1000:{acno:1000,username:"anu",password:123,balance:0,transaction:[]},
    1001:{acno:1001,username:"sree",password:123,balance:0,transaction:[]},
    1002:{acno:1002,username:"dev",password:123,balance:0,transaction:[]},
    1003:{acno:1003,username:"melvin",password:123,balance:0,transaction:[]}

  }
  register(acno:any,psw:any,uname:any){
    var userdetails=this.userdetails
    if(acno in userdetails){
      return false
    }else{
      userdetails[acno]={acno,username:uname,password:psw,balance:0,transaction:[]}
      console.log(userdetails);
      
    return true
    }

  }

  login(acno:any,psw:any){
    
    var userdetails=this.userdetails
    

    if (acno in userdetails){
      if(psw==userdetails[acno]["password"]){

        // ac number 
        this.currentacno=acno

        // store username
       this.currentuser= userdetails[acno]['username']
      return true
      }
      else{
        return false
      }

    }else{
      return false
    }

    // alert("login clicked")
  }

  deposit(acno:any,password:any,amount:any){
var userdetails=this.userdetails 
var amnt=parseInt(amount) 
if(acno in userdetails){
  if(password==userdetails[acno]["password"]){
    userdetails[acno]["balance"]+=amnt
    userdetails[acno]['transaction'].push({type:'CREDIT',amount:amnt})
    return userdetails[acno]['balance']

  }
  else{
    return false

  }
}
else{
  return false
}
  }

  withdraw(acno:any,password:any,amount:any){
    var userdetails=this.userdetails
    var amnt=parseInt(amount)
    if(acno in userdetails){
      if(password==userdetails[acno]['password']){
        if(amnt<=userdetails[acno]['balance']){
          userdetails[acno]['balance']-=amnt
          userdetails[acno]['transaction'].push({type:'DEBIT',amount:amnt})

          return userdetails[acno]['balance']
        }
        else{alert('insuffient balance')
      return false}
      }
      else{
        alert('incorect password')
        return false
      }
    }else{
      alert('incorrect ac no')
      return false
    }

  }
  gettransaction(acno:any){
    return this.userdetails[acno]['transaction']
  }
}

