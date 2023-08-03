import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  // @Input() value: string = '';
  // @Output() valueChange = new EventEmitter<string>();

  value?: string;

  public buttonClick(value: string) {
    this.value = value;
  }
}
