// import { NgForm } from '@angular/forms';
import { FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-free-estimate',
  templateUrl: './free-estimate.component.html',
  styleUrls: ['./free-estimate.component.css']
})

export class FreeEstimateComponent implements OnInit {

  surface_length: number;
  surface_width: number;

  tile_length: number;
  tile_width: number;
  tile_price_SQFT: number;

  totalTilePrice: number;
  totalCementPrice: number;
  totalOtherPrice: number;
  totalArea: number;
  totalNumberOfTiles: number;
  totalLabourPrice: number;
  totalMaterialPrice: number;
  totalPrice: number;

  labourPriceSQFT: number;
  cementPriceSQFT: number;
  otherPriceSQFT: number;
  gradient: string;

  constructor() { }

  ngOnInit() {
    this.tile_length = 1;
    this.tile_width = 1;
    this.labourPriceSQFT = 15;
    this.cementPriceSQFT = 5;
    this.otherPriceSQFT = 1;
    this.totalPrice = 0;

  }

  onSubmit(form: NgForm){
    
    this.totalArea = this.surface_length * this.surface_width;

    this.totalNumberOfTiles = Math.ceil((this.totalArea * 144) / (this.tile_length * this.tile_width));

    this.totalTilePrice = Math.ceil(this.tile_price_SQFT * this.totalArea);

    this.totalCementPrice = Math.ceil(this.totalArea * this.cementPriceSQFT);
    
    this.totalOtherPrice = Math.ceil(this.totalArea * this.otherPriceSQFT);
    
    this.totalLabourPrice = Math.ceil(this.totalArea * this.labourPriceSQFT);

    this.totalMaterialPrice = this.totalTilePrice + this.totalCementPrice + this.totalOtherPrice;

    this.totalPrice = this.totalLabourPrice + this.totalMaterialPrice;

// https://www.homeadvisor.com/cost/flooring/install-ceramic-or-porcelain-tile/


    let cementPercent = this.totalCementPrice * 100 /this.totalPrice;
    let labourPercent = this.totalLabourPrice * 100 / this.totalPrice;
    let tilesPercent = this.totalTilePrice * 100 / this.totalPrice;
    let otherPercent = this.totalOtherPrice * 100 / this.totalPrice;

    let cementDeg = cementPercent * 360 / 100;
    let labourDeg = labourPercent * 360 / 100;
    let tilesDeg = tilesPercent * 360 / 100;
    let otherDeg = otherPercent * 360 / 100;

    // let gradient = `conic-gradient(
    //   #F15854 ${cementPercent}%, 
    //   #5DA5DA 0 ${labourPercent}%, 
    //   #DECF3F 0 ${tilesPercent}%, 
    //   #4D4D4D 0)`;


    let gradient = `conic-gradient(
      #F15854 ${cementDeg}deg, 
      #5DA5DA ${cementDeg}deg ${cementDeg + labourDeg}deg, 
      #DECF3F ${labourDeg + cementDeg}deg ${labourDeg + cementDeg + tilesDeg}deg, 
      #4D4D4D ${tilesDeg + cementDeg + labourDeg}deg )`;
// ${tilesDeg + cementDeg + labourDeg + other}deg

    console.log(gradient):

    $("#myChart").css("background", gradient);
    $("#chartDivContainer").css("display", 'inline-block');
    $("#chartDivLegend").css("display", 'inline-block');
    
    


  }

}