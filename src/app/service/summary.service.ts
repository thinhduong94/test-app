import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import { SummaryModel } from '../model/summary.model';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class SummaryService {
    baseUrl: String = environment.baseUrl;
    constructor(
        private http: HttpClient) { }

    getSummary(): Observable<SummaryModel> {
        const url = `${this.baseUrl}/summary`;
        return this.http.get<SummaryModel>(url).pipe(
            catchError(this.handleError<SummaryModel>('getSummary'))
        );
    }
    
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}