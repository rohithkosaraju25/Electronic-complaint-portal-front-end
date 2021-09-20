import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(clientId: string,password: string) {

      localStorage.setItem('clientId', clientId)
      return true;
  }

   isUserLoggedIn() {
    let client = localStorage.getItem('clientId')
    return client;
  } 

  userLoggedIn(){
    let user = localStorage.getItem('clientId')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    
      alert("You are logging out!");
      sessionStorage.removeItem('clientId');
  }
}


