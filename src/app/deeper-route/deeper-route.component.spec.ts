import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeeperRouteComponent } from './deeper-route.component';

describe('DeeperRouteComponent', () => {
  let component: DeeperRouteComponent;
  let fixture: ComponentFixture<DeeperRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeeperRouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeeperRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
