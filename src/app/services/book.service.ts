import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../common/book';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl="http://localhost:8080/api/v1/books";
  constructor(private httpservice:HttpClient) { }
  
  getBooks():Observable<Book[]>
  {
    return this.httpservice.get<GetResponseBooks>(this.baseUrl).pipe(
      map(response => response._embedded.books)
    );
  }

}




interface GetResponseBooks{
    _embedded:{
      books:Book[];
    }
}


