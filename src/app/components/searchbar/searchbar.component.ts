import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  public content: string = ""

  constructor() { }

  ngOnInit(): void {

  }

  searchCompany(newContent: string): void {
    this.content = newContent;
    console.log(this.content);
    this.content = "";
  }
}
