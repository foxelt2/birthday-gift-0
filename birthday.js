document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('image').addEventListener('change', function (event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById('pic').src = e.target.result;
            };
            reader.readAsDataURL(file);

            // Make the background black and hide all elements except the video
            document.body.style.backgroundColor = 'black';
            document.getElementById('bodymark').style.display = 'none';

            const video = document.getElementById('konosuba');
            video.style.display = 'block';
            video.play();

            // After the video plays for 7 seconds, revert to normal background and show the birthday message and picture
            setTimeout(function () {
                video.style.display = 'none';
                document.body.style.backgroundColor = '#180438'; // Normal background color
                document.getElementById('bodymark').style.display = 'block';
                document.getElementById('bday-text').innerHTML = `Happy Birthday`;
                document.getElementById('pText').innerHTML = `Wishing you longevity, happiness, and all the best health.`;
                document.getElementById('pic').style.display = 'block';
                document.getElementById('bday-text').style.display = 'block';
                document.getElementById('pText').style.display = 'block';
                document.getElementById('image').style.display = 'none';
                document.getElementById('counter').style.display = 'none';
                document.getElementById('eng').style.display = 'none';
            }, 7000); // 7 seconds
        }
    });
});
