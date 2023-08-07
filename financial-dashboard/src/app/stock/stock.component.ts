import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  stock = {
    name: 'Apple Inc.',
    symbol: 'AAPL',
    price: 150.00
  };

  constructor() { }

  ngOnInit(): void {
  }

}
