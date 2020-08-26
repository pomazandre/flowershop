import {Injectable} from '@angular/core';
import { IFlower, Flower } from './catalog.model';

@Injectable()
class CatalogService {
  Flowers: IFlower[] = [];

  constructor() {
    this.Flowers.push({ Id: 1, Name: 'Подсолнухи', Price : 33 });
    this.Flowers.push({ Id: 2, Name: 'Сердце Ангела', Price : 75 });
    this.Flowers.push({ Id: 3, Name: 'Очарование', Price : 35 });
  }

}

export { CatalogService };
