import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/interface';
import { ProductService } from 'src/app/services/product.service';
import { FormDialogComponent } from '../form-dialog/form-dialog.component';
import  { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  product!:Product[];

  constructor(private matDialog:MatDialog, private productServices:ProductService) {}

  openDialog(){
    this.matDialog.open(FormDialogComponent,{
      width: '350px',
    })
  }

  ngOnInit(): void {

    this.productServices.getProduct().subscribe(product => {
      this.product = product
    })
  }

  onClickDeleted(product : Product){
    const response = this.productServices.deletedProduct(product);
    console.log(response)
  }

}

