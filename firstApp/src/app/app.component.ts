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

 displayval = '';
 getValue(val : string){
  console.warn(val)
  this.displayval = val
 }

}
