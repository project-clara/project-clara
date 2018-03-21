import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {QuestionPrototype} from './question-prototype';
import {ChoiceEntry} from '../../domain/choice-entry';
import {Question} from '../../domain/question';
import {QuestionType} from '../../domain/question-type';

@Component({
  selector: 'cla-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  question: QuestionPrototype = new QuestionPrototype();
  questions: Question[] = [];

  @Output() newQuestionStream = new EventEmitter<Question>();

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
    newQuestion.questionType = questionType;
    this.questions.push(newQuestion);
    this.newQuestionStream.next(newQuestion);
    console.log(newQuestion);
  }



  addChoice() {
    this.question.choices.push(new ChoiceEntry());
  }

  removeChoice(index: number) {
    this.question.choices.splice(index, 1);
  }
}
