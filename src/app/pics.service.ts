import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PicsService {
  constructor(private http: HttpClient) {}
  getdata(texto: string) {
    let url =
      'https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25&lang=es&q=' +
      texto;
    return this.http.get(url);
  }
  getCategory(texto: string) {
    let url =
      'https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25&category=' +
      texto;
    return this.http.get(url);
  }
}
