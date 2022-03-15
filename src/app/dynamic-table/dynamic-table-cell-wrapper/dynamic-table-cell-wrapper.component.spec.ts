import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTableCellWrapperComponent } from './dynamic-table-cell-wrapper.component';

describe('DynamicTableCellWrapperComponent', () => {
  let component: DynamicTableCellWrapperComponent;
  let fixture: ComponentFixture<DynamicTableCellWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicTableCellWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTableCellWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
