import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import { SummaryModel } from '../model/summary.model';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { CountryModel } from '../model/country.model';
@Injectable({
    providedIn: 'root',
})
export class CountryService {
    countryApi: String = environment.countryApi;
    constructor(
        private http: HttpClient) { }

    getDetails(countryCode: string): Observable<CountryModel> {
        const url = `${this.countryApi}/v2/alpha/${countryCode}`;
        return this.http.get<CountryModel>(url).pipe(
            catchError(this.handleError<CountryModel>('getDetails'))
        );
    }
    
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}