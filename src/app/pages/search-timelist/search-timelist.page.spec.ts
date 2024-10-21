import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchTimelistPage } from './search-timelist.page';

describe('SearchTimelistPage', () => {
  let component: SearchTimelistPage;
  let fixture: ComponentFixture<SearchTimelistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTimelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
