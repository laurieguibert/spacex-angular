import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { LaunchEndpoints } from 'src/app/services/LaunchEndpoint';

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

  getAllLaunches(): Observable<Launch[]> {
    return this.GetMissions<Launch[]>(LaunchEndpoints.All);
  }

  getAllRockets(): Observable<Rocket[]> {
    return this.GetRockets<Rocket[]>();
  }

  getRocket(rocketId : string) : Observable<Rocket> {
    return this.GetRockets<Rocket>(rocketId);
  }

  getAllCapsules(): Observable<Capsule[]> {
    return this.GetCapsules<Capsule[]>();
  }

  getCapsule(capsuleId : string) : Observable<Capsule> {
    return this.GetCapsules<Capsule>(capsuleId);
  }

  private GetMissions<T>(path: LaunchEndpoints = null, params: any = null): Observable<T> {
    let endpoint = `${this.baseUrl}/launches`;
    if(path !== null){
      endpoint = `${this.baseUrl}/launches/${LaunchEndpoints[path]}`;
    }
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function(key) {
      httpParams = httpParams.append(key, params[key]);
    });

    return this.httpClient.get<T>(endpoint, {params: httpParams})
    .pipe(
      catchError(this.handleError)
    );
  }

  private GetRockets<T>(rocketId : string = null) : Observable<T>{
    let endpoint = `${this.baseUrl}/rockets`;
    if(rocketId !== null){
      endpoint = `${this.baseUrl}/rockets/${rocketId}`;
    }

    return this.httpClient.get<T>(endpoint)
    .pipe(
      catchError(this.handleError)
    );
  }

  private GetCapsules<T>(capsuleId : string = null) : Observable<T>{
    let endpoint = `${this.baseUrl}/capsules`;
    if(capsuleId !== null){
      endpoint = `${this.baseUrl}/capsules/${capsuleId}`;
    }

    return this.httpClient.get<T>(endpoint)
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
