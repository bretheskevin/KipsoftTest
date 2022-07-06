import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() currentPage?: number;
  @Input() totalPages?: number;
  @Output() pageChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.checkRequiredFields()
  }

  previousPage(): void {
    this.currentPage!--;
    this.pageChange.emit(this.currentPage);
  }

  nextPage(): void {
    this.currentPage!++;
    this.pageChange.emit(this.currentPage);
  }

  checkRequiredFields(): void {
    if (this.currentPage === null) {
      throw new Error("Attribute 'currentPage' is required");
    }
    if (this.totalPages === null) {
      throw new Error("Attribute 'totalPages' is required");
    }
  }
}
