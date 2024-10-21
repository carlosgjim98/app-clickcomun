import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatAudioNoPlaybackPage } from './chat-audio-no-playback.page';

describe('ChatAudioNoPlaybackPage', () => {
  let component: ChatAudioNoPlaybackPage;
  let fixture: ComponentFixture<ChatAudioNoPlaybackPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatAudioNoPlaybackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
