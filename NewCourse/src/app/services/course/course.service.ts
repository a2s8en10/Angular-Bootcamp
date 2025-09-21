import { Injectable, signal, WritableSignal } from '@angular/core';
import { Course } from '../../Interfaces/course.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  // private courses$ = new BehaviorSubject<Course[]>([]);

  // get courses(){
  //   return this.courses$.asObservable();
  // }

  // -------- signal to hold the courses array
  private courses: WritableSignal<Course[]> = signal<Course[]>([]);

  get coursesSignal() {
    return this.courses.asReadonly();
  }

  constructor() {
    this.loadCourses();
  }

  // -------- without signal using
  // getCourses() : Course[]{
  //   const data = localStorage.getItem("Strings.STORAGE_KEY");
  //   console.log(data);
  //   if (data) {
  //     const courses = JSON.parse(data);
  //     this.updateCourses(courses);
  //     return courses;
  //   }
  //   return [];
  // }

  // ----------- with signals
  loadCourses() {
    const data = localStorage.getItem("Strings.STORAGE_KEY");
    if (data) {
      const courses = JSON.parse(data);
      this.courses.set(courses);
    }
  }

  getCourses(): Course[] {
    return this.courses();
  }
  // ------ without using signal
  // addCourse(data:Course){
  //   const courses = this.courses$.value;
  //   const newCourses = [...courses, {...data, id : courses.length + 1}];
  //   this.updateCourses(newCourses);
  //   // save in local storage
  //   this.setItem(newCourses);
  //   return newCourses;
  // }

  // with using signal
  addCourse(data: Course) {
    // const courses = this.courses();
    // const newCourse = {...data, id : courses.length + 1};
    // const newCourses = [...courses, newCourse];

    // this.courses.update((courses_data) =>  [...courses_data, newCourse]);

    //  // save in local storage
    // this.setItem(newCourses);
    // return newCourses;

    let updateCourses: Course[] = [];

    this.courses.update(courses => {
      const newCourse = { ...data, id: courses.length + 1 };
      updateCourses = [...courses, newCourse];
      this.setItem(updateCourses);
      return updateCourses;
    });

    return updateCourses;
  } 

  deleteCourse(data: Course) {
    // let courses = this.courses$.value;
    // courses = courses.filter(course_item => course_item.id != data.id);
    // this.updateCourses(courses);
    // this.setItem(courses);

    this.courses.update((courses) => {
      const updateCourses = courses.filter(c => c.id != data.id);
      this.setItem(updateCourses);
      return updateCourses;
    });
  }

  // updateCourses(data:Course[]){
  //    this.courses$.next(data);

  // }

  setItem(data: Course[]) {
    localStorage.setItem("Strings.STORAGE_KEY", JSON.stringify(data));
  }

}
