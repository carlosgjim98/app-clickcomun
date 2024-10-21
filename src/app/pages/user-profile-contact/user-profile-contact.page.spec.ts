import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserProfileContactPage } from './user-profile-contact.page';

describe('UserProfileContactPage', () => {
  let component: UserProfileContactPage;
  let fixture: ComponentFixture<UserProfileContactPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
