import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Sort_Value } from 'src/app/common/constants';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  @Output() sortItem = new EventEmitter<string>();
  items: any[] = [];
  selectedOrg: string = '';
  constructor() { }

  ngOnInit() {
    this.items = Sort_Value;
  }
  
  onChange(event, value: string) {
    this.sortItem.emit(value);
  }
}
