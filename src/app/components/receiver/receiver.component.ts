import { DataStoreService } from './../../services/data-store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss'],
})
export class ReceiverComponent implements OnInit {
  constructor(public ds: DataStoreService) {}
  value?: string;
  ngOnInit() {}

  getValue() {
    this.value = this.ds.getData();
  }
}
