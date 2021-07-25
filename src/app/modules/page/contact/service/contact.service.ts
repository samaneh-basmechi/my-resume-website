import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  api = 'https://mailthis.to/samanehbasmechi@gmail.com';

  constructor(private http: HttpClient) {
  }

  postMessage(form): Observable<any> {
    return this.http.post(this.api, form, {responseType: 'text'}).pipe(
      map(
        (response) => {
          return response;
        },
        (error) => {
          return error;
        }
      )
    );
  }
}
