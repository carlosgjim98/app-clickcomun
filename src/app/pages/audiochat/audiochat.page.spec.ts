import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AudiochatPage } from './audiochat.page';

describe('AudiochatPage', () => {
  let component: AudiochatPage;
  let fixture: ComponentFixture<AudiochatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiochatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
