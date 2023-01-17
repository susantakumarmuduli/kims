import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgListComponent } from './ug-list.component';

describe('UgListComponent', () => {
  let component: UgListComponent;
  let fixture: ComponentFixture<UgListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UgListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
