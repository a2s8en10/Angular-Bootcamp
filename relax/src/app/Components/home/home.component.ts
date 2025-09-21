import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CourseComponent } from '../course/course.component';
// import { EnumString } from '../../Enum/enum-string';
import { AboutComponent } from '../about/about.component';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CourseComponent, AboutComponent], // RouterModule ko bhi use kar sakte hai RouterLink iss ki jagah
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // courses: any[] = [];

  private http = inject(HttpClient);
  ngOnInit() {
    // this.getCourse();
    this.fetchHttpData();
  }

  async fetchHttpData() {
    //   this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe({
    //     next: (post) => {
    //       console.log(post);
    //     },
    //     error: (e) => {
    //       console.log(e);
    //     },
    //   });

    try {
      const posts = await lastValueFrom(
        this.http.get<any>('https://jsonplaceholder.typicode.com/posts')
      );
      console.log('Posts', posts);
    } catch (e) {
      console.log(e);
    }
  }

  // getCourse() {
  //   const data = localStorage.getItem(EnumString.storage_key);
  //   console.log(data);
  //   if (data) {
  //     this.courses = JSON.parse(data);
  //   }
  // }
}
