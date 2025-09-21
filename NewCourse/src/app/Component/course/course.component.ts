import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { Course } from '../../Interfaces/course.interface';
import { CourseService } from '../../services/course/course.service';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {

  // @Input() courses: any[] = [];
  // delete operation
  // courses: Course[] = [];
  // courses = signal<Course[]>([]); // using signals

  // @Input() isAdmin = false;

  isAdmin = input<boolean>(false);

  // isAdmin1 = model<boolean>(false,{
  //   alias: "isActive",
  // });




  // @Output() del = new EventEmitter();
  // coursesSub !: Subscription;     // initial value define nahi kar rahe iss liye (!) ka use karenge

  private courseService = inject(CourseService);

  courses = computed(() => this.courseService.coursesSignal());
  constructor(
    // private courseService: CourseService
  ) {

    // effect(
    //   () => {
    //     const courses = this.courseService.coursesSignal();
    //     console.log('Effect');

    //     if (courses !== this.courses()) {
    //       this.courses.set(courses);
    //       console.log('courses : ', this.courses());
    //     }
    //   }, { allowSignalWrites: true }
    // );
  }

  ngOnInit() {
    // // this.courses = this.courseService.getCourses(); // using signals
    // this.courses.set(this.courseService.getCourses());
    // // this.getCourses();

    // // subscribe on ke liye code
    // this.coursesSub = this.courseService.courses.subscribe({    // coursesSub is liye kiya hai kyu ki unsubscribe karna bhi hai
    //   next: (courses) => {
    //     // this.courses = courses; // using signals
    //     // console.log('courses : ',this.courses);  // using signals
    //     this.courses.set(courses);
    //     console.log('courses : ',this.courses());
    //   },
    //   error(e){
    //     console.log(e);
    //   }
    // });
  }
  // getCourses() {
  //   const data = localStorage.getItem("Strings.STORAGE_KEY");
  //   console.log(data);
  //   if (data) {
  //     this.courses = JSON.parse(data);
  //   }
  // }


  deleteCourse(course: Course) {       // single course select
    // this.del.emit(course);
    this.courseService.deleteCourse(course);
  }

  ngOnDestroy() {
    // console.log('courses onDestroy');
    // if(this.coursesSub) this.coursesSub.unsubscribe();
  }

}
