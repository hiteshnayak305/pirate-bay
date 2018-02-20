/**
 * A generic model that our Master-Detail pages list, create, and delete.
 */
export class Category {

  main: string;
  sub: string;

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      // @ts-ignore
      this[f] = fields[f];
    }
  }

}

export interface Category {
  [prop: string]: any;
}
