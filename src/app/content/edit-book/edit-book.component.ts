import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

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

  ngSubmit() {
    this.bookService.updateBook(this.book.id, this.book).subscribe();
  }
}
