import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectsCatalogComponent } from './objects-catalog.component';

describe('ObjectsCatalogComponent', () => {
  let component: ObjectsCatalogComponent;
  let fixture: ComponentFixture<ObjectsCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ObjectsCatalogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectsCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
