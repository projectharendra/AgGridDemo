import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgStatusBarComponent } from './ag-status-bar.component';

describe('AgStatusBarComponent', () => {
  let component: AgStatusBarComponent;
  let fixture: ComponentFixture<AgStatusBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgStatusBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgStatusBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
