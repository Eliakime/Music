const playerVolumeSlider = document.getElementById("playerVolumeSlider")
const progressBar = document.getElementById("progressBar")
const currentTimeDisplay = document.getElementById("currentTime")
const totalTimeDisplay = document.getElementById("totalTime")
const currentTrackPlayer = document.getElementById("currentTrackPlayer")
const currentTrackImg = document.getElementById("currentTrackImg")
const currentTrackTitle = document.getElementById("currentTrackTitle")
const currentTrackAlbum = document.getElementById("currentTrackAlbum")

// Declare variables that were previously undeclared
const audioPlayer = document.getElementById("audioPlayer") // Assuming you have an audio element with id 'audioPlayer'
let isBgMusicPlaying = false
const bgMusic = document.getElementById("bgMusic") // Assuming you have an audio element with id 'bgMusic'
const bgMusicToggle = document.getElementById("bgMusicToggle") // Assuming you have a button with id 'bgMusicToggle'
const playPauseBtn = document.getElementById("playPauseBtn") // Assuming you have a button with id 'playPauseBtn'
const prevTrackBtn = document.getElementById("prevTrackBtn")
const nextTrackBtn = document.getElementById("nextTrackBtn")
const muteBtn = document.getElementById("muteBtn")

let isPlaying = false
const currentTrack = null
let currentAlbum = null
let tracks = []
let currentTrackIndex = 0

// Set initial volume for main player
audioPlayer.volume = playerVolumeSlider.value

// Format time in minutes and seconds
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = Math.floor(seconds % 60)
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
}

// Update progress bar and time displays
function updateProgress() {
  const duration = audioPlayer.duration
  const currentTime = audioPlayer.currentTime
  const progressPercent = (currentTime / duration) * 100

  progressBar.style.width = `${progressPercent}%`
  currentTimeDisplay.textContent = formatTime(currentTime)

  if (!isNaN(duration)) {
    totalTimeDisplay.textContent = formatTime(duration)
  }
}

// Play a track
function playTrack(trackSrc, trackTitle, albumTitle, albumImg) {
  // If background music is playing, pause it
  if (isBgMusicPlaying) {
    bgMusic.pause()
    bgMusicToggle.innerHTML = '<i class="fas fa-volume-mute"></i>'
    isBgMusicPlaying = false
  }

  // Update audio source
  audioPlayer.src = trackSrc

  // Update track info
  currentTrackTitle.textContent = trackTitle || "Unknown Track"
  currentTrackAlbum.textContent = albumTitle || ""
  currentTrackImg.src = albumImg || "assets/img/album1.jpg"

  // Show player
  currentTrackPlayer.classList.add("active")

  // Play audio
  audioPlayer
    .play()
    .then(() => {
      isPlaying = true
      playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>'
    })
    .catch((error) => {
      console.error("Error playing audio:", error)
    })
}

// Toggle play/pause
function togglePlay() {
  if (isPlaying) {
    audioPlayer.pause()
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>'
  } else {
    audioPlayer.play()
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>'
  }
  isPlaying = !isPlaying
}

// Play previous track
function playPrevTrack() {
  if (tracks.length === 0) return

  currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length
  const track = tracks[currentTrackIndex]
  playTrack(track.src, track.title, currentAlbum, track.albumImg)
}

// Play next track
function playNextTrack() {
  if (tracks.length === 0) return

  currentTrackIndex = (currentTrackIndex + 1) % tracks.length
  const track = tracks[currentTrackIndex]
  playTrack(track.src, track.title, currentAlbum, track.albumImg)
}

// Toggle mute
function toggleMute() {
  audioPlayer.muted = !audioPlayer.muted
  muteBtn.innerHTML = audioPlayer.muted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>'
}

// Set up album tracks
function setupAlbumTracks(albumElement) {
  const albumTitle = albumElement.querySelector("h3").textContent
  const albumImg = albumElement.querySelector("img").src
  const trackElements = albumElement.querySelectorAll(".track")

  const albumTracks = Array.from(trackElements).map((trackElement, index) => {
    const trackTitle = trackElement.querySelector(".track-title").textContent
    const trackSrc = trackElement.dataset.src

    return {
      title: trackTitle,
      src: trackSrc,
      albumImg: albumImg,
    }
  })

  return {
    title: albumTitle,
    tracks: albumTracks,
  }
}

// Event listeners for main player controls
playPauseBtn.addEventListener("click", togglePlay)
prevTrackBtn.addEventListener("click", playPrevTrack)
nextTrackBtn.addEventListener("click", playNextTrack)
muteBtn.addEventListener("click", toggleMute)

playerVolumeSlider.addEventListener("input", function () {
  audioPlayer.volume = this.value
  if (audioPlayer.muted) {
    audioPlayer.muted = false
    muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>'
  }
})

// Update progress as audio plays
audioPlayer.addEventListener("timeupdate", updateProgress)

// When audio ends, play next track
audioPlayer.addEventListener("ended", playNextTrack)

// Click on progress bar to seek
document.querySelector(".progress").addEventListener("click", function (e) {
  const progressWidth = this.clientWidth
  const clickX = e.offsetX
  const duration = audioPlayer.duration

  audioPlayer.currentTime = (clickX / progressWidth) * duration
})

// Album play buttons
document.querySelectorAll(".album-play-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const albumId = this.dataset.album
    const albumCard = this.closest(".album-card")
    const album = setupAlbumTracks(albumCard)

    currentAlbum = album.title
    tracks = album.tracks
    currentTrackIndex = 0

    if (tracks.length > 0) {
      const firstTrack = tracks[0]
      playTrack(firstTrack.src, firstTrack.title, currentAlbum, firstTrack.albumImg)
    }
  })
})

// Individual track play buttons
document.querySelectorAll(".track-play-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const trackElement = this.closest(".track")
    const albumCard = this.closest(".album-card")
    const album = setupAlbumTracks(albumCard)

    currentAlbum = album.title
    tracks = album.tracks

    const trackTitle = trackElement.querySelector(".track-title").textContent
    const trackSrc = trackElement.dataset.src
    const albumImg = albumCard.querySelector("img").src

    // Find the index of the clicked track
    currentTrackIndex = tracks.findIndex((track) => track.title === trackTitle)

    playTrack(trackSrc, trackTitle, currentAlbum, albumImg)
  })
})

// Single play buttons
document.querySelectorAll(".single-play-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const singleCard = this.closest(".single-card")
    const singleTitle = singleCard.querySelector("h3").textContent
    const singleImg = singleCard.querySelector("img").src
    const trackSrc = this.dataset.src

    // Reset tracks array to just this single
    currentAlbum = "Single"
    tracks = [
      {
        title: singleTitle,
        src: trackSrc,
        albumImg: singleImg,
      },
    ]
    currentTrackIndex = 0

    playTrack(trackSrc, singleTitle, "Single", singleImg)
  })
})

// Featured track play button
document.querySelector(".featured-play-btn").addEventListener("click", function () {
  const featuredSection = document.getElementById("featured-track")
  const featuredTitle = featuredSection.querySelector(".section-title").textContent
  const featuredImg = featuredSection.querySelector("img").src
  const trackSrc = this.dataset.src

  // Reset tracks array to just the featured track
  currentAlbum = "Featured"
  tracks = [
    {
      title: featuredTitle,
      src: trackSrc,
      albumImg: featuredImg,
    },
  ]
  currentTrackIndex = 0

  playTrack(trackSrc, featuredTitle, "Featured", featuredImg)
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: "smooth",
      })
    }
  })
})

// Placeholder for demo - in a real site, you would use actual audio files
// This simulates loading audio metadata
setTimeout(() => {
  document.querySelectorAll(".track-time").forEach((timeElement) => {
    const randomMinutes = Math.floor(Math.random() * 4) + 2
    const randomSeconds = Math.floor(Math.random() * 60)
    timeElement.textContent = `${randomMinutes}:${randomSeconds < 10 ? "0" : ""}${randomSeconds}`
  })
}, 1000)
\
})
