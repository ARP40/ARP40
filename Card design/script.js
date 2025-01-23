
  const video = 
  document.getElementById("video1");
  const progressBar = 
  document.getElementById('customProgressBar')
  const progressContainer = 
  document.getElementById('.custom-progress-container')

  function playVideo() {
    video.play();
  }

  function pauseVideo() {
    video.pause();
  }
  
  // Update custom progress bar
video.addEventListener('timeupdate', () => {
  const percentage = (video.currentTime / video.duration) * 100;
  progressBar.style.width = percentage + '%';
});

// Seek the video when clicking on the progress bar
progressContainer.addEventListener('click', (e) => {
  const rect = progressContainer.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const newTime = (offsetX / rect.width) * video.duration;
  video.currentTime = newTime;
});
