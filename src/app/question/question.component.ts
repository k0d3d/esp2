import { Component, OnInit } from '@angular/core';

import { CoreService } from '../core/core.service'

import { QuestionService } from './question.service'

import { Question } from './question.model'


@Component({
  selector: 'app-questions',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  
  public form: any
  protected platformQuestions: Question[]
  
  constructor(
    protected qtnService: QuestionService
    ) { 
      this.qtnService.getPlatformQuestions()
      .then(res => {
        try {
          const jres = JSON.parse(res._body)
          this.platformQuestions = jres.map(oneQ => { 
            return new Question(
              oneQ.title,
              oneQ.assignee,
              oneQ.tags,
              oneQ.author,
              oneQ.enabled,
              oneQ.addedOn
            )
          })
        } catch (e) {
          console.log(e)
          return
        }

      },
      err => console.log(err))
      this.form = {
        questions: '',
        assignee: '',
        tags: ''
      }
  }

  saveQuestion (form) {
      var line_of = [];
  
      if (form.questions && form.questions.length) {
        line_of = form.questions.split('\n');
        line_of.forEach(eachQuestion => {
          if (eachQuestion.length) {
            let q = new Question(
            eachQuestion,
            form.assignee,
            form.tags
            )
            this.qtnService.saveUserQuestion(q)
          }
        })
      }
  }



  ngOnInit() {
  }

}
