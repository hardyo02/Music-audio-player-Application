const playlist = [
        {
            name: "Sunny Ade",
            artist: "Zinoleesky",
            src: "../../assets/Zinoleesky_-_Sunny_Ade_Tunesloaded.com.ng.mp3",
            image: "../../assets/Zinoleesky-Alt-006-480x600.jpg"
        },
        {
            name: "Jollof",
            artist: "Zinoleesky",
            src: "../../assets/Zinoleesky_-_Jollof_Tunesloaded.com.ng.mp3",
            image: "../../assets/Zinoleesky-Alt-006-480x600.jpg"
        },
        {
            name: "Suit & Tie",
            artist: "Zinoleesky Ft Toosii",
            src: "../../assets/Zinoleesky_Ft_Toosii_-_Suit_Tie_Tunesloaded.com.ng.mp3",
            image: "../../assets/Zinoleesky-Alt-006-480x600.jpg"
        },
        {
            name: "Most Wanted",
            artist: "Zinoleesky",
            src: "../../assets/Zinoleesky_-_Most_Wanted_Tunesloaded.com.ng.mp3",
            image: "../../assets/Zinoleesky-Alt-006-480x600.jpg"
        }
    ];

    let currentIndex = 0;

    const audio = document.getElementById("audio");
    const songTitle = document.getElementById("songTitle");
    const artistName = document.getElementById("artistName");
    const songImage = document.getElementById("songImage");
    const progress = document.getElementById("progress");
    const ctrlIcon = document.getElementById("ctrlIcon");

    function loadSong(index) {
        const track = playlist[index];
        audio.src = track.src;
        songTitle.textContent = track.name;
        artistName.textContent = track.artist;
        songImage.src = track.image;
    }

    function playPause() {
        if (ctrlIcon.classList.contains("fa-pause")) {
            audio.pause();
            ctrlIcon.classList.remove("fa-pause");
            ctrlIcon.classList.add("fa-play");
        } else {
            audio.play();
            ctrlIcon.classList.remove("fa-play");
            ctrlIcon.classList.add("fa-pause");
        }
    }

    function nextSong() {
        currentIndex = (currentIndex + 1) % playlist.length;
        loadSong(currentIndex);
        audio.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }

    function previousSong() {
        currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
        loadSong(currentIndex);
        audio.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }

    audio.onloadedmetadata = function () {
        progress.max = audio.duration;
        progress.value = audio.currentTime;
    };

    setInterval(() => {
        progress.value = audio.currentTime;
    }, 500);

    progress.onchange = function () {
        audio.currentTime = progress.value;
    };

    
    loadSong(currentIndex);