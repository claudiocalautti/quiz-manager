(function () {

'use strict';

// Services

angular.module('QuizApp.services', [])

	.value('quiz', {
		all: [],
		selected: null
	})

	.factory('validate', [function(){

		var factory = {
			question: checkQuestion,
			answers: checkAnswers
		}

		function checkQuestion(question) {
			return (question.text) ? true : getMessage('emptyQuestion');
		}

		function checkAnswers(answers) {
			var countCorrect = 0;
			var answersLength = answers.length;

			if (answersLength === 0) return getMessage('noAnswers');

			for (var answer, i = 0; i < answersLength; i ++) {
				answer = answers[i];
				if (answer.correct) countCorrect ++;
				if (answer.text === '') return getMessage('emptyAnswers');
			}

			if (countCorrect === answersLength) return getMessage('allCorrect');

			if (countCorrect === 0) return getMessage('noneCorrect');

			return true;
		}

		function getMessage(type) {
			switch (type) {
				case 'emptyQuestion':
					return 'The question is empty, please write something.';
					break;
				case 'noAnswers':
					return 'Not enough answers, there must be at least 2 answers, please add answer.';
					break;
				case 'emptyAnswers':
					return 'One or more answers are empty, please fill empty answers.';
					break;
				case 'allCorrect':
					return 'All answers are marked as correct, uncheck at least one answer.';
					break;
				case 'noneCorrect':
					return 'There isn\'t any correct answer, please mark at least one as a correct.';
					break;
			}
		}

		return factory;
	}])

})();
