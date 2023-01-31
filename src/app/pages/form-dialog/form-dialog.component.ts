import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormControl, FormGroup } from '@angular/forms';

export interface DialogData {
  code:string;
  description:string;
  price:number
}

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css']
})
export class FormDialogComponent implements OnInit{

  formRegister!:FormGroup;

  constructor (private productService:ProductService){

    this.formRegister = new FormGroup({
      code: new FormControl(),
      description: new FormControl(),
      price: new FormControl()
    })
  }

  ngOnInit(): void {

  }

  async onSubmit(){
    console.log(this.formRegister.value);
    const response = this.productService.addProduct(this.formRegister.value)
    console.log(response)
  }
}
