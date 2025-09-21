import {
  Component,
  computed,
  effect,
  inject,
  input,
  Input,
  signal,
} from '@angular/core';
// import { EnumString } from '../../Enum/enum-string';
import { Course } from '../../interface/course.interface';
import { CourseService } from '../../service/course/course.service';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent {
  // @Input() courses: any[] = [];
  // courses: Course[] = [];     // use the signal for next line
  // courses = signal<Course[]>([]); // signal are use
  // @Input() isAdmin = false;
  isAdmin = input<boolean>(false, {
    // isAdmin is a call like function "isAdmin()"
    // alias: "Admin"
  });
  // coursesSubscribe!: Subscription;

  //  try to underStand signal
  // without signal
  a = 1;
  b = 2;
  c = this.a + this.b;

  // with Signal
  p = signal(1);
  q = signal(2);
  r = computed(() => this.p() + this.q()); // computed means only read function

  // private courseService = inject(CourseService);
  public courseService = inject(CourseService); // replace the computed by using public

  // courses = computed(() => this.courseService.coursesSignal()); // replace the Effect by using computed

  constructor() {
    // use `effect` to automatically respond to change in the service`s course signal
    // -------- effect hai jo vo subscribe nahi karta hai vo only listen karta hai
    // effect(
    //   () => {
    //     console.log('Effect');
    //     const courses = this.courseService.coursesSignal(); // ye jo 'coursesSignal' function hai course-service ke Getter hai
    //     if (courses !== this.courses()) {
    //       this.courses.set(courses);
    //       console.log('courses: ', this.courses());
    //     }
    //   },
    //   { allowSignalWrites: true }
    // );
  }
  ngOnInit() {
    // this.underStandSignalUseWithExample();
    // // this.courses = this.courseService.getCourse();    //use the signal for next line
    // this.courses.set(this.courseService.getCourse());
    // // this.getCourse();
    // this.coursesSubscribe = this.courseService.courses.subscribe({
    //   next: (courses) => {
    //     // this.courses = courses;  // use the signal for next line
    //     this.courses.set(courses);
    //     console.log('course', this.courses());
    //   },
    //   error: (e) => {
    //     console.log(e);
    //   },
    // });
  }
  underStandSignalUseWithExample() {
    console.log('With Out Signal value are not change...');
    console.log('C before value is : ', this.c);
    this.a = 5;
    console.log('C after value is : ', this.c);

    console.log('with signal value are change...');
    console.log('C value is before is :', this.r());
    this.p.set(19);
    console.log('C value is after change is :', this.r());
  }
  // // fetch the data in localstorage
  // getCourse() {
  //   const data = localStorage.getItem(EnumString.storage_key);
  //   console.log(data);
  //   if (data) {
  //     this.courses = JSON.parse(data);
  //   }
  // }

  deleteCourse(course: Course) {
    // this.del.emit(course);
    this.courseService.deleteCourse(course);
  }

  ngOnDestroy() {
    // console.log('Destroy is Call..');
    // if (this.coursesSubscribe) {
    //   this.coursesSubscribe.unsubscribe();
    // }
  }
}
