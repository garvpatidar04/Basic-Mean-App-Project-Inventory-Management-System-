import { Component, ViewChild } from '@angular/core';
import { ProductroutesService } from '../productroutes.service';
import { ProductformComponent } from '../productform/productform.component';
import { HttpBackend } from '@angular/common/http';

@Component({
  selector: 'app-inventoryview',
  templateUrl: './inventoryview.component.html',
  styleUrls: ['./inventoryview.component.css']
})
export class InventoryviewComponent {

  @ViewChild('pform') pform!: ProductformComponent;

  constructor(private prs: ProductroutesService){}

  triggerAdd(){
    this.pform.openAddForm();
  }

  triggerEdit(product: any){
    this.pform.openEditForm(product);
  }

  products: any;
  popupMessage: string = '';
  showPopup: boolean = false;
  isError: boolean = true;

  triggerPopup(message: string) {
    this.popupMessage = message;
    this.showPopup = true;
    setTimeout(()=>{
      this.showPopup = false;
    }, 2000);
  }

  ngOnInit(): void {
    this.loadproducts();
  }

  loadproducts() {
    this.prs.getProduct().subscribe({
      next: (data: any) => {
        this.products = data;
        this.isError = false;
      },
      error: (err: any) =>{
        this.isError = true;
        this.triggerPopup('Product not found')
      }
    });
  }

  deleteProduct(product: any) {
    this.prs.deleteProduct(product._id).subscribe({
      next: (data: any) => {
        this.triggerPopup('Product Deleted Successfully');
        this.loadproducts();
      },
      error: (err: any) => {
        this.triggerPopup('Product Deletion Failed');
      }
    });
  }

}
