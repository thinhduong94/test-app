import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CountryService } from 'src/app/service/country.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  country: any = {};
  constructor(
    public dialogRef: MatDialogRef<DetailsComponent>,
    private countryService: CountryService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.countryService.getDetails(data.countryCode).subscribe((result)=>{
        this.country = result;
        console.log(result);
      });
  }
  ngOnInit() {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
