
(function () {
    "use strict";
    console.log("reading js");

    const form = document.querySelector('#madlib-form');
    const game = document.querySelector('#game');
    const result = document.querySelector('#result');
    const story = document.querySelector('#story');
    const playAgain = document.querySelector('#play-again');
    const errorMessage = document.querySelector('#error-message');

    const inputIds = [
        'adj1', 'noun1', 'noun2', 'number', 'animal1',
        'noun3', 'verb', 'noun4', 'plural1', 'plural2',
        'food', 'object', 'adj2', 'animal2', 'noun5',
        'phrase', 'noun6'
    ];

    function addParagraph(parts) {
        const paragraph = document.createElement('p');

        parts.forEach(function (part) {
            if (typeof part === 'string') {
                paragraph.appendChild(document.createTextNode(part));
            } else {
                const strong = document.createElement('strong');
                strong.textContent = part.word;
                paragraph.appendChild(strong);
            }
        });

        story.appendChild(paragraph);
    }

    function word(value) {
        return { word: value };
    }

    function getArticle(value) {
        const firstLetter = value.charAt(0).toLowerCase();

        if ('aeiou'.includes(firstLetter)) {
            return 'an';
        }

        return 'a';
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const values = {};

        inputIds.forEach(function (id) {
            values[id] = document.querySelector('#' + id).value.trim();
        });

        const emptyField = inputIds.find(function (id) {
            return values[id] === '';
        });

        if (emptyField) {
            errorMessage.textContent = 'Please fill out all the fields before creating your story!';
            document.querySelector('#' + emptyField).focus();
            return;
        }

        errorMessage.textContent = '';

        const {
            adj1, noun1, noun2, number, animal1, noun3,
            verb, noun4, plural1, plural2, food, object,
            adj2, animal2, noun5, phrase, noun6
        } = values;

        story.replaceChildren();

        const heading = document.createElement('h3');
        heading.textContent = 'A Day at UC Davis Gone Wrong';
        story.appendChild(heading);

        addParagraph([
            'It was a ', word(adj1),
            ' day at UC Davis. My alarm clock was replaced by ',
            getArticle(noun1) + ' ', word(noun1),
            '. I scrambled to get my backpack and hopped on my ',
            word(noun2), ' to class.'
        ]);

        addParagraph([
            'I showed up ', word(number),
            ' minutes late to class. I walked into the classroom and found that my professor was replaced by ',
            getArticle(animal1) + ' ', word(animal1),
            '. No one seemed to care so I took a seat and continued acting as if nothing had happened.'
        ]);

        addParagraph([
            'My professor then leaped onto the desk and exclaimed, “',
            word(noun3),
            '!” All the students in the classroom began ',
            word(verb),
            '. I decided to exit the classroom.'
        ]);

        addParagraph([
            'I ran out into the ', word(noun4),
            ' but the whole campus was filled with ',
            word(plural1),
            '. A ', word(plural2),
            ' tossed me a ', word(food),
            '. I grabbed ', getArticle(object) + ' ',
            word(object), ' to protect myself.'
        ]);

        addParagraph([
            'Things couldn’t get any more ', word(adj2),
            ' until Chancellor May rode out on a huge ',
            word(animal2),
            ' blasting ', word(noun5), '.'
        ]);

        addParagraph([
            'Chancellor May then turned towards me and yelled, “',
            word(phrase), '!”'
        ]);

        addParagraph([
            'I then turned around and headed back to my dorm. I ordered ',
            word(noun6),
            '. I had had my fill of UC Davis for one day.'
        ]);

        game.classList.add('hidden');
        result.classList.remove('hidden');

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    playAgain.addEventListener('click', function () {
        form.reset();
        story.replaceChildren();
        errorMessage.textContent = '';

        result.classList.add('hidden');
        game.classList.remove('hidden');

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

})();
