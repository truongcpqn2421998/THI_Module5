import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  form: any = {};
  status = 'Please fill in the form to create Book!';
  book: Book;


  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
  }

  ngSubmit() {
    this.book = new Book(
      this.form.title,
      this.form.author,
      this.form.description
    );
    this.bookService.createBook(this.book).subscribe();
  }
}
