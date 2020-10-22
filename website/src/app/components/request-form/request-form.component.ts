import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


export class Form {

  constructor(
    public name: string,
    public email: string,
    public message: string
  ) {  }

}

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  testUrl = "http://localhost:5001/emilyschristmasmagic/us-central1/sendMail";
  //url = "https://us-central1-emilyschristmasmagic.cloudfunctions.net/sendMail"
  //http://localhost:5001/emilyschristmasmagic/us-central1/sendMail";

  model = new Form('Dr IQ', 'me@me.com', 'Chuck Over street');

  submitted = false;

  onSubmit() {
    const allInfo = `My name is ${this.model.name}. My email is ${this.model.email}. My message is ${this.model.message}`;
    console.log(allInfo);
    this.http.put(this.testUrl, {
      "name" : this.model.name,
      "email" : this.model.email,
      "message" : this.model.message
    })
    .subscribe(
        val => {
            console.log("PUT call successful value returned in body", 
                        val);
        },
        response => {
            console.log("PUT call in error", response);
        },
        () => {
            console.log("The PUT observable is now completed.");
        }
    );
    this.submitted = true;
    console.log(this.submitted);
  }

  get diagnostic() { return JSON.stringify(this.model); }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    console.log(allInfo);
  }
}
