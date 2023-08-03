import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataStoreService {
  data: string = '';
  constructor() {}

  getData(): string {
    return this.data;
  }

  setData(data: string) {
    this.data = data;
  }
}
