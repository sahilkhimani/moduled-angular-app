import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdtaskComponent } from './thirdtask.component';

describe('ThirdtaskComponent', () => {
  let component: ThirdtaskComponent;
  let fixture: ComponentFixture<ThirdtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThirdtaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
