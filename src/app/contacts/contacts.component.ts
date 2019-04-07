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

  constructor(_formData: FormsModule) { }

  ngOnInit() {
    this.first_name = '';
    this.last_name = '';
    this.email = '';
    this.text = '';
    this.phone_number = '';
  }

  onSubmit(form: NgForm){
    console.log(this.first_name);
    console.log(this.last_name);
    console.log(this.email);
    console.log(this.text);
  }

}
