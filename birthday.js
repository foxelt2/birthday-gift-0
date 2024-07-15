
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('image').addEventListener('change', function (event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById('pic').src = e.target.result;
            };
            reader.readAsDataURL(file);

            // Turn the screen black and start the countdown
            document.body.style.backgroundColor = 'black';
            document.getElementById('bodymark').style.display = 'none';
            const bdayText = document.getElementById('bday-text');
            bdayText.style.display = 'block';
            bdayText.innerHTML = '3';

            let count = 3;
            const countdown = setInterval(function () {
                count--;
                if (count > 0) {
                    bdayText.innerHTML = count;
                } else {
                    clearInterval(countdown);
                    bdayText.innerHTML = 'Loading...';

                    // Show the video
                    const video = document.getElementById('konosuba');
                    video.style.display = 'block';
                    video.play();

                    video.addEventListener('ended', function () {
                        video.style.display = 'none';
                        document.body.style.backgroundColor = '#180438'; // Normal background color
                        document.getElementById('bodymark').style.display = 'block';
                        document.getElementById('pic').style.display = 'block';
                        document.getElementById('pText').innerHTML = 'Wishing you longevity, happiness, and all the best health.';
                        document.getElementById('pText').style.display = 'block';
                        document.getElementById('image').style.display = 'none';
                        document.getElementById('counter').style.display = 'none';
                        document.getElementById('eng').style.display = 'none';

                        // Show the birthday message with animation for 2 seconds
                        bdayText.innerHTML = 'Happy Birthday';
                        bdayText.style.animation = 'bday-text 2s linear';

                        setTimeout(function () {
                            // Reset animation and display elements
                            bdayText.style.animation = 'bday-text 7s linear infinite';
                            document.getElementById('bodymark').style.display = 'block';
                            document.getElementById('pic').style.display = 'block';
                            document.getElementById('pText').innerHTML = 'Wishing you longevity, happiness, and all the best health.';
                            document.getElementById('pText').style.display = 'block';
                            document.getElementById('image').style.display = 'none';
                            document.getElementById('counter').style.display = 'none';
                            document.getElementById('eng').style.display = 'none';
                        }, 2000); // 2 seconds
                    });
                }
            }, 1000); // 1 second interval
        }
    });
});
