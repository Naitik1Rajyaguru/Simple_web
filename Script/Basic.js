let mainPlay = document.getElementById("mainPlay");
// console.log(mainPlay);
let audioElement = new Audio("Song/Duaa - Arijit Singh.mp3");
// console.log(audioElement)
let progressOfSong = document.getElementById("Progress");
let subplay = document.getElementById('subPlay');
let index=0;
let next = document.getElementById("nextSong");
let prev = document.getElementById("prevSong");







let songs=[
    {songName: "Duaa", filepath: "Song/Duaa - Arijit Singh.mp3"},
    {songName: "Duaa", filepath: "Song/Shayad - Love Aaj Kal.mp3"},
    {songName: "Alone", filepath: "Song/Alone---Alan-Walker.mp3"},
    {songName: "choo lo", filepath: "Song/Choo Lo.mp3"},
    {songName: "choo lo", filepath: "Song/Tere Hawaale.mp3"},
    {songName: "choo lo", filepath: "Song/Pehle Bhi Main Animal.mp3"},
    {songName: "choo lo", filepath: "Song/Let-Her-Go-X-Husn.mp3"},
    {songName: "choo lo", filepath: "Song/Husn.mp3"},
    {songName: "choo lo", filepath: "Song/Jaane-De.mp3"},
    {songName: "choo lo", filepath: "Song/Dil Ibaadat.mp3"},
    {songName: "choo lo", filepath: "Song/Aadat Kalyug.mp3"},
    {songName: "choo lo", filepath: "Song/Let Her Go.mp3"},

]

const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('playButton')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

// Main progress play button
mainPlay.addEventListener("click", ()=>{
    makeAllPlay();
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        mainPlay.classList.remove('fa-play');
        mainPlay.classList.add('fa-pause'); 
        // subplay.classList.remove('fa-play')
        // subplay.classList.add('fa-pause'); 
        gif.style.opacity=1;
        document.getElementById(index).classList.remove('fa-play');
        document.getElementById(index).classList.add('fa-pause');
    }
    else{
        audioElement.pause();
        mainPlay.classList.remove('fa-pause');
        mainPlay.classList.add('fa-play'); 
        gif.style.opacity=0;
        // subplay.classList.remove('fa-pause');
        // subplay.classList.add('fa-play'); 
        document.getElementById(index).classList.remove('fa-pause');
        document.getElementById(index).classList.add('fa-play');
    }
});

// progress bar change
audioElement.addEventListener('timeupdate', ()=>{
    // console.log("hi");
    progress = parseInt((audioElement.currentTime / audioElement.duration)*100);
    // console.log(progress);
    progressOfSong.value = progress;
});

// cut song from progress bar
progressOfSong.addEventListener('change', ()=>{
    audioElement.currentTime = progressOfSong.value * audioElement.duration/100;
});




//perticular song play
Array.from(document.getElementsByClassName("playButton")).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlay();

        // console.log(e.target.id);    
        // console.log(audioElement.attributes.src.value);
        // console.log(audioElement.attributes.src.value.slice(5,-4));
        
        
        if(audioElement.attributes['src'].value != songs[parseInt(e.target.id)].filepath){
            // console.log(audioElement.attributes['src'], songs[parseInt(e.target.id)].filepath);
            audioElement.src = songs[parseInt(e.target.id)].filepath;
        }
        // console.log(audioElement.attributes.src.value.slice(5,-4));

        // console.log(document.getElementsByClassName("currentPlayingName"));
        document.getElementsByClassName("currentPlayingName")[0].innerText = audioElement.attributes.src.value.slice(5,-4);
        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            mainPlay.classList.remove('fa-play');
            mainPlay.classList.add('fa-pause'); 
            // subplay.classList.remove('fa-play')
            // subplay.classList.add('fa-pause'); 
            e.target.classList.remove('fa-play')
            e.target.classList.add('fa-pause'); 
            gif.style.opacity=1;
        }
        else{
            audioElement.pause();
            mainPlay.classList.remove('fa-pause');
            mainPlay.classList.add('fa-play'); 
            gif.style.opacity=0;
            // subplay.classList.remove('fa-pause');
            // subplay.classList.add('fa-play'); 
            e.target.classList.remove('fa-pause');
            e.target.classList.add('fa-play'); 
        }
        
    })
});

next.addEventListener('click',()=>{
    makeAllPlay();
    console.log(index);
    index++;
    if(index>=songs.length){
        index=0;
    }
    if(audioElement.paused){
        audioElement.src = songs[index].filepath;
    }
    else{
        audioElement.src = songs[index].filepath;
        audioElement.play();
        document.getElementById(index).classList.remove('fa-play');
        document.getElementById(index).classList.add('fa-pause');
    }
    document.getElementsByClassName("currentPlayingName")[0].innerText = audioElement.attributes.src.value.slice(5,-4);
    
});

prev.addEventListener('click',()=>{
    makeAllPlay();
    console.log(index);
    index--;
    if(index<0){
        index=songs.length-1;
    }
    if(audioElement.paused){
        audioElement.src = songs[index].filepath;
    }
    else{
        audioElement.src = songs[index].filepath;
        audioElement.play();
        document.getElementById(index).classList.remove('fa-play');
        document.getElementById(index).classList.add('fa-pause');
    }
    document.getElementsByClassName("currentPlayingName")[0].innerText = audioElement.attributes.src.value.slice(5,-4);
    
});









