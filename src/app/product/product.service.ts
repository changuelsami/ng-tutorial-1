// This is a service, no directive , no import .. just a flat Typescript class
export class ProductService {

  constructor() { }
    getProducts() {
      return [
        { qty: 0, name: 'Clé USB 2Go' },
        { qty: 0, name: 'Clé USB 4Go' },
        { qty: 0, name: 'Souris bluetooth' }

      ];
    }
}
