import {ChoiceEntry} from './choice-entry';
import {QuestionType} from './question-type';

export class Question {
  id: number
  questionText: string;
  description: string;
  mandatory: boolean;
  questionType: QuestionType;
  choiceEntries: ChoiceEntry[];
}
