import { Component, EventEmitter, Output } from '@angular/core';
import { ProductroutesService } from '../productroutes.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent {
  
  productdata: FormGroup;
  popupMessage: string = '';
  showPopup: boolean = false;
  isError: boolean = false;
  isEditMode: boolean = false;
  isFormVisible: boolean = false;
  currentProductId: any;

  @Output() refreshList = new EventEmitter();

  constructor(private prs: ProductroutesService){
    this.productdata = new FormGroup({
      productCode: new FormControl('', [Validators.required]),
      productName: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.min(1)])
    })
  }

  triggerPopup(msg: string, isError: boolean = false){
    this.popupMessage = msg;
    this.isError = isError;
    this.showPopup = true;
    setTimeout(() => {
      this.showPopup = false;
    }, 3000);
  }

  openAddForm() {
    this.isEditMode = false;
    this.productdata.reset();
    this.isFormVisible = true;
    this.productdata.get('productCode')?.enable();
  }

  openEditForm(product: any) {
    this.isEditMode = true;
    this.currentProductId = product._id;
    this.productdata.patchValue(product);
    this.isFormVisible = true;
    this.productdata.get('productCode')?.disable();
  }

  closeForm() {
    this.isFormVisible = false;
    this.isEditMode = false;
    this.currentProductId = null;
    this.productdata.reset();
  }


  senduser() {
    if (this.productdata.invalid) {
      this.productdata.markAllAsTouched();
      return;
    }
    const productData = this.productdata.getRawValue();

    if (this.isEditMode) {
      // --- UPDATE LOGIC ---
      const updatedProduct = { ...productData, _id: this.currentProductId };
      this.prs.updateProduct(updatedProduct).subscribe({
        next: () => {
          this.triggerPopup('Product Updated Successfully', false);
          this.finishAction();
        },
        error: (err) => {
          this.triggerPopup('Failed to update product', true);
          console.error(err);
        }
      });

    } else {
      // --- ADD LOGIC ---
      this.prs.createProduct(productData).subscribe({
        next: () => {
          this.triggerPopup('Product Added Successfully', false);
          this.finishAction();
        },
        error: (err) => {
          this.triggerPopup('Failed to add product: ' + err.error.message, true);
        }
      });
    }
  }

  finishAction() {
    this.refreshList.emit();
    this.closeForm();      
  }


}