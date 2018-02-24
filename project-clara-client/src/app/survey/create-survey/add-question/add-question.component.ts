import {Component, OnInit} from '@angular/core';
import {QuestionPrototype} from './question-prototype';
import {ChoiceEntry} from '../../domain/choice-entry';
import {Question} from '../../domain/question';

enum QuestionType {
  TextQuestion, SingleChoiceQuestion
}

@Component({
  selector: 'cla-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  question: QuestionPrototype = new QuestionPrototype();
  questions: Question[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(obj: any) {
    console.log(this.question);
    const newQuestion = new Question();
    newQuestion.id = Math.random();
    newQuestion.questionText = this.question.questionLabel;
    const questionType: QuestionType = QuestionType[this.question.type];
    newQuestion.choiceEntries = questionType === QuestionType.SingleChoiceQuestion ? this.question.choices : [];
    newQuestion.questionType = QuestionType[questionType];
    this.questions.push(newQuestion);
    console.log(newQuestion);
  }

  onSubmitSecond(obj: any) {
    console.log('Second');
  }

  addChoice() {
    this.question.choices.push(new ChoiceEntry());
  }

  removeChoice(index: number) {
    this.question.choices.splice(index, 1);
  }
}
