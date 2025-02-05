document.addEventListener('DOMContentLoaded', () => {
    const playBtn = document.querySelector('.play-btn');
    const progress = document.querySelector('.progress');
    const currentTime = document.querySelector('.current-time');
    const totalTime = document.querySelector('.total-time');
    let isPlaying = false;

    // Toggle play/pause
    playBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        playBtn.innerHTML = isPlaying ? 
            '<i class="fas fa-pause"></i>' : 
            '<i class="fas fa-play"></i>';
    });

    // Simulate progress bar movement
    let progressWidth = 0;
    setInterval(() => {
        if (isPlaying && progressWidth < 100) {
            progressWidth += 0.1;
            progress.style.width = `${progressWidth}%`;
            
            // Update time
            const currentSeconds = Math.floor((progressWidth / 100) * 225);
            const minutes = Math.floor(currentSeconds / 60);
            const seconds = currentSeconds % 60;
            currentTime.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
    }, 100);
});
