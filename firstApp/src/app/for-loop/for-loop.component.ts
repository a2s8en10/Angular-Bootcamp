import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css']
})
export class ForLoopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users = ["Ashish", "Suyash", "Anurag", "jay",]
  userDetails= [
    {name: "Ashish sahu", email:"ash.sahu9775@gmail.com",phone:"971393427",gender:"male",age:"24",},
    {name: "Suyash patel", email:"suyash.patel@gmail.com",phone:"8269690959",gender:"male",age:"23",},
    {name: "Anurag sahu", email:"anu.sahu9589@gmail.com",phone:"9589579608",gender:"male",age:"20",},
    {name: "Jay Kumar patel", email:"jaykumarpatel@gmail.com",phone:"8817694857",gender:"male",age:"19",}
  ]

  nestedLoop=[
    {name: "Ashish sahu", email:"ash.sahu9775@gmail.com",phone:['9713939427','9713939427']},
    {name: "Suyash patel", email:"suyash.patel@gmail.com",phone:['8269690959','8269690959']},
    {name: "Anurag sahu", email:"anu.sahu9589@gmail.com",phone:['9589579608','9589579608']},
    {name: "Jay Kumar patel", email:"jaykumarpatel@gmail.com",phone:['8817694857','8817694857']}
  ]

}
