import {
  deepComputed,
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { AnswerStatus, initialState } from '../state/quiz.state';

export const QuizStore = signalStore(
  withState(initialState),

  withComputed(({ questions }) => {
    return {
      score: deepComputed(() =>
        questions().reduce(
          (score, question) => ({
            ...score,
            [question.status]: score[question.status] + 1,
          }),
          { unanswered: 0, correct: 0, incorrect: 0 }
        )
      ),
    };
  }),

  withMethods((store) => {
    return {
      answer(questionId: number, choiceId: number): void {
        patchState(store, ({ questions }) => ({
          questions: questions.map((q) => {
            if (q.id === questionId) {
              const status: AnswerStatus =
                q.answer === choiceId ? 'correct' : 'incorrect';
              return {
                ...q,
                status,
              };
            }

            return q;
          }),
        }));
      },

      restart(): void {
        patchState(store, initialState);
      },
    };
  }),

  withHooks({
    onInit(store) {
      console.log(`${store.title()} has been initialized.`);
    },
  })
);
