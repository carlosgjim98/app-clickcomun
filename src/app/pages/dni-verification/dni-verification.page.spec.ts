import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DniVerificationPage } from './dni-verification.page';

describe('DniVerificationPage', () => {
  let component: DniVerificationPage;
  let fixture: ComponentFixture<DniVerificationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DniVerificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
