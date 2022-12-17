import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent {
  constructor(
    private router: Router,
    private serviceProduct: ProductService,
    private route: ActivatedRoute
  ) {}
  product!:Product
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.serviceProduct.readbyId(id!).subscribe((product) => {
      this.product = product;
    });
  }
  updateProduct(): void {
    this.serviceProduct.update(this.product).subscribe(()=>{
      this.serviceProduct.showMessage('Produto Atualizado!')
      this.router.navigate(['/products'])
    })
  }
  cancel(): void {
    this.router.navigate(['/products']);
  }
}
