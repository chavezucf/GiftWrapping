import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote-separator',
  templateUrl: './quote-separator.component.html',
  styleUrls: ['./quote-separator.component.scss']
})
export class QuoteSeparatorComponent implements OnInit {
  @Input() quote: string;
  constructor() { }

  ngOnInit(): void {
  }

}
