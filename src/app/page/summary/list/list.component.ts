import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LIST_COUNTRY_PAGE } from 'src/app/common/constants';
import { CountryModel } from 'src/app/model/country.model';
import { DetailsComponent } from '../country/details/details.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() contries: CountryModel[] = [];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(countryCode: string): void {
    let dialogRef = this.dialog.open(DetailsComponent, {
      width: LIST_COUNTRY_PAGE.WIDTH_DIALOG,
      data: { countryCode }
    });

    dialogRef.afterClosed().subscribe(result => {});
  }
}
