import { Component, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Routing-Module';

  // lazy loading component

  constructor(private viewContainer :ViewContainerRef, private cfr : ComponentFactoryResolver) {}

  async loadUser(){
    this.viewContainer.clear();
    const {UserComponent} = await import('./user/user.component');
    this.viewContainer.createComponent(this.cfr.resolveComponentFactory(UserComponent));
  }

  async loadAdmin(){
    this.viewContainer.clear();
    const {AdminComponent} = await import('./admin/admin.component');
    this.viewContainer.createComponent(this.cfr.resolveComponentFactory(AdminComponent));
  }
}
