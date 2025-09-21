import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { PipesPipe } from './customPipes/pipes.pipe';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ElementDirective } from './directive/element.directive';
// import {NgForm} from '@angular/forms';
// import { ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ParentToChildComponent,
    UserDetailComponent,
    ChildToParentComponent,
    TwoWayBindingComponent,
    PipesComponent,
    PipesPipe,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    ElementDirective,
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
