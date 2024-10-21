import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateTimeListPage } from './create-time-list.page';

describe('CreateTimeListPage', () => {
  let component: CreateTimeListPage;
  let fixture: ComponentFixture<CreateTimeListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTimeListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
