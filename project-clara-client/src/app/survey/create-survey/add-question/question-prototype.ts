import {ChoiceEntry} from '../../domain/choice-entry';

export class QuestionPrototype {
  questionLabel: string = undefined;
  type: string = undefined;
  choices: ChoiceEntry[] = [];
}
