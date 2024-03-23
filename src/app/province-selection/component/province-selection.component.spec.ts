import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinceSelectionComponent } from './province-selection.component';

describe('ProvinceSelectionComponent', () => {
  let component: ProvinceSelectionComponent;
  let fixture: ComponentFixture<ProvinceSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvinceSelectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProvinceSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
