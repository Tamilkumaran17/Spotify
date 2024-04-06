const music = new Audio()
// music.play();

// const mongoose=require('mongoose');

// mongoose.connect('mongodb://localhost:27017/musicDB',{userNewUrlParser: true, useUnifiedTopology: true})
// .then(()=>console.log("connected"))
// .catch(err =>console.log('error',err));
// const songSchema = new mongoose.Schema({
//     title:String,
//     filePath:String,
// });
// const Song = mongoose.model('Song', songSchema);
// const song=[
//     {
//         title: 'song1',
//         filePath: 'audio/4.mp3'
//     },
//     {
//         title: 'song2',
//         filePath: 'audio/5.mp3'
//     },

// ];
// Song.insertMany(song)
// .then(()=> console.log('song inserted'))
// .catch(err=>console.log('error' ,err));


const songs =[
    {
        id:'1',
        songName: ` Beep song <br>
        <div class="subtitle">Simbu</div>`,
        poster: "img/1.jpg"
    },
    {
        id:'2',
        songName: ` Yaaraiyum <br>
        <div class="subtitle">Sulthan</div>`,
        poster: "img/2.jpg"
    },
    {
        id:'3',
        songName: ` Ava ena <br>
        <div class="subtitle">Vaaranam Aayiram</div>`,
        poster: "img/3.jpg"
    },
    {
        id:'4',
        songName: ` Malare <br>
        <div class="subtitle">Premam</div>`,
        poster: "img/4.jpg"
    },
    {
        id:'5',
        songName: ` Unnale Unnale <br>
        <div class="subtitle">Harris</div>`,
        poster: "img/5.jpg"
    },
    {

        id:'6',
        songName: ` Muzumathi  <br>
        <div class="subtitle">AR Rahman</div>`,
        poster: "img/6.jpg"
    },
    {
        id:'7',
        songName: ` Oru Killi Oru Killi <br>
        <div class="subtitle"> Leelai</div>`,
        poster: "img/7.jpg"
    },
    {
        id:'8',
        songName: ` Melliname <br>
        <div class="subtitle">Shahjahan</div>`,
        poster: "img/8.jpg"
    },
    {
        id:'9',
        songName: `  Thaiyya Thaiyya <br>
        <div class="subtitle">Uyire</div>`,
        poster: "img/9.jpg"
    },
    {
        id:'10',
        songName: ` katchi sera <br>
        <div class="subtitle">Album</div>`,
        poster: "img/10.jpg"
    },
    {
        id:'11',
        songName: `  Hukum<br>
        <div class="subtitle">Jailer</div>`,
        poster: "img/11.jpg"
    },
    {
        id:'12',
        songName: ` Aval <br>
        <div class="subtitle">Sana</div>`,
        poster: "img/12.jpg"
    },
    {
        id:'13',
        songName: ` Kurumugil <br>
        <div class="subtitle">Sita Ramam</div>`,
        poster: "img/13.jpg"
    },
    {
        id:'14',
        songName: ` Maamadhura <br>
        <div class="subtitle">Jigarthanda</div>`,
        poster: "img/14.jpg"
    },
    {
        id:'15',
        songName: ` Hayyoda<br>
        <div class="subtitle">Jawan</div>`,
        poster: "img/15.jpg"
    },
    {
        id:'16',
        songName: `Kanmani anbodu <br>
        <div class="subtitle">Guna</div>`,
        poster: "img/16.jpg"
    },
    {
        id:'17',
        songName: ` Kadhal kappal <br>
        <div class="subtitle">Iraivi</div>`,
        poster: "img/17.jpg"
    },
    {
        id:'18',
        songName: ` Mallipoo <br>
        <div class="subtitle">AR Rahman</div>`,
        poster: "img/18.jpg"
    },
    {
        id:'19',
        songName: `  Naan <br>
        <div class="subtitle">Mahaan</div>`,
        poster: "img/19.jpg"
    },
    {
        id:'20',
        songName: `  Nee partha <br>
        <div class="subtitle">Aniruth</div>`,
        poster: "img/20.jpg"
    }
   
    // need to add
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
   
});


let masterPlay = document.getElementById('masterPlay');
let wave = document.querySelector('.wave');

masterPlay.addEventListener('click', () => {
    if (music.paused ) {   /// change from actual code
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
});


const makeALLPlays =()=>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
        
           
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
        
    })

}
const makeALLBackground =()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
        element.style.background = "rgb(105, 105, 170, 0)";
        
    })

}



let index =0;
let poster_master_play  = document.getElementById('poster_master_play');
let title  = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeALLPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');

        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();

        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        });
        song_title.forEach(ele=>{
            let {songName} =ele;
            title.innerHTML=songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',() =>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeALLBackground();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background="rgb(105, 105, 170,.1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentend = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];




music.addEventListener('timeupdate', () =>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);

    if(sec<10){
        sec = `0${sec}`;
    }
    currentend.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);

    if(sec1<10){
        sec1 = `0${sec1}`;
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value=progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;

})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})


music.addEventListener('ended', ()=>{
    music.pause();
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');

})


let vol_icon = document.getElementById('vol_icon');
let vol= document.getElementById('vol');
let vol_dot= document.getElementById('vol_dot');
let vol_bar= document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change' ,()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if(vol.value >0){
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if(vol.value > 50){
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a= vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;

})
let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click' ,()=>{
    index -= 1;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        });
        song_title.forEach(ele=>{
            let {songName} =ele;
            title.innerHTML=songName;
        })
        makeALLPlays();
        document.getElementById(`${index}`).classList.remove('bi-play-fill');
        document.getElementById(`${index}`).classList.add('bi-pause-fill');
        makeALLBackground();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background="rgb(105, 105, 170,.1)";

})
next.addEventListener('click' ,()=>{
    index -= 0;
    index += 1;

    if(index > Array.from(document.getElementsByClassName('songItem')).length)
        index = 1;
    music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        });
        song_title.forEach(ele=>{
            let {songName} =ele;
            title.innerHTML=songName;
        })
        makeALLPlays();
        document.getElementById(`${index}`).classList.remove('bi-play-fill');
        document.getElementById(`${index}`).classList.add('bi-pause-fill');
        makeALLBackground();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background="rgb(105, 105, 170,.1)";

})

let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})

let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})


document.getElementById("playbutton").onclick = function() {
    var url="https://open.spotify.com/playlist/2ERe52uW0XkQZgCvtDg3WE?si=ffd2a1d8c3034b02"

    window.open(url,'_blank');
};
document.getElementById("follow").onclick = function() {
    var url="https://open.spotify.com/user/wt4cwe19t75mnroyhi1ol655p?si=fe3fd6f34f3c4ccc"

    window.open(url,'_blank');
};









