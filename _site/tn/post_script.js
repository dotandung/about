// document.addEventListener('DOMContentLoaded', function() {
//     const thumbnails = document.querySelectorAll('.thumbnail');
//     const overlay = document.querySelector('.overlay');
//     const enlargedImg = document.querySelector('.enlarged-image');
//     const closeBtn = document.querySelector('.close-btn');

//     thumbnails.forEach(thumbnail => {
//         thumbnail.addEventListener('click', function() {
//             enlargedImg.src = this.src;
//             enlargedImg.alt = this.alt;
//             overlay.classList.add('active');
//             document.body.style.overflow = 'hidden';
//         });
//     });

//     closeBtn.addEventListener('click', closeOverlay);
//     overlay.addEventListener('click', function(e) {
//         if (e.target === overlay) {
//             closeOverlay();
//         }
//     });

//     function closeOverlay() {
//         overlay.classList.remove('active');
//         document.body.style.overflow = 'auto';
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const overlay = document.querySelector('.overlay');
    const enlargedImg = document.querySelector('.enlarged-image');
    const closeBtn = document.querySelector('.close-btn');
    let currentIndex = 0;
    let images = []; // Will store all thumbnail images

    // Store all thumbnails in an array and set up click handlers
    thumbnails.forEach((thumbnail, index) => {
        images.push(thumbnail); // Add to our images array
        thumbnail.addEventListener('click', function() {
            currentIndex = index; // Track which image we're viewing
            showImage(currentIndex);
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            console.log(index)
        });
    });

    function showImage(index) {
        enlargedImg.src = images[index].src;
        enlargedImg.alt = images[index].alt;
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!overlay.classList.contains('active')) return;
        
        switch(e.key) {
            case 'ArrowLeft':
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                showImage(currentIndex);
                break;
            case 'ArrowRight':
                currentIndex = (currentIndex + 1) % images.length;
                showImage(currentIndex);
                break;
            case 'Escape':
                closeOverlay();
                break;
        }
    });

    closeBtn.addEventListener('click', closeOverlay);
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeOverlay();
        }
    });

    function closeOverlay() {
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
        "ФОТОГРАФИЯ",
        "照相",
        "GALLERY",
        "TUỔI TRẺ"
        ];
    
    const heading = document.getElementById('page-title');
    heading.textContent = quotes[Math.floor(Math.random() * quotes.length)];
});

document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
        "ЮНОСТЬ",
        "青春",
        "YOUTH",
        "TUỔI TRẺ"
        ];
    
    const heading = document.getElementById('page-title');
    heading.addEventListener('click', function() {
        heading.textContent = quotes[Math.floor(Math.random() * quotes.length)];
    });
});