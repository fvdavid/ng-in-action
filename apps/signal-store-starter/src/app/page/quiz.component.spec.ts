import { QuizStore } from './../store/quiz.store';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizComponent } from './quiz.component';

describe('QuizComponent', () => {
  let component: QuizComponent;
  let fixture: ComponentFixture<QuizComponent>;
  let quizStore: typeof QuizStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizComponent],
      providers: [QuizStore],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizComponent);
    component = fixture.componentInstance;
    // quizStore = TestBed.inject(QuizStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should inject QuizStore', () => {
    expect(component.quizStore).toBeInstanceOf(QuizStore);
  });

  it('should have quizStore property', () => {
    expect(component.quizStore).toBeDefined();
  });
});
