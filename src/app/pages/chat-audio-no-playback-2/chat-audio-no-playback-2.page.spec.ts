import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatAudioNoPlayback2Page } from './chat-audio-no-playback-2.page';

describe('ChatAudioNoPlayback2Page', () => {
  let component: ChatAudioNoPlayback2Page;
  let fixture: ComponentFixture<ChatAudioNoPlayback2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatAudioNoPlayback2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
