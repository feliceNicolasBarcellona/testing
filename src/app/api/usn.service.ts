import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsnService {

  private apiUrl =  'https://api.drrise.idener.ai'

  constructor(private http: HttpClient) { }

  getAllUsn(){
    return this.http.get(`${this.apiUrl}/usn`)
  }

  getUsnInfoByUuid(id: string){
    return this.http.get(`${this.apiUrl}/usn/${id}`)
  }

  getAllUsnTelemetryByUuid(id: string){
    return this.http.get(`${this.apiUrl}/usn/${id}/telemetry`)
  }

  getUsnByUuidAndKey(id: string, key: string){
    return this.http.get(`${this.apiUrl}/usn/${id}//telemetry/${key}`)
  }

  postUsnByUuid(id: string){
    return this.http.post(`${this.apiUrl}/usn/${id}/telemetry`, {id} )
  }

  
}
