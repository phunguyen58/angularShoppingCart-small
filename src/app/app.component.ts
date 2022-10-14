import { Product } from './product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'shopping-cart';
  products: Product[] = [
    {
      id: '1',
      name: 'PRODUCT ITEM NUMBER 1',
      description: 'Description for product item number 1',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 5.99,
      quantity: 1
    },
    {
      id: '2c',
      name: 'PRODUCT ITEM NUMBER 2',
      description: 'Description for product item number 2',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 9.99,
      quantity: 2
    }, 
    {
      id: '1a',
      name: 'PRODUCT ITEM NUMBER 3',
      description: 'Description for product item number 3',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 19.99,
      quantity: 4
    },{
      id: '4',
      name: 'PRODUCT ITEM NUMBER 4',
      description: 'Description for product item number 4',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 15.99,
      quantity: 1
    }
  ];

  promoCodes: any[] = [
    {
      code: 'winter', 
      discount: 0.5
    }, 
    {
      code: 'spring', 
    discount: 0.1
    },
    {
      code: 'fall', 
    discount: 0.8
    },
    {
      code: 'vietnam', 
    discount: 0.9
    }
  ];

  numberItems: number = 0;
  subTotal: number = 0;
  discount: number = 0;

  ngOnInit(){
    this.reCalculate();
    this.first_subTotal = this.subTotal;
  }


  constructor(){  }
 
  reCalculate(): void{
    let numberItems = 0;
    let subTotal = 0;
    for(const product of this.products){
      numberItems += product.quantity;
      subTotal += product.price*product.quantity;
    }
    this.numberItems = numberItems;
    this.subTotal = subTotal;
  }

  removeProduct(productId: string): void {
    const index = this.products.findIndex(product => product.id === productId);
    if(index !== -1)
      this.products.splice(index, 1);
    
    this.reCalculate();
  }

  updateQuantity(obj: any): void{
    if(obj.element.value < 1 || obj.element.value > 50)
      obj.element.value = "1"
    
    const index = this.products.findIndex(product => product.id === obj.productId);
    if (index === -1)
      return;
    this.products[index].quantity = parseInt(obj.element.value);
    console.log(typeof(parseInt(obj.element.value)));
    this.reCalculate();
  }

  first_subTotal:number = 0;
  getDiscount(element: any): void{

    const index = this.promoCodes.findIndex(promo => promo.code === element.value);
    
    if(index === -1){
      this.discount = 0;
      alert("Invalid discount code");
    } else{
      this.discount=this.promoCodes[index].discount;
     } 
    this.subTotal = this.subTotal = this.first_subTotal - this.first_subTotal*this.discount;
  }
}
