import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchContactPage } from './search-contact.page';

describe('SearchContactPage', () => {
  let component: SearchContactPage;
  let fixture: ComponentFixture<SearchContactPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
