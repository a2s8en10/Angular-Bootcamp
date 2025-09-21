import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service {
  private http = inject(HttpClient);
  private basepath = 'https://localhost:7114/api/connect';

  getData(): Observable<any> {
    return this.http.get<any>(this.basepath);
  }
}
