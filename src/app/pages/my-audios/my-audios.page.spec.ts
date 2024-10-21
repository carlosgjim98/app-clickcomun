import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyAudiosPage } from './my-audios.page';

describe('MyAudiosPage', () => {
  let component: MyAudiosPage;
  let fixture: ComponentFixture<MyAudiosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAudiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
