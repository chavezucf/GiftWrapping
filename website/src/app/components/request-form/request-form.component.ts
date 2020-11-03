import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form, EmailRequestService } from './../../services/email-request.service';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent implements OnInit {
  form = new Form('', '', '');
  submitted = false;

  constructor(private http: HttpClient, private emailService: EmailRequestService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.emailService.sendEmail(this.form);
    this.submitted = true;
  }
}
