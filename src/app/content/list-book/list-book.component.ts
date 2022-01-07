import {Component, OnInit, ViewChild} from '@angular/core';
import {Book} from '../../model/book';
import {MatPaginator} from '@angular/material/paginator';
import {BookService} from '../../service/book.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'author', 'description', 'edit', 'delete'];
  dataSource: any;
  books: Book[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private bookService: BookService,
              private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getListBook();
  }

  getListBook() {
    this.bookService.listBook().subscribe(listBook => {
      this.books = listBook;
      this.dataSource = new MatTableDataSource<Book>(this.books);
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteBook(id: number) {
    this.bookService.deleteById(id).subscribe(() => {
      this.getListBook();
    });
  }
  openDialog(id: number) {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteBook(id);
      }
    });
  }

}
