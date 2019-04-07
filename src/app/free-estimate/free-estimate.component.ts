import { FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


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
  tile_price: number;

  totalArea: number;
  toalNumberOfTiles: number;
  totalLaboutPrice: number;
  totalMaterialPrice: number;
  totalPrice: number;

  constructor(private _form: FormsModule) { }

  ngOnInit() {
    this.tile_length = 1;
    this.tile_width = 1;
  // this.height = 0;
  // this.width = 0;
  // this.totalArea = 0;
  }

  onChange(form: NgForm){
    this.totalArea = this.surface_length * this.surface_width;
  }

  onSubmit(form: NgForm){
    this.totalArea = this.surface_length * this.surface_width;

    this.toalNumberOfTiles = (this.totalArea * 144) / (this.tile_length*this.tile_width);

    this.totalLaboutPrice = this.totalArea * 15;

    this.totalMaterialPrice = (this.totalArea * 7) + (this.toalNumberOfTiles * this.tile_price);

    this.totalPrice = this.totalLaboutPrice + this.totalMaterialPrice;

// https://www.homeadvisor.com/cost/flooring/install-ceramic-or-porcelain-tile/

  }
/*
  1x2”,
  1x3”
  1x4”
  1x6”

  2x3”
  2x4”
  2x5”
  2x6”
  2x8”
  2x12”

  3x4”
  3x5”
  3x6”
  3x8”
  3x12”

  4x4
  4x5”
  4x5”
  4x6”
  4x8”
  4x12”
  4x16”

  5x2”
  5x3”
  5x4
  5x6”
  5x8”

  */
}
