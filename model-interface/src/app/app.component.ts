import { Component } from '@angular/core';
interface datatype {
  name: string,
  id: number,
  indian:boolean,
  address:any;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'model-interface';

  getData(){
    const data : datatype = {
      name : "Anurag sahu",
      id : 0,
      indian : true,
      address : "Ram nagar road"
    }
  }


}
