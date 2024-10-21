import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayAudioCommentsPage } from './play-audio-comments.page';

describe('PlayAudioCommentsPage', () => {
  let component: PlayAudioCommentsPage;
  let fixture: ComponentFixture<PlayAudioCommentsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayAudioCommentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
