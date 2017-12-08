import { QuestionType } from './question-type';
import { ChoiceEntry } from './choice-entry';

export class Question {
  id: number
  questionText: string;
  description: string;
  mandatory: boolean;
  questionType: QuestionType;
  choiceEntries: ChoiceEntry[];
}
