import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviSoldesComponent } from './suivi-soldes.component';

describe('SuiviSoldesComponent', () => {
  let component: SuiviSoldesComponent;
  let fixture: ComponentFixture<SuiviSoldesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiviSoldesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviSoldesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
