let speech=new SpeechSynthesisUtterance();
speech.pitch=1;
speech.volume=1;
speech.rate=1;
let voices=[];

let voicesSelect=document.querySelector('select');
let volumeInput=document.querySelector('#volumeInput');
let pitchInput=document.querySelector('#pitchInput');
let rateInput=document.querySelector('#rateInput');
let pauseBtn=document.querySelector('#btnPause');
let resumeBtn=document.querySelector('#btnResume');
let stopBtn=document.querySelector('#btnStop');

window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();
    speech.voice=voices[0];

    voices.forEach((voice,i)=>(voicesSelect.options[i]=new Option(voice.name,i)));
};

document.querySelector('.listen').addEventListener('click',()=>{
    speech.text=document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech)
});

document.querySelector('#volumeInput').addEventListener('input',()=>{
    speech.volume=parseFloat(volumeInput.value)
});

document.querySelector('#pitchInput').addEventListener('input',()=>{
    speech.pitch=parseFloat(pitchInput.value)
});

document.querySelector('#rateInput').addEventListener('input',()=>{
    speech.rate=parseFloat(rateInput.value)
});


document.querySelector('#btn__Pause').addEventListener('click',()=>{
    window.speechSynthesis.pause()
});
document.querySelector('#btn__Resume').addEventListener('click',()=>{
    window.speechSynthesis.resume()
});
document.querySelector('#btn__Stop').addEventListener('click',()=>{
    window.speechSynthesis.cancel()
});


rateInput.addEventListener('change',()=>document.querySelector(".rate-value").textContent=rateInput.value);
pitchInput.addEventListener('change',()=>document.querySelector(".pitch-value").textContent=pitchInput.value);
volumeInput.addEventListener('change',()=>document.querySelector(".volume-value").textContent=volumeInput.value);
