import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = '/sendMail';

export class Form {

  constructor(
    public name: string,
    public email: string,
    public message: string
  ) {  }

}
@Injectable({
  providedIn: 'root'
})

export class EmailRequestService {

  constructor(private http: HttpClient) { }

  public sendEmail(form: Form) {
      const allInfo = `My name is ${form.name}. My email is ${form.email}. My message is ${form.message}`;
      console.log(allInfo);
      this.http.put(url, form)
      .subscribe(
          val => {
              console.log("GET call successful value returned in body", 
                          val);
          },
          response => {
              console.log("GET call in error", response);
          },
          () => {
              console.log("The GET observable is now completed.");
          }
      );
  }
}

