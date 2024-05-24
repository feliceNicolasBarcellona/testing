import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsnService {
  private apiUrl = 'https://api.drrise.idener.ai';

  constructor(private http: HttpClient) {}

  getAllUsn() {
    const headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      accept: 'application/json',
    });
    return this.http.get(`${this.apiUrl}/usn`, { headers });
  }

  getUsnInfoByUuid(id: string) {
    const headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      accept: 'application/json',
    });
    return this.http.get(`${this.apiUrl}/usn/${id}`, { headers });
  }

  getAllUsnTelemetryByUuid(id: string) {
    const headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      accept: 'application/json',
    });
    return this.http.get(`${this.apiUrl}/usn/${id}/telemetry`, { headers });
  }

  getUsnByUuidAndKey(id: string, key: string) {
    const headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      accept: 'application/json',
    });
    return this.http.get(`${this.apiUrl}/usn/${id}/telemetry/${key}`, {
      headers,
    });
  }

  postUsnByUuid(id: string): Observable<any> {
    const headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      accept: 'application/json',
    });
    return this.http.post(
      `${this.apiUrl}/usn/${id}/telemetry`,
      { id },
      { headers }
    );
  }
}
