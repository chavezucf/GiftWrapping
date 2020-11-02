import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  url = "/sendMail";

  model = new Form('', '', '');

  submitted = false;

  onSubmit() {
    const allInfo = `My name is ${this.model.name}. My email is ${this.model.email}. My message is ${this.model.message}`;
    console.log(allInfo);
    this.http.put(this.url, {
      "name" : this.model.name,
      "email" : this.model.email,
      "message" : this.model.message
    })
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
    this.submitted = true;
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
