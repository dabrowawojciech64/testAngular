import { Component } from '@angular/core';
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss'],
})
export class SenderComponent {
  constructor(public ds: DataStoreService) {}
  data: string = '';

  sendData(data: string) {
    this.ds.setData(data);
  }
}
