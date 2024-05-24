import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RpcService {
  private apiUrl = 'https://api.drrise.idener.ai';

  constructor(private http: HttpClient) {}

  rpcRequest(
    id: string,
    callType: string,
    requestBody: any
  ): Observable<string> {
    const url = `${this.apiUrl}/${id}/${callType}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/json',
    });
    return this.http.post<string>(url, requestBody, { headers });
  }
}
