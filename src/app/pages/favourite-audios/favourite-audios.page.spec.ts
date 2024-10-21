import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavouriteAudiosPage } from './favourite-audios.page';

describe('FavouriteAudiosPage', () => {
  let component: FavouriteAudiosPage;
  let fixture: ComponentFixture<FavouriteAudiosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteAudiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
