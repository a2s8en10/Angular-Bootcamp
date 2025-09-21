import { Component, inject } from '@angular/core';
// import { routes } from '../../app.routes';
// import { RouterLink } from '@angular/router';
import { CourseComponent } from "../course/course.component";
import { AboutComponent } from "../about/about.component";
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CourseComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // courses: any[] = [];

  private http = inject(HttpClient)

  constructor() { }

  ngOnInit() {
    //   this.getCourses();
    this.fetchHttpData();
  }

  async fetchHttpData() {
    // this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe({
    //   next: (posts) => {
    //     console.log(posts);
    //   },
    //   error: (e) => {
    //     console.log(e);
    //   }
    // });

    try {
      const posts = await lastValueFrom(
        this.http.get<any>('https://jsonplaceholder.typicode.com/posts'));

      console.log('posts : ', posts);
    }
    catch (e) {
      console.log(e);
    }

  }

  // getCourses() {
  //   const data = localStorage.getItem("Strings.STORAGE_KEY");
  //   console.log(data);
  //   if (data) {
  //     this.courses = JSON.parse(data);
  //   }
  // }
}
