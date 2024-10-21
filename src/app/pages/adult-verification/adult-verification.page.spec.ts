import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdultVerificationPage } from './adult-verification.page';

describe('AdultVerificationPage', () => {
  let component: AdultVerificationPage;
  let fixture: ComponentFixture<AdultVerificationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdultVerificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
