
(function () {
    'use strict';

    const places = {
        bridge: {
            name: 'Tower Bridge',
            tag: 'EAST LONDON',
            text: 'Exploring Tower Bridge beside the Thames.',
            photos: ['IMG_5601(1).jpeg', 'IMG_5603(1).jpeg', 'IMG_5604(1).jpeg']
        },

        eye: {
            name: 'London Eye',
            tag: 'SOUTH BANK',
            text: 'Views of the London Eye beside the river.',
            photos: ['IMG_5612.jpeg', 'IMG_5613.jpeg', 'IMG_5615.jpeg']
        },

        westminster: {
            name: 'Westminster Bridge',
            tag: 'RIVER THAMES',
            text: 'Photographs from Westminster Bridge.',
            photos: ['IMG_5616.jpeg', 'IMG_5617.jpeg', 'IMG_5618.jpeg', 'IMG_5619.jpeg', 'IMG_5621(1).jpeg']
        },

        bigben: {
            name: 'Big Ben',
            tag: 'WESTMINSTER',
            text: 'A view of the famous clock tower.',
            photos: ['IMG_5622(1).jpeg']
        },

        parliament: {
            name: 'Palace of Westminster',
            tag: 'WESTMINSTER',
            text: 'Exploring the historic architecture of London.',
            photos: ['IMG_5632(1).jpeg', 'IMG_5633(1).jpeg', 'IMG_5634(1).jpeg', 'IMG_5635(1).jpeg', 'IMG_5636.jpeg']
        },

        streets: {
            name: 'London Streets',
            tag: 'CENTRAL LONDON',
            text: 'Photographs from the streets of London.',
            photos: ['IMG_5623(1).jpeg', 'IMG_5638.jpeg', 'IMG_5640(1).jpeg']
        }
    };

    const checkpoints = document.querySelectorAll('.checkpoint');
    const bike = document.querySelector('#bike');
    const photo = document.querySelector('#photo');
    const title = document.querySelector('#location-title');
    const tag = document.querySelector('#location-tag');
    const description = document.querySelector('#description');
    const counter = document.querySelector('#counter');

    let currentPlace = 'bridge';
    let currentPhoto = 0;

    function showPhoto() {
        const pictures = places[currentPlace].photos;

        photo.src = 'images/' + pictures[currentPhoto];
        photo.alt = places[currentPlace].name;
        counter.textContent = (currentPhoto + 1) + ' / ' + pictures.length;
    }

    function showPlace(checkpoint) {
        currentPlace = checkpoint.dataset.place;
        currentPhoto = 0;

        const place = places[currentPlace];

        title.textContent = place.name;
        tag.textContent = place.tag;
        description.textContent = place.text;

        bike.style.left = checkpoint.style.left;
        bike.style.top = checkpoint.style.top;

        checkpoints.forEach(function (item) {
            item.classList.remove('active');
        });

        checkpoint.classList.add('active');

        showPhoto();
    }

    checkpoints.forEach(function (checkpoint) {
        checkpoint.addEventListener('click', function () {
            showPlace(checkpoint);
        });
    });

    document.querySelector('#previous').addEventListener('click', function () {
        currentPhoto--;

        if (currentPhoto < 0) {
            currentPhoto = places[currentPlace].photos.length - 1;
        }

        showPhoto();
    });

    document.querySelector('#next').addEventListener('click', function () {
        currentPhoto++;

        if (currentPhoto >= places[currentPlace].photos.length) {
            currentPhoto = 0;
        }

        showPhoto();
    });

    showPlace(checkpoints[0]);

}());
