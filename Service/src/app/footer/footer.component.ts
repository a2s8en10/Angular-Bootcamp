import { Component, OnInit } from '@angular/core';
import {UserdataService} from '../services/userdata.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  users:any;
  constructor(private userData : UserdataService)
  {
    console.log ("UserData ", userData.users());
    this.users = userData.users();

  }

  ngOnInit(): void {
  }

}
