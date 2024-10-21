import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyTimelistsPage } from './my-timelists.page';

describe('MyTimelistsPage', () => {
  let component: MyTimelistsPage;
  let fixture: ComponentFixture<MyTimelistsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTimelistsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
