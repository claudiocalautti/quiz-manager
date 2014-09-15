(function () {

'use strict';

// Controllers

angular.module('QuizApp.controllers', [])

	.controller('quizCtrl', ['validate', function (validate) {

		this.data = {
			id: 0,
			title: 'Quiz Name',
			questions: [
				// {
				// 	id: 0,
				// 	text: 'I ________________ from France.',
				// 	answers: [
				// 		{
				// 			id: 0,
				// 			text: 'is',
				// 			correct: false
				// 		},
				// 		{
				// 			id: 1,
				// 			text: 'are',
				// 			correct: false
				// 		},
				// 		{
				// 			id: 2,
				// 			text: 'am',
				// 			correct: true
				// 		},
				// 		{
				// 			id: 3,
				// 			text: 'be',
				// 			correct: false
				// 		}
				// 	],
				// 	invalid: {
				// 		question: false,
				// 		answers: false
				// 	},
				// 	editing: false
				// }
			]
		}

		this.warning = {
			active: false,
			message: ''
		}

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

		this.saveQuiz = function () {
			console.log('call api/save');
		}

	}])

})();
