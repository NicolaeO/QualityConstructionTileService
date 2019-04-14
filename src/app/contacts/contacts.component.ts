import { Router } from '@angular/router';
import { EmailSenderService } from './../email-sender.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {

  first_name: string;
  last_name: string;
  email: string;
  text: string;
  phone_number: string;
  subject: string;

  constructor(
    _formData: FormsModule,
    private _emailSender: EmailSenderService,
    private route: Router
    ) { }

  ngOnInit() {
    this.first_name = '';
    this.last_name = '';
    this.email = '';
    this.text = '';
    this.phone_number = '';
    this.subject = '';
  }

  onSubmit(form: NgForm){
    // console.log(this.first_name);
    // console.log(this.last_name);
    // console.log(this.email);
    // console.log(this.text);
    this._emailSender.sendEmail({
      "fname": this.first_name,
      "lname": this.last_name,
      "email": this.email,
      "message": this.text,
      "subject": this.subject,
      "phone_number": this.phone_number
    })
    .subscribe(data => {
      console.log(data);
      var el = document.getElementById('sent-succes');
      el.innerHTML = "Message sent successfully";
      setTimeout(function(){
        el.innerHTML = '';
        form.reset();
      }, 3000);
    });
  }

}
