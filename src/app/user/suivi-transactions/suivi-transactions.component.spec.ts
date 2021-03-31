import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviTransactionsComponent } from './suivi-transactions.component';

describe('SuiviTransactionsComponent', () => {
  let component: SuiviTransactionsComponent;
  let fixture: ComponentFixture<SuiviTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiviTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
