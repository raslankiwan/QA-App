import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsPanelComponent } from './questions-panel.component';

describe('QuestionsPanelComponent', () => {
  let component: QuestionsPanelComponent;
  let fixture: ComponentFixture<QuestionsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
