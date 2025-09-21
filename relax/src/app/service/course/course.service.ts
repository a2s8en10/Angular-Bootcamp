import { Injectable, signal, WritableSignal } from '@angular/core';
import { EnumString } from '../../Enum/enum-string';
import { Course } from '../../interface/course.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  // private courses$ = new BehaviorSubject<Course[]>([]);

  // get courses() {
  //   return this.courses$.asObservable();
  // }
  private courses: WritableSignal<Course[]> = signal<Course[]>([]);

  // Getter to expose the signal as a readonly signal
  get coursesSignal() {
    return this.courses.asReadonly();
  }

  constructor() {
    this.loadCourse();
  }

  updateCourse(upData: Course[]) {
    // this.courses$.next(upData);
  }
  // getCourse(): Course[] {
  //   const data = localStorage.getItem(EnumString.storage_key);
  //   // console.log(data);
  //   if (data) {
  //     const course = JSON.parse(data);
  //     this.updateCourse(course);
  //     return course;
  //   }
  //   return [];

  // }

  loadCourse() {
    const data = localStorage.getItem(EnumString.storage_key);
    if (data) {
      const course = JSON.parse(data);
      // this.updateCourse(course);
      this.courses.set(course);
    }
  }

  getCourse(): Course[] {
    return this.courses();
  }

  addCourse(newData: Course) {
    // const courses = this.courses$.value;
    // const newCourses = [...courses, { ...newData, id: courses.length + 1 }];
    // this.updateCourse(newCourses);
    // -----------------------------------
    // const courses = this.courses();
    // const newCourses = { ...newData, id: courses.length + 1 };
    // const newCourse_Update = [...courses, newCourses];
    // this.courses.update((updateCourses) => [...updateCourses, newCourses]);

    // this.setItem(newCourse_Update); // save in local storage
    // return newCourse_Update;

    let newCourse_Update: Course[] = [];

    this.courses.update((courses) => {
      const newCourses = { ...newData, id: courses.length + 1 };
      const newCourse_Update = [...courses, newCourses];
      this.setItem(newCourse_Update);
      return newCourse_Update;
    });

    return newCourse_Update;
  }

  deleteCourse(data: Course) {
    // let courses: Course[] = this.courses$.value;
    // courses = courses.filter((c) => c.id != data.id);
    // this.updateCourse(courses);
    //  this.setItem(courses);

    this.courses.update((courses) => {
      const UpdateCourse = courses.filter((c) => c.id !== data.id);
      this.setItem(UpdateCourse);
      return UpdateCourse;
    });
  }
  setItem(setData: Course[]) {
    localStorage.setItem(EnumString.storage_key, JSON.stringify(setData));
  }
}
