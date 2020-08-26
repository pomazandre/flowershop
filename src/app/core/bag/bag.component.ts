import { Component } from '@angular/core';
import { BagService } from '../../model/bag.service';
import { IFlower } from '../../model/catalog.model';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})

export class BagComponent {

  constructor(private bagService: BagService) {

  }

  public get Flowers(): IFlower[] {
    return this.bagService.Flowers;
  }


  public get TotalPrice(): number {
    let Sum = 0;
    this.bagService.Flowers.forEach( Item => Sum = Sum + Item.Price);
    return Sum;
  }


}
