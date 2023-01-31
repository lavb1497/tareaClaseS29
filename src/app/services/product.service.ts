import { Injectable } from '@angular/core';
import { collectionData, Firestore, deleteDoc } from '@angular/fire/firestore';
import { addDoc, collection, doc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private firestore:Firestore) {}

  addProduct(product:Product){
    const productRef = collection(this.firestore, 'product');
    return addDoc(productRef, product)
  }

  getProduct(): Observable<Product[]>{
    const productRef = collection(this.firestore, 'product');
    return collectionData(productRef, {idField:'id'}) as Observable<Product[]>
  }

  deletedProduct(product:Product){
    const productRef = doc(this.firestore, `product/${product.id}`);
    return deleteDoc(productRef)
  }
}
