import { Desc } from './desc';
import { Category } from './category';
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 */
export class Torrent {

  index: number;
  category: Category;
  title: string;
  magnet: string;
  desc: Desc;
  seed: string;
  leech: string;

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      // @ts-ignore
      this[f] = fields[f];
    }
  }

}

export interface Torrent {
  [prop: string]: any;
}
