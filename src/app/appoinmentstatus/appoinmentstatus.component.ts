import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-appoinmentstatus',
  templateUrl: './appoinmentstatus.component.html',
  styleUrls: ['./appoinmentstatus.component.css']
})
export class AppoinmentstatusComponent implements OnInit {

  val="your status in progress"
  constructor(public http:HttpClient,public router:Router) { }
  ngOnInit(): void {

  }
status(){
  this.http.post<any>("http://localhost:3000/status",this.val).subscribe(res=>{
       this.router.navigate(['appoimentstatusforpatient'])
  });
}
}
