import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
      width: '250px',
      data: { countryCode: countryCode }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
