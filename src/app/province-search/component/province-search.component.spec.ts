import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinceSearchComponent } from './province-search.component';

describe('ProvinceSelectionComponent', () => {
  let component: ProvinceSearchComponent;
  let fixture: ComponentFixture<ProvinceSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvinceSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvinceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
