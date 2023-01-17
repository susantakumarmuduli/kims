import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KimsDashboardComponent } from './kims-dashboard.component';

describe('KimsDashboardComponent', () => {
  let component: KimsDashboardComponent;
  let fixture: ComponentFixture<KimsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KimsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KimsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
