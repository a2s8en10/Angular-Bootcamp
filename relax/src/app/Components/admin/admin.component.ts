import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CourseComponent } from '../course/course.component';
// import { EnumString } from '../../Enum/enum-string';
// import { from } from 'rxjs';
import { CourseService } from '../../service/course/course.service';
import { Course } from '../../interface/course.interface';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, CommonModule, CourseComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  // model: any = {};
  // cover!: string | null;
  // cover_file: any;
  // showError = false;

  model = signal<any>({});
  cover = signal<null | string>(null);
  cover_file = signal<any>(null);
  showError = signal<boolean>(false);
  isSaved = signal<boolean>(false);
  // courses: any[] = [];

  ngOnInit() {
    // this.getCourse();
    // console.log('admin');
  }

  private courseService = inject(CourseService);
  // fetch the data in localstorage
  // getCourse() {
  //   const data = localStorage.getItem(EnumString.storage_key);
  //   console.log(data);
  //   if (data) {
  //     this.courses = JSON.parse(data);
  //   }
  // }

  // set image
  fileSelect(event: any) {
    // console.log(event);
    const file = event.target.files[0];
    if (file) {
      // this.cover_file = file;
      this.cover_file.set(file);
      const render = new FileReader();
      // console.log(render);
      render.onload = () => {
        const url = render.result!.toString();
        // this.cover = url;
        this.cover.set(url);
        // console.log('image : ', this.cover);
      };
      render.readAsDataURL(file);
      // this.showError = false;
      this.showError.set(false);
    }
  }

  // form submit
  submit(data: NgForm) {
    if (data.invalid || !this.cover) {
      console.log('Form Invalid');
      data.control.markAllAsTouched();
      if (!this.cover) {
        // this.showError = true;
        this.showError.set(true);
      }
      return;
    }
    console.log(data.value);
    this.dataStore(data);
  }

  // clear the form after submit
  clearForm(data: NgForm) {
    data.reset();
    // this.cover = null;
    this.cover.set(null);
    // this.cover_file = null;
    this.cover_file.set(null);
  }

  // localstorage function

  // store the form value in localstorage
  async dataStore(data: NgForm) {
    try {
      const formValue = data.value;
      // console.log(formValue);

      const newData: Course = {
        ...formValue,
        image: this.cover(),
        // id: this.courses.length + 1,
      };

      await this.courseService.addCourse(newData);

      //   this.courses = [...this.courses, newData];
      //   this.setItem(this.courses);
      this.isSaved.set(true);
      setTimeout(() => {
        this.isSaved.set(false);
      }, 2000);
      this.clearForm(data);
    } catch (e) {
      console.log(e);
    }

    // delete the single course
    // deleteCourse(course: any) {
    //   // this.courses = this.courses.filter((c) => c.id != course.id);
    //   // this.setItem(this.courses);
    // }
  }
}
