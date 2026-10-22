
(function () {
    "use strict";
    console.log("reading js");

    const form = document.querySelector('#madlib-form');
    const game = document.querySelector('#game');
    const result = document.querySelector('#result');
    const story = document.querySelector('#story');
    const playAgain = document.querySelector('#play-again');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const adj1 = document.querySelector('#adj1').value;
        const noun1 = document.querySelector('#noun1').value;
        const noun2 = document.querySelector('#noun2').value;
        const number = document.querySelector('#number').value;
        const animal1 = document.querySelector('#animal1').value;
        const noun3 = document.querySelector('#noun3').value;
        const verb = document.querySelector('#verb').value;
        const noun4 = document.querySelector('#noun4').value;
        const plural1 = document.querySelector('#plural1').value;
        const plural2 = document.querySelector('#plural2').value;
        const food = document.querySelector('#food').value;
        const object = document.querySelector('#object').value;
        const adj2 = document.querySelector('#adj2').value;
        const animal2 = document.querySelector('#animal2').value;
        const noun5 = document.querySelector('#noun5').value;
        const phrase = document.querySelector('#phrase').value;
        const noun6 = document.querySelector('#noun6').value;

        const words = [
            adj1, noun1, noun2, number, animal1,
            noun3, verb, noun4, plural1, plural2,
            food, object, adj2, animal2, noun5,
            phrase, noun6
        ];

        let complete = true;

        for (let i = 0; i < words.length; i++) {
            if (words[i].trim() === '') {
                complete = false;
            }
        }

        if (complete) {

            function highlight(word) {
                const strong = document.createElement('strong');
                strong.textContent = word;
                return strong.outerHTML;
            }

            function article(word) {
                const firstLetter = word.charAt(0).toLowerCase();

                if ('aeiou'.includes(firstLetter)) {
                    return 'an';
                } else {
                    return 'a';
                }
            }

            story.innerHTML = `
                <h3>A Day at UC Davis Gone Wrong</h3>

                <p>
                    It was a ${highlight(adj1)} day at
                    UC Davis. My alarm clock was replaced by
                    ${article(noun1)} ${highlight(noun1)}.
                    I scrambled to get my backpack and hopped
                    on my ${highlight(noun2)} to class.
                </p>

                <p>
                    I showed up ${highlight(number)}
                    minutes late to class. I walked into the
                    classroom and found that my professor was
                    replaced by ${article(animal1)}
                    ${highlight(animal1)}.
                    No one seemed to care so I took a seat
                    and continued acting as if nothing had
                    happened.
                </p>

                <p>
                    My professor then leaped onto the desk
                    and exclaimed, "${highlight(noun3)}".
                    All the students in the classroom began
                    ${highlight(verb)}.
                    I decided to exit the classroom.
                </p>

                <p>
                    I ran out into the ${highlight(noun4)}
                    but the whole campus was filled with
                    ${highlight(plural1)}.
                    A ${highlight(plural2)} tossed me a
                    ${highlight(food)}.
                    I grabbed ${article(object)}
                    ${highlight(object)} to protect myself.
                </p>

                <p>
                    Things couldn't get any more
                    ${highlight(adj2)} until Chancellor May
                    rode out on a huge ${highlight(animal2)}
                    blasting ${highlight(noun5)}.
                </p>

                <p>
                    Chancellor May then turned towards me
                    and yelled, "${highlight(phrase)}!"
                </p>

                <p>
                    I then turned around and headed back
                    to my dorm. I ordered ${highlight(noun6)}.
                    I had had my fill of UC Davis for one day.
                </p>
            `;

            game.classList.add('hidden');
            result.classList.remove('hidden');

        } else {
            alert('Please fill out all the fields!');
        }
    });

    playAgain.addEventListener('click', function () {

        form.reset();

        result.classList.add('hidden');
        game.classList.remove('hidden');

    });

})();
