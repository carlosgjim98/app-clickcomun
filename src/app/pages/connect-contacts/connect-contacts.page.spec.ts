import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConnectContactsPage } from './connect-contacts.page';

describe('ConnectContactsPage', () => {
  let component: ConnectContactsPage;
  let fixture: ComponentFixture<ConnectContactsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectContactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
