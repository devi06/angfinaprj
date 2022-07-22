import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {

  products:any =[]
  errMessage:string =''
  constructor(productService:ProductService){
    productService.getProductInfo().subscribe(res=>this.products=res,error=>this.errMessage=error)
  }

}
