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
  /**
   * Company endpoint
   */
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
  /**
   * Launches endpoint
   */
  getPastLaunches(params: any = null) {
    return this.GetMissions<Launch[]>(null, params);
  }
  getUpcomingLaunches(params: any = null) {
    return this.GetMissions<Launch[]>(LaunchEndpoints.Upcoming, params);
  }
  getNextLaunch(): Observable<Launch> {
    return this.GetMissions<Launch>(LaunchEndpoints.Next);
  }
  getLatestLaunch(): Observable<Launch> {
    return this.GetMissions<Launch>(LaunchEndpoints.Latest);
  }
  getAllLaunches(): Observable<Launch[]> {
    return this.GetMissions<Launch[]>(LaunchEndpoints.All);
  }
  getLaunchDetails(flight_number: number) {
    return this.GetMissions<Launch>(LaunchEndpoints.All, {flight_number: flight_number});
  }
  /**
   * Rockets endpoint
   */
  getAllRockets(): Observable<Rocket[]> {
    return this.GetRockets<Rocket[]>();
  }
  getRocket(rocketId: string): Observable<Rocket> {
    return this.GetRockets<Rocket>(rocketId);
  }
  /**
   * Capsules endpoint
   */
  getAllCapsules(): Observable<Capsule[]> {
    return this.GetCapsules<Capsule[]>();
  }
  getCapsule(capsuleId: string): Observable<Capsule> {
    return this.GetCapsules<Capsule>(capsuleId);
  }

  /**
   * Launchpads endpoint
   */
  getAllLaunchpads(): Observable<Launchpad[]> {
    return this.GetLaunchpad<Launchpad[]>();
  }
  getLaunchpad(launchpadId: string): Observable<Launchpad> {
    return this.GetLaunchpad<Launchpad>(launchpadId);
  }

  /**
   * Generic function for launches
   * @param path
   * @param params
   */
  private GetMissions<T>(path: LaunchEndpoints = null, params: any = null): Observable<T> {
    let endpoint = `${this.baseUrl}/launches`;
    if (path !== null) {
      endpoint = `${this.baseUrl}/launches/${LaunchEndpoints[path]}`;
    }
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(function(key) {
        httpParams = httpParams.append(key, params[key]);
      });
    }
    return this.httpClient.get<T>(endpoint, {params: httpParams})
      .pipe(
        catchError(this.handleError)
      );
  }
  /**
   * Generic function for rockets
   * @param rocketId
   */
  private GetRockets<T>(rocketId: string = null): Observable<T> {
    let endpoint = `${this.baseUrl}/rockets`;
    if (rocketId !== null) {
      endpoint = `${this.baseUrl}/rockets/${rocketId}`;
    }
    return this.httpClient.get<T>(endpoint)
      .pipe(
        catchError(this.handleError)
      );
  }
  /**
   * Generic function for capsules
   * @param capsuleId
   */
  private GetCapsules<T>(capsuleId: string = null): Observable<T> {
    let endpoint = `${this.baseUrl}/capsules`;
    if (capsuleId !== null) {
      endpoint = `${this.baseUrl}/capsules/${capsuleId}`;
    }
    return this.httpClient.get<T>(endpoint)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Generic function for launchpad
   * @param launchpadId
   */
  private GetLaunchpad<T>(launchpadId: string = null): Observable<T> {
    let endpoint = `${this.baseUrl}/launchpads`;
    if (launchpadId !== null) {
      endpoint = `${this.baseUrl}/launchpads/${launchpadId}`;
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
