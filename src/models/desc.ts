/**
 * A generic model that our Master-Detail pages list, create, and delete.
 */
export class Desc {

  upload_date: string;
  size: string;
  uploaded_by: string;

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      // @ts-ignore
      this[f] = fields[f];
    }
  }

}

export interface Desc {
  [prop: string]: any;
}
