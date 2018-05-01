import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  // title: string = 'Clé USB 16Go';
  // itemCount: number = 0;

  // Many products
  // products = ['Clé USB 2Go', 'Clé USB 4Go', 'Souris sans fil'];
  
  // Version array of objects :
  /*
  products = [
    { qty: 0, name: 'Clé USB 2Go' },
    { qty: 0, name: 'Clé USB 4Go' },
    { qty: 0, name: 'Souris bluetooth' }
  ];*/
  
  // Using service
  // v1 : sami
  // products = new ProductService().getProducts();

  // v2 : mosh
  /*
  products;
  constructor() {
    let service = new ProductService();
    this.products = service.getProducts();
  }
  */

  // v3 : dependency injection
  products;
  n=0;
  constructor(service: ProductService) {
    this.products = service.getProducts();
    this.n = this.products.length;
  }
  /*
  génère une erreur : No provider for ProductService!
  faut inscrire (register) ProductService dans le module -> c'est un provider
  dans app.module on doit aussi importer le service EN GARDANT l'import ici
  (voir video mosh@1h40)
   */

  /*
  addItem() {
    this.itemCount++;
  }*/
  total_qty = 0;
  addItem(product) {
    product.qty++;
    let total_qty = 0;
    for (let i = 0; i < this.products.length; i++)
      total_qty += this.products[i].qty;
    this.total_qty = total_qty;
  }
}
