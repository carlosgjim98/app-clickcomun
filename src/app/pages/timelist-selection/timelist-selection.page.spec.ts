import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimelistSelectionPage } from './timelist-selection.page';

describe('TimelistSelectionPage', () => {
  let component: TimelistSelectionPage;
  let fixture: ComponentFixture<TimelistSelectionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelistSelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
