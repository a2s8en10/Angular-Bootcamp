import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.css']
})
export class LoopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  show = "yes";
  color= "red";
  rang= "green";
  days= "monday";

}
