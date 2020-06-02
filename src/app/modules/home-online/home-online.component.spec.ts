import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOnlineComponent } from './home-online.component';

describe('HomeOnlineComponent', () => {
  let component: HomeOnlineComponent;
  let fixture: ComponentFixture<HomeOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
