export class Book {
  id: number;
  title: string;
  author: string;
  description: string;


  constructor(title: string, author: string, description: string) {
    this.title = title;
    this.author = author;
    this.description = description;
  }
}
