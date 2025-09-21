import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-parent-to-child',
  templateUrl: './parent-to-child.component.html',
  styleUrls: ['./parent-to-child.component.css']
})
export class ParentToChildComponent implements OnInit {

  constructor() { }
  @Input() item =0
  ngOnInit(): void {
  }

}
