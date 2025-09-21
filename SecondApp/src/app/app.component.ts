import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SecondApp';

  data=10;
  changeData()
  {
    this.data = Math.floor(Math.random()*10);
  }

  userDetail = [
    {name: "Anurag ", email: "anu.gmail.com"},
    {name: "Ashish ", email: "ash.gmail.com"},
    {name: "suyash ", email: "suy.gmail.com"},
    {name: "jaya ", email: "jaya.gmail.com"},
  ]

  user = "x"
  updateData(item:string)
  {
    console.log(item);
    this.user=item;
  }

}
