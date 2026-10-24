
(function(){
    'use strict';
    console.log('Reading JS');

    const myForm = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');
    const formData = document.querySelectorAll("input[type=text]");

    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        processFormData(formData);
    });

    function processFormData(formData){
        const words = [];
        const emptyfields = [];
        let counter = 0;

        for(const eachWord of formData){
            if(eachWord.value){
                words.push(eachWord.value);
            } else {
                emptyfields.push(counter);
            }
            counter++;
        }

        if(emptyfields.length > 0){
            showErrors(formData, emptyfields);
        } else {
            makeMadlib(words);
        }
    }

    function showErrors(formData, emptyfields){
        const errorId = formData[emptyfields[0]].id;
        const errorText = `Please fill out this field: ${errorId}`;

        madlib.innerHTML = errorText;

        document.querySelector(`#${errorId}`).focus();
    }

    function makeMadlib(words){

        const myText = `
            <h3>A Day at UC Davis Gone Wrong</h3>

            <p>
                It was a ${words[0]} morning at UC Davis.
                I woke up to discover that my alarm clock
                had somehow been replaced by a
                ${words[1]}.
                Confused but already late, I grabbed my
                ${words[2]} and rushed out the door.
            </p>

            <p>
                By the time I arrived on campus,
                I was already ${words[3]} minutes late
                for class. I walked into the lecture hall,
                only to discover that my professor had
                been replaced by a giant ${words[4]}!
                It stared directly at me and shouted,
                "${words[5]}!"
            </p>

            <p>
                Everyone in the classroom immediately
                started ${words[6]}. I had absolutely
                no idea what was happening, so I
                decided to leave.
            </p>

            <p>
                Unfortunately, things were even worse
                outside. The entire UC Davis campus
                was filled with ${words[7]}.
                A group of ${words[8]} was running
                across the Quad, throwing ${words[9]}
                at random students.
            </p>

            <p>
                I quickly grabbed a ${words[10]}
                to defend myself, but before I could
                escape, I heard a strange noise
                coming from behind me.
            </p>

            <p>
                I turned around and saw Chancellor May
                riding a gigantic ${words[11]}
                across campus while blasting
                ${words[12]} through enormous speakers.
            </p>

            <p>
                He stopped in front of everyone,
                raised his arms, and yelled,
                "${words[13]}!"
            </p>

            <p>
                At that moment, I realized that
                attending UC Davis was going to
                be a lot more interesting than
                I originally expected.
            </p>

            <p>
                <strong>THE END.</strong>
            </p>
        `;

        madlib.innerHTML = myText;

        for(const eachField of formData){
            eachField.value = '';
        }
    }

})();
