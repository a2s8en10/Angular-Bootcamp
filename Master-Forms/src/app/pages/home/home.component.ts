import { Component } from '@angular/core';
import { Example3Component } from '../../reactive-form/example-3/example-3.component';
// import { Example2Component } from '../../reactive-form/example-2/example-2.component';
// import { Example3Component } from "../../template-driven-form/example-3/example-3.component";
// import { Example1Component } from '../../reactive-form/example-1/example-1.component';
// import { Example1Component } from '../../template-driven-form/example-1/example-1.component';
// import { Example2Component } from '../../template-driven-form/example-2/example-2.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    // Example1Component,
    // Example1Component,
    // Example2Component,
    // Example2Component,
    // Example3Component,
    Example3Component
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
