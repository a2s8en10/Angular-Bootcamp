import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private Data : ActivatedRoute) { }

  aboutId:any;
  ngOnInit(): void {
    console.log("About ID is : ",this.Data.snapshot.paramMap.get('id'));
    this.aboutId=this.Data.snapshot.paramMap.get('id')
  }

}
