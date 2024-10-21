import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FollowingUserPage } from './following-user.page';

describe('FollowingUserPage', () => {
  let component: FollowingUserPage;
  let fixture: ComponentFixture<FollowingUserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowingUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
