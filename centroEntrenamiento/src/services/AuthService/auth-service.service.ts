import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {

    return this.http.post<any>('/api/auth', { username, password })
    .pipe(map(user => {

      if (user && user.token) {  
        localStorage.setItem('currentUser', JSON.stringify(user));
      }

      return user;
    }));
  }

    
  logout() {
    //Elimina al usuario del localStorage al cerrar sesión
    localStorage.removeItem('currentUser');
  }

}
