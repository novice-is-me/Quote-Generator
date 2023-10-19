let btn = document.querySelector('.generate'); 
let person = document.querySelector('.person');
let text = document.querySelector('.qoute'); 

const qoutes = [{
    qoute: "Ask not what your country can do for you; ask what you can do for your country.", 
    person: "-John Kennedy" 
},{
    qoute: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    person: "-Thomas Edison"
}, {
    qoute: "If you want something done right, do it yourself.",
    person: "-Margaret Thatcher"
}, {
    qoute: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    person: "-Albert Einstein"
}, {
    qoute: "Do one thing every day that scares you",
    person: "-Eleanor Roosevelt"
}, {
    qoute: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart",
    person: "-Helen Keller"
}, {
    qoute: "It is during our darkest moments that we must focus to see the light",
    person: "-Aristotle"
}, {
    qoute: "Life is a succession of lessons which must be lived to be understood",
    person: "-Ralph Waldo"
}, {
    qoute: "The greatest glory in living lies not in never falling, but in rising every time we fall",
    person: "-Nelson Mandela" 
}];  
 
function generate(){ 
    for (let i=0; i<qoutes.length; i++){ 
        let random = Math.floor(Math.random()* qoutes.length);
        text.innerHTML = qoutes[random].qoute; 
        person.innerHTML = qoutes[random].person;    
    }     
}   

btn.addEventListener('click', generate()); 