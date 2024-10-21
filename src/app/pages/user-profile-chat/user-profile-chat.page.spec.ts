import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserProfileChatPage } from './user-profile-chat.page';

describe('UserProfileChatPage', () => {
  let component: UserProfileChatPage;
  let fixture: ComponentFixture<UserProfileChatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
