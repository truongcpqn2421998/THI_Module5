import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book: Book;

  constructor(private bookService: BookService,
              private activeRouter: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(bookId => {
        const id = +bookId.get('id');
        this.bookService.findById(id).subscribe(book => {
            this.book = book;
          }
        );
      }
    );
  }
}
