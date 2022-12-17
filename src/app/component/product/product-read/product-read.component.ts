import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css'],
})
export class ProductReadComponent implements OnInit {
  constructor(private productService: ProductService) {}
  products!: Product[];
  displayedColumns=['id','name','price','action']
  ngOnInit(): void {
    //metodo chamado quando o componete é inicializado
    this.productService.read().subscribe((products) => {
      this.products = products;
    });
  }
}
