import * as $ from 'jquery';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-headder',
  templateUrl: './headder.component.html',
  styleUrls: ['./headder.component.css']
})
export class HeadderComponent implements OnInit {

  constructor() { }

  ngOnInit() {}



  slides = [
    {img: "assets/img/slickSlider1.jpg"},
    {img: "assets/img/slickSlider2.jpg"},
    {img: "assets/img/slickSlider3.jpg"},
    {img: "assets/img/slickSlider4.jpg"}
  ];
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": true,
    "speed": 2000,
    "autoplaySpeed": 5000,
    "cssEase": "ease-out",
    "dots": true,
    "arrows": false
  };

  /*
  addSlide() {
    this.slides.push({img: "assets/img/slickSlider1.jpg"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  */

  slickInit(e) {
    //DO NOTHING
    // console.log('slick initialized');
  }

  breakpoint(e) {
    //DO NOTHING
    // console.log('breakpoint');
  }

  afterChange(e) {
    //DO NOTHING
    // console.log('afterChange');
  }

  beforeChange(e) {
    //DO NOTHING
    // console.log('beforeChange');
  }


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  displayMenu() {

    if($("#mainMenu").css("visibility") == "hidden"){
      $("#mainMenu").css("visibility", "visible");
      $("#mainMenu").css("opacity", "1");
    }
    else{
      $("#mainMenu").css("visibility", "hidden");
      $("#mainMenu").css("opacity", "0");
    }


  }

  hideMenu(e){
    console.log($(document).width());
    if($(document).width() < 1024 && $("#mainMenu").css("visibility") == "visible"){
      $("#mainMenu").css("visibility", "hidden");
      $("#mainMenu").css("opacity", "0");
      console.log("Hide Menu");
    }

    if($(document).width() >= 1024 && $("#mainMenu").css("visibility") == "hidden"){
      $("#mainMenu").css("visibility", "visible");
      $("#mainMenu").css("opacity", "1");
      console.log("Show Menu");
    }

  }

  /*
  @HostListener('document:click', ['$event']) clickedOutside($event){
    if(event.target != $("#mainMenu") && event.target != $("#showmenu")) {
      $("#mainMenu").css("visibility", "hidden");
      console.log("Clicked outside");
    }
  }
  */
}
