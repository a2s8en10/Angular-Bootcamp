import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstApp';

//  getData(val : any){
//   console.log(val);
//  }
getData (val : string){
  console.log(val);
 }

 displayVal = '';
 getValue(val : string){
  console.warn(val)
  this.displayVal = val
 }

 color = "red";
 bgColor="black"
 changeColor()
 {
  this.color = "black"
  this.bgColor = "red"
 }
}
