import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  aim="Your Perfect Banking Partner"
  data="Enter Account Number"
  acno=""
  psw=""




  userdetails:any={
    1000:{acno:1000,username:"anu",password:123,balance:0},
    1001:{acno:1001,username:"sree",password:123,balance:0},
    1002:{acno:1002,username:"dev",password:123,balance:0},
    1003:{acno:1003,username:"melvin",password:123,balance:0}

  }

  constructor(private router:Router,private ds:DataService){}

  login(){
    var acno=this.acno
    var psw=this.psw
    const result=this.ds.login(acno,psw)
    if(result){
      alert('login success')
      this.router.navigateByUrl('dashboard')
    }else{
      alert('incorrect username or password')
    }
    // var userdetails=this.userdetails
    

    // if (acno in userdetails){
    //   if(psw==userdetails[acno]["password"]){
    //   alert("login success")
    //   this.router.navigateByUrl("dashboard")
    //   }
    //   else{
    //     alert("incorrect password")
    //   }

    // }else{
    //   alert("incorrect username")
    // }

    // // alert("login clicked")
  }


  // login(a:any,b:any){
  //   this.acno=a.value
  //   this.psw=b.value
  //   var acno=this.acno
  //   var psw=this.psw
  //   var userdetails=this.userdetails

  //   if (acno in userdetails){
  //     if(psw==userdetails[acno]["password"]){
  //     alert("login success")
  //     }else{
  //       alert("incorrect password")
  //     }

  //   }else{
  //     alert("incorrect username")
  //   }

  //   // alert("login clicked")
  // }


  // acnochange(event:any){
  //   this.acno=event.target.value
  //   console.log(this.acno);
    
  //     }

  //     pswchange(event:any){
  //       this.psw=event.target.value
  //       console.log(this.psw);
        
  //     }
}
