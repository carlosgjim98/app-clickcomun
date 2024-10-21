import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateTimeList2Page } from './create-time-list2.page';

describe('CreateTimeList2Page', () => {
  let component: CreateTimeList2Page;
  let fixture: ComponentFixture<CreateTimeList2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTimeList2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
