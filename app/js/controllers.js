(function () {

'use strict';

// Controllers

angular.module('QuizApp.controllers', [])

	.controller('managerCtrl', ['quiz', function (quiz) {

		this.quiz = quiz;

		this.addQuiz = function () {
			var newQuiz = {
				id: this.quiz.all.length,
				name: this.quizTitle,
				questions: []
			}
			this.quiz.all.push(newQuiz);
			this.quizTitle = '';
		}

		this.setQuiz = function (selectedQuiz) {
			quiz.selected = selectedQuiz;
		}

	}])

	.controller('builderCtrl', ['quiz','validate', function (quiz, validate) {

		this.quiz = quiz;

		this.addQuestion = function (questions) {
			var question = {
				id: questions.length,
				text: '',
				answers: [],
				invalid: {
					question: false,
					answers: false
				},
				editing: true
			}
			questions.push(question);
			this.addAnswer(question);
			this.addAnswer(question);
		}

		this.addAnswer = function (question) {
			var answer = {
				id: question.answers.length,
				text: '',
				correct: false
			}
			question.answers.push(answer);
		}

		this.remove = function (arr, item) {
			var index = arr.indexOf(item);
			arr.splice(index, 1);
		}

		this.validateQuestion = function (question) {
			var validQuestion = validate.question(question);
			var validAnswer = validate.answers(question.answers);

			question.invalid.question = (validQuestion !== true) ? validQuestion : false;
			question.invalid.answers = (validAnswer !== true) ? validAnswer : false;

			if (validQuestion === true && validAnswer === true) question.editing = false;
		}

		this.deleteQuiz = function () {
			console.log('call api/delete');
		}

		this.saveQuiz = function () {
			console.log('call api/save');
		}

	}])

})();
