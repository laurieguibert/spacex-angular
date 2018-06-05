import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { LaunchEndpoints } from 'src/app/Services/LaunchEndpoint';

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

  getCompanyHistory(): Observable<CompanyHistory> {
    const endpoint = `${this.baseUrl}/info/history`;
    return this.httpClient.get<CompanyHistory>(endpoint)
    .pipe(
      catchError(this.handleError)
    );
  }

  /*getLaunches(): Observable<Launch[]> {
    const endpoint = `${this.baseUrl}/launches/all`;
    return this.httpClient.get<Launch[]>(endpoint)
    .pipe(
      catchError(this.handleError)
    );
  } */

  getAllLaunches(params: any = null): Observable<Launch[]> {
    const endpoint = `${this.baseUrl}/launches/all`;
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function(key) {
      httpParams = httpParams.append(key, params[key]);
    });

    return this.httpClient.get<Launch[]>(endpoint, {params: httpParams})
    .pipe(
      catchError(this.handleError)
    );
  }

  getMissions<T>(path: LaunchEndpoints, params: any = null): Observable<T> {
    const endpoint = `${this.baseUrl}/launches/${LaunchEndpoints[path]}`;
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function(key) {
      httpParams = httpParams.append(key, params[key]);
    });

    return this.httpClient.get<T>(endpoint, {params: httpParams})
    .pipe(
      catchError(this.handleError)
    );
  }

  getAllRockets(): Observable<Rocket[]> {
    const endpoint = `${this.baseUrl}/rockets`;
    return this.httpClient.get<Rocket[]>(endpoint)
    .pipe(
      catchError(this.handleError)
    );
  }

  getRocket(params: any = null): Observable<Rocket> {
    const endpoint = `${this.baseUrl}/rockets/${name}`;
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function(key) {
      httpParams = httpParams.append(key, params[key]);
    });

    return this.httpClient.get<Rocket>(endpoint, {params: httpParams})
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
