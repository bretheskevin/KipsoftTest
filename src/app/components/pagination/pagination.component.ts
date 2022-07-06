import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  currentPage: number = 2;
  totalPages: number = 12;

  constructor() { }

  ngOnInit(): void {
  }

  previousPage(): void {
    this.currentPage--;
  }

  nextPage(): void {
    this.currentPage++;
  }
}
