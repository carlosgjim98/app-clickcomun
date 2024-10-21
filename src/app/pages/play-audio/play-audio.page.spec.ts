import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayAudioPage } from './play-audio.page';

describe('PlayAudioPage', () => {
  let component: PlayAudioPage;
  let fixture: ComponentFixture<PlayAudioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayAudioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
