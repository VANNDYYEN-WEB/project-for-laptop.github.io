 // animation shoe
 function changeImage() {
    document.getElementById("myImage").src = "./IMG/shoe1.png";}
function restoreImage() {
    document.getElementById("myImage").src = "./IMG/shoe1-change.png";}

    
function changeImage_1() {
    document.getElementById("myImage-1").src = "./IMG/shoe.png";}
function restoreImage_1() {
    document.getElementById("myImage-1").src = "./IMG/shoe-change.png";}


function changeImage_2() {
    document.getElementById("myImage-2").src = "./IMG/shoe2-change.png";}
function restoreImage_2() {
    document.getElementById("myImage-2").src = "./IMG/shoe2.png";}
// end of animation shoe

// slide top img
document.addEventListener('DOMContentLoaded', function()
{
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    
    if (slides.length > 0) {
        const slideWidth = slides[0].clientWidth;

        let counter = 0;

        function nextSlide() {
            counter++;
            if (counter < slides.length) {
                slider.style.transform = `translateX(${-counter * slideWidth}px)`;
            } else {
                // If counter exceeds the number of slides, transition to the first slide smoothly from right to left
                slider.style.transition = 'none';
                slider.style.transform = `translateX(${slideWidth}px)`;
                setTimeout(() => {
                    slider.style.transition = 'transform 0.9s ease';
                    slider.style.transform = 'translateX(0)';
                }, 50);
                counter = 0; // Reset counter to 0
            }
        }

        setInterval(nextSlide, 1800); // Change slide every 3 seconds
    } else {
        console.error('No slides found.');
    }
});
// end of slide top img