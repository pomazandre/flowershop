import {Injectable} from '@angular/core';
import { IFlower, Flower } from './catalog.model';

@Injectable()
class BagService {
  Flowers: IFlower[] = [];

  constructor() {
  }

}

export { BagService };
