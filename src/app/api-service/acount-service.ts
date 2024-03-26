import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AcountService {
  private accountUrl: string;

  constructor(private http: HttpClient) {
    this.accountUrl = 'http://User-account-BE-env.eba-m6bz9w6x.ap-southeast-2.elasticbeanstalk.com/api/v1/account';
    //this.accountUrl = 'http://localhost:8080/api/v1/account';
  }

  public getAccount(account: any): Observable<any> {
    return this.http.post<any>(this.accountUrl + "/login", account);
  }
}
