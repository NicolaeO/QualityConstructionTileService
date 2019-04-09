import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  status: string;
  constructor() { }

  ngOnInit() {
    let time = new Date();
    console.log(time);
    if(time.getDay() > 0){
      if(time.getHours() > 7 && time.getHours() < 17){
        this.status = "Please call us we are open";
      }
      else{
        if(time.getDay() == 5){
          this.status = "Sorry we are closed now, we open tomorrow at 10AM";
        }
        else{
          this.status = "Sorry we are closed now, we open tomorrow at 7AM";
        }
      }
    }
    else{
      this.status = "Sorry we are closed now, we open on Monday at 7AM";
    }
  }

}
