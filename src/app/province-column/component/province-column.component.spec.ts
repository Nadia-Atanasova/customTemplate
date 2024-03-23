import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinceColumnComponent } from './province-column.component';

describe('ProvinceColumnComponent', () => {
  let component: ProvinceColumnComponent;
  let fixture: ComponentFixture<ProvinceColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvinceColumnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProvinceColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
