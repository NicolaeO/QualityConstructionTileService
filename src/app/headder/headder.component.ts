import * as $ from 'jquery';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-headder',
  templateUrl: './headder.component.html',
  styleUrls: ['./headder.component.css']
})
export class HeadderComponent implements OnInit {

  constructor() { }

  ngOnInit() {}



  slides = [
    {img: "../../assets/images/slickSlider1.jpg"},
    {img: "../../assets/images/slickSlider2.jpg"},
    {img: "../../assets/images/slickSlider3.jpg"},
    {img: "../../assets/images/slickSlider4.jpg"}
  ];
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": true,
    "speed": 2000,
    "autoplaySpeed": 5000,
    "cssEase": "ease-out",
    "dots": true,
    arrows:false
  };

  /*
  addSlide() {
    this.slides.push({img: "../../assets/images/slickSlider1.jpg"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  */

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  displayMenu() {
    if($("#mainMenu").css("display") == "none"){
      $("#mainMenu").css("display", "block");
      $("my-slider").css("margin-top", "0");
    }
    else{
      $("#mainMenu").css("display", "none");
      $("my-slider").css("margin-top", "25px");
    }
  }

  windowResize(e){
    $("#mainMenu").css("display", "");

  }

}
