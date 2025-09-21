import { Component, inject } from '@angular/core';
import { Service } from '../Services/service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  private service = inject(Service);
  data: any;
  IsDataAvailable: boolean = true;

  ngOnInit() {
    this.getDataAll();
  }

  private getDataAll(): void {
    this.service.getData().subscribe(result => {
      this.data = result;
      if (this.data.length > 0) {
        this.IsDataAvailable = true;
      }
    })
  }
}
