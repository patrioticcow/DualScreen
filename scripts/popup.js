'use strict';

var port = null;

function setPort() {
	chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
		console.log(tabs);
		port = chrome.tabs.connect(tabs[0].id, {name: "DISQUS_CONTENTSCRIPT"});

		//for (var i = 0; i < tabs.length; i++) {}
	});
}

setPort();

$(document).ready(function () {
	$('#get_quotes').html(quotes());

	$('.chat_button').on('click', function () {
		var action = $(this).data('action');
		setPort();
		console.log(port);
		if (port) {
			port.postMessage({key: action, value: true});
		}
	});
});

function quotes() {
	var quotesArray = [
		'The true sign of intelligence is not knowledge but imagination. Albert Einstein',
		'Information is not knowledge. Albert Einstein',
		'Knowledge of what is does not open the door directly to what should be. Albert Einstein',
		'Real knowledge is to know the extent of one\'s ignorance. Marcus Garvey',
		'A people without the knowledge of their past history, origin and culture is like a tree without roots. Confucius',
		'Ignorance is the curse of God; knowledge is the wing wherewith we fly to heaven. William Shakespeare',
		'He who knows nothing is closer to the truth than he whose mind is filled with falsehoods and errors. Thomas Jefferson',
		'Knowledge is love and light and vision. Helen Keller',
		'If money is your hope for independence you will never have it. The only real security that a man will have in this world is a reserve of knowledge, experience, and ability. Henry Ford',
		'I was bold in the pursuit of knowledge, never fearing to follow truth and reason to whatever results they led, and bearding every authority which stood in their way. Thomas Jefferson',
		'When you know a thing, to hold that you know it, and when you do not know a thing, to allow that you do not know it - this is knowledge. Confucius',
		'Pain and foolishness lead to great bliss and complete knowledge, for Eternal Wisdom created nothing under the sun in vain. Khalil Gibran',
		'To know what you know and what you do not know, that is true knowledge. Khalil Gibran',
		'Knowledge is knowing that we cannot know. Ralph Waldo Emerson',
		'No man can reveal to you nothing but that which already lies half-asleep in the dawning of your knowledge. Khalil Gibran',
		'Human behavior flows from three main sources: desire, emotion, and knowledge. Plato',
		'Perplexity is the beginning of knowledge. Khalil Gibran',
		'To know, is to know that you know nothing. Socrates',
		'It is not when truth is dirty, but when it is shallow, that the lover of knowledge is reluctant to step into its waters. Friedrich Nietzsche',
		'Opinion is the medium between knowledge and ignorance. Plato',
		'And what, Socrates, is the food of the soul? Surely, I said, knowledge is the food of the soul. Plato',
		'Knowledge without justice ought to be called cunning rather than wisdom. Plato',
		'The learning and knowledge that we have, is, at the most, but little compared with that of which we are ignorant. Plato',
		'Entire ignorance is not so terrible or extreme an evil, and is far from being the greatest of all; too much cleverness and too much learning, accompanied with ill bringing-up, are far more fatal. Plato' ,
		'To know that we know what we know, and to know that we do not know what we do not know, that is true knowledge. Nicolaus Copernicus'
	];

	return quotesArray[Math.floor(Math.random() * quotesArray.length)];
}