import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryviewComponent } from './inventoryview.component';

describe('InventoryviewComponent', () => {
  let component: InventoryviewComponent;
  let fixture: ComponentFixture<InventoryviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryviewComponent]
    });
    fixture = TestBed.createComponent(InventoryviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
