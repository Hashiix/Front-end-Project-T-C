import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOfflineComponent } from './home-offline.component';

describe('HomeOfflineComponent', () => {
  let component: HomeOfflineComponent;
  let fixture: ComponentFixture<HomeOfflineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeOfflineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOfflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
