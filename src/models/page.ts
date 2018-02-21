/**
 * A generic model that our Master-Detail pages list, create, and delete.
 */
export class Page {

  collapse: boolean = true;
  iconName: string;
  title: string;
  parent: string = '';
  component: string;
  uri: string = '';
  subItems: Page[] = [];


  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      // @ts-ignore
      this[f] = fields[f];
    }
  }

}

export interface Page {
  [prop: string]: any;
}
