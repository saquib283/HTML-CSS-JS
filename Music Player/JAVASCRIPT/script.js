//Initialise Variable
let songIndex = 0;
let audioElemnet=new Audio('/Utility/songs/1.mp3');
let masterPlay=document.getElementById("masterPlay");
let masterSongName=document.getElementById('masterSongName');
let myProgressBar = document.getElementById("myProgressBar");
let gif=document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName("songItem"));


let songs =[

    {songName:"song-Name -1" , filePath:"/Utility/songs/1.mp3",coverPath:"/Utility/covers/1.jpg"},
    {songName:"song-Name -2" , filePath:"/Utility/songs/2.mp3",coverPath:"/Utility/covers/2.jpg"},
    {songName:"song-Name -3" , filePath:"/Utility/songs/3.mp3",coverPath:"/Utility/covers/3.jpg"},
    {songName:"song-Name -4" , filePath:"/Utility/songs/4.mp3",coverPath:"/Utility/covers/4.jpg"},
    {songName:"song-Name -5" , filePath:"/Utility/songs/5.mp3",coverPath:"/Utility/covers/5.jpg"},
    {songName:"song-Name -6" , filePath:"/Utility/songs/6.mp3",coverPath:"/Utility/covers/6.jpg"},
    {songName:"song-Name -7" , filePath:"/Utility/songs/7.mp3",coverPath:"/Utility/covers/7.jpg"},
    {songName:"song-Name -8" , filePath:"/Utility/songs/8.mp3",coverPath:"/Utility/covers/8.jpg"},
    {songName:"song-Name -9" , filePath:"/Utility/songs/9.mp3",coverPath:"/Utility/covers/9.jpg"},
    {songName:"song-Name -10" , filePath:"/Utility/songs/10.mp3",coverPath:"/Utility/covers/10.jpg"},

      
];

songItem.forEach((Element,i)=>{

    Element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    Element.getElementsByClassName('songName')[0].innerText=songs[i].songName;


})

//Listen to event
masterPlay.addEventListener('click' , ()=>{
    if (audioElemnet.paused || audioElemnet.currentTime<=0){
        audioElemnet.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElemnet.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity=0;
    }
})



audioElemnet.addEventListener('timeupdate',()=>{

    progress =  parseInt((audioElemnet.currentTime/audioElemnet.duration)*100)
    myProgressBar.value = progress;
    
})

myProgressBar.addEventListener('change',()=>{
    audioElemnet.currentTime = myProgressBar.value*audioElemnet.duration/100;
})

const makeAllPlays=()=>{
   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-add-circle');

   })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{

    element.addEventListener('click', (e)=>{
    makeAllPlays();
    songIndex=parseInt(e.target.id);
    masterSongName.innerText=songs[songIndex].songName;
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElemnet.src=`/Utility/songs/${songIndex+1}.mp3`;
    audioElemnet.currentTime=0;
    audioElemnet.play();
    gif.style.opacity=1;

    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');


    })

})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElemnet.src=`/Utility/songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElemnet.currentTime=0;
    audioElemnet.play();
    gif.style.opacity=1;

    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElemnet.src=`/Utility/songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElemnet.currentTime=0;
    audioElemnet.play();
    gif.style.opacity=1;

    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})