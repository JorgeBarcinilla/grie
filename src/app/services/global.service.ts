import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http : HttpClient) { }

  getQuery(query: string, type: string, authorization: boolean, body?: any) {
    const url = environment.apiUrl + query;
    let token = localStorage.getItem('token');
    
    let headers: any = new HttpHeaders({'Accept': 'application/json' });
    if (authorization) {
        if ( token != undefined && token != null) {
            headers = headers.append('Authorization',token);
        }
    }
    if (type == 'get') {
        return this.http.get(url, { headers: headers })
    }
    else if (type == 'post') {
        return this.http.post(url, body, { headers: headers });
    }
    else if (type == 'delete') {
        let httpOptions = { headers: headers, body: body }
        return this.http.delete(url, httpOptions)
    }
    else {
        return this.http.put(url, body, { headers: headers });
    }
  }


}
