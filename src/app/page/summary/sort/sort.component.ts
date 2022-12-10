import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SORT_ITEMS } from 'src/app/common/constants';

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
    this.items = SORT_ITEMS;
  }
  
  onChange(event, value: string) {
    this.sortItem.emit(value);
  }
}
