import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswersPanelComponent } from './answers-panel.component';

describe('AnswersPanelComponent', () => {
  let component: AnswersPanelComponent;
  let fixture: ComponentFixture<AnswersPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswersPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswersPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
