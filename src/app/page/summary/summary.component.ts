import { Component, OnInit } from '@angular/core';
import { SORT_VALUE, SUMMARY_PAGE } from 'src/app/common/constants';
import { SummaryMock } from 'src/app/mock/summary';
import { CountryModel } from 'src/app/model/country.model';
import { SummaryModel } from 'src/app/model/summary.model';
import { SummaryService } from 'src/app/service/summary.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  showLoading: boolean = false;
  contries: CountryModel[] = [];
  originalResult: SummaryModel;
  message: string = '';
  constructor(private countryService: SummaryService) {
    this.getSummary();
  }
  ngOnInit() { }
  sortItem(item: string) {
    switch (item) {
      case SORT_VALUE.A:
        this.getSummary();
        break;
      case SORT_VALUE.B:
        this.mostTotalConfirmedCases();
        break;
      case SORT_VALUE.C:
        this.highestNumberOfDeaths();
        break;
      case SORT_VALUE.D:
        this.leastNumberOfRecoveredCases();
        break;
      default:
        this.getSummary();
    }
  }
  private mostTotalConfirmedCases() {
    this.contries = this.sortProperty(this.originalResult.Countries, SUMMARY_PAGE.TOTAL_CONFIRMED_KEY, true);
  }
  private highestNumberOfDeaths() {
    this.contries = this.sortProperty(this.originalResult.Countries, SUMMARY_PAGE.TOTAL_DEATHS_KEY, true);
  }
  private leastNumberOfRecoveredCases() {
    this.contries = this.sortProperty(this.originalResult.Countries, SUMMARY_PAGE.TOTAL_RECOVERED_KEY, false);
  }
  private sortProperty(array = [], key = '', isDecrease = false) {
    const decrease = isDecrease ? 1 : -1;
    return array.sort((a, b) => (b[key] - a[key]) * decrease);
  }
  private getSummary() {
    this.showLoading = true;
    this.countryService.getSummary().subscribe((result) => {
      const { Countries = [], Message = '' } = result || {};
      if (Message.length > 0) {
        this.message = Message;
        (result as any) = SummaryMock;
      }
      this.originalResult = result;
      this.contries = Countries;
      this.showLoading = false;
    });
  }
}
