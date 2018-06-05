import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpacexApiService {
  baseUrl = 'https://api.spacexdata.com/v2';

  constructor(private httpClient: HttpClient) { }

  getCompanyInfo(): Observable<CompanyInfo> {
    const endpoint = `${this.baseUrl}/info`;
    return this.httpClient.get<CompanyInfo>(endpoint)
    .pipe(
      catchError(this.handleError)
    );
  }

getLaunches(): Observable<Launch[]> {
  const endpoint = `${this.baseUrl}/launches/all`;
  return this.httpClient.get<Launch[]>(endpoint)
  .pipe(
    catchError(this.handleError)
  );
}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
