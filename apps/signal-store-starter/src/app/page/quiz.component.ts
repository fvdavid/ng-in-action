import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizStore } from '../store/quiz.store';

@Component({
  selector: 'app-quiz',
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
  providers: [QuizStore],
})
export class QuizComponent {
  readonly quizStore = inject(QuizStore);
}
