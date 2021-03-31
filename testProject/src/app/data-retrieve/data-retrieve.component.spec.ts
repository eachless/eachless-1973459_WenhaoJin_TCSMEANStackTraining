import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRetrieveComponent } from './data-retrieve.component';

describe('DataRetrieveComponent', () => {
  let component: DataRetrieveComponent;
  let fixture: ComponentFixture<DataRetrieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataRetrieveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataRetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
