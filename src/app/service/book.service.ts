import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {Book} from '../model/book';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  API_BOOK = environment.API_URL + '/books';

  constructor(private http: HttpClient) {
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.API_BOOK, book);
  }

  listBook(): Observable<Book[]> {
    return this.http.get<Book[]>(this.API_BOOK);
  }

  findById(id: number): Observable<Book> {
    return this.http.get<Book>(this.API_BOOK + `/` + id);
  }

  updateBook(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>(this.API_BOOK + `/` + id, book);
  }

  deleteById(id: number): Observable<Book> {
    return this.http.delete<Book>(this.API_BOOK + `/` + id);
  }
}
