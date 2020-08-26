import { Component } from '@angular/core';
import { CatalogService } from '../../model/catalog.service';
import { IFlower } from '../../model/catalog.model';
import { BagService } from '../../model/bag.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})

export class CatalogComponent {
  public get Flowers(): IFlower[] {
    return this.catService.Flowers;
  }

  constructor(private catService: CatalogService, private bagService: BagService) {
  }

  editFlower($event, flower){

  }

  buyFlower($event, flower) {

    this.bagService.Flowers.push( flower);
    console.log(this.bagService.Flowers);
  }







}
