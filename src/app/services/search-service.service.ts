import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Search } from '../interfaces/search.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) { }

  getData(seachTerm: any):Observable<Search>{
    return this.http.get<Search>(this.url+'?q='+seachTerm)
  }
}
