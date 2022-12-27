import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Igif } from '../interface/igif';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  url:string="https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/?author_id=2008";
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private httpClient: HttpClient
  ) { }

getGifs(){
  return this.httpClient.get(`${this.url}`);
}
newGif(data: Igif): Observable<any> {
  let urlB = `${this.url}/`;
  return this.httpClient.post(urlB, data);
}

deleteGif(id: number): Observable<any> {
  let url = `${this.url}/delete/${id}`;
  return this.httpClient
    .delete(url, { headers: this.headers });
}

}
