import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentConfigPage } from './content-config.page';

describe('ContentConfigPage', () => {
  let component: ContentConfigPage;
  let fixture: ComponentFixture<ContentConfigPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentConfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
