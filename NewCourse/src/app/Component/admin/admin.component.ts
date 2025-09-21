// import { NgIf } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CourseComponent } from "../course/course.component";
import { CourseService } from '../../services/course/course.service';
import { Course } from '../../Interfaces/course.interface';
// import { Strings } from '../../enum/strings';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, CourseComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  // model: any = {};
  // cover!: string | null;
  // cover_file: any;
  // showError = false;
  // --------------- using signal ----------
  model = signal<any>({});
  cover = signal<string | null>(null);
  cover_file = signal<any>(null);
  showError = signal<boolean>(false);

  // isActive = signal<boolean>(false);

  // courses: any[] = [];

  private courseService = inject(CourseService)

  constructor() {
    // effect(() => {
    //   console.log(this.isActive());
    // });
  }
  // ngOnInit(){
  //   this.getCourses();
  // }


  OnFileSelected(event: any) {
    console.log(event);
    const file = event.target.files[0];
    if (file) {
      // this.cover_file = file;  // using signals
      this.cover_file.set(file);

      const reader = new FileReader();
      console.log(reader);
      reader.onload = () => {
        const dataUrl = reader.result!.toString();
        // this.cover = dataUrl;   // using signal
        this.cover.set(dataUrl);
        console.log('image: ', this.cover);
      };
      reader.readAsDataURL(file);
      // this.showError = false; // using signal
      this.showError.set(false);
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid || !this.cover) {
      console.log("form are invalid");
      form.control.markAllAsTouched();
      if (!this.cover) {
        // this.showError = true; // using signal
        this.showError.set(true);
      }
    }
    console.log(form.value);

    this.saveCourse(form);
  }
  clearForm(form: NgForm) {
    form.reset();
    // this.cover = null;    // using signal
    // this.cover_file = null; // using signal
    this.cover.set(null);
    this.cover_file.set(null);
  }

  async saveCourse(form: NgForm) {
    try {
      const formValue = form.value;
      console.log(formValue);

      const data: Course = {
        ...formValue,
        image: this.cover(),
        // id : this.courses.length + 1,
      };

      await this.courseService.addCourse(data);

      //   this.courses = [...this.courses, data];
      //   this.setItem(this.courses);

      this.clearForm(form);
    } catch (e) {
      console.log(e);
    }
  }

  // deleteCourse(course : any){
  // //   this.courses = this.courses.filter(course_item => course_item.id != course.id);
  // //   this.setItem(this.courses);

  // }

  setItem(data: any) {
    localStorage.setItem("Strings.STORAGE_KEY", JSON.stringify(data));
  }
}
