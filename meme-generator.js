const jokes = ['An exercise for people who are out of shape: Begin with a five-pound potato bag in each hand. Extend your arms straight out from your sides, hold them there for a full minute, and then relax. After a few weeks, move up to ten-pound potato bags. Then try 50-pound potato bags, and eventually try to get to where you can lift a 100-pound potato bag in each hand and hold your arms straight for more than a full minute. Once you feel confident at that level, put a potato in each bag',
'My daughter received this e-mail from a prospective student prior to the start of the semester: Dear Professor, I won\'t be able to come to any of your classes or',
'Scene: With a patient in my medical exam room Me: How old are your kids? Patient: Forty-four and 39 from my wife who passed away, and from my second wife'
];
const quotes = ['The purpose of our lives is to be happy.','Life is what happens when you\'re busy making other plans.','Get busy living or get busy dying'];
const memes = ['meme1.jpeg','meme2.webp','meme3.jpeg'];
const riddleAnswers = [
    {
        question:'I’m tall when I’m young, and I’m short when I’m old. What am I?',
        answer:'A candle'
    },
     {
        question:'What month of the year has 28 days?',
        answer:'All of them'
    },
    {
        question:'What question can you never answer yes to?',
        answer:'Are you asleep yet?'
    }
   
];

// const createEle = document.createElement('p');
// const createAttr = document.createAttribute('class');
// const createEleImg = document.createElement('img');



function tellRandomJokes(){
    // document.body.removeChild(createEle);
    clearAll(); 
    const createEle = document.createElement('p');
 
    const randomJokesIndex = Math.floor(Math.random() * jokes.length);
 
    const getChild = document.querySelector('.jokes-class-span');
  
    createEle.textContent = jokes[randomJokesIndex];
       
    getChild.appendChild(createEle);
    

}



function tellRandomQuotes(){
    clearAll();
    const createEle = document.createElement('p');
   
    const randomQuotesIndex = Math.floor(Math.random() * quotes.length);
    
    const getChild = document.querySelector('.quotes-class-span');

    createEle.textContent = quotes[randomQuotesIndex];
  

    getChild.appendChild(createEle);
    

}

function showRandomMemes(){
    clearAll();
   
    const createEle = document.createElement('img');

    const randomMemesIndex = Math.floor(Math.random() * memes.length);
    
    const getChild = document.querySelector('.memes-class-span');


    createEle.src=memes[randomMemesIndex];
    createEle.width='300';
   

    getChild.appendChild(createEle);

}

function showRdiddles(){
    clearAll();
    const randomRiddlesIndex = Math.floor(Math.random() * riddleAnswers.length);
    const riddleQuestion = document.createElement('p');
    riddleQuestion.textContent=riddleAnswers[randomRiddlesIndex].question;
    const riddleAnswer = document.createElement('p');
    riddleAnswer.textContent='Riddle answer is: '+riddleAnswers[randomRiddlesIndex].answer;

    const getRiddleSpan = document.querySelector('.riddle-class-span');

    //const getRiddleP = getRiddleSpan.querySelector('.riddleanswer-class-span');
    //getRiddleP.textContent=riddleAnswers[randomRiddlesIndex].answer;
    riddleAnswer.setAttribute('class','riddleanswer-class-span');
    riddleQuestion.setAttribute('class','riddlequestion-class-span');
    getRiddleSpan.appendChild(riddleQuestion);
    getRiddleSpan.appendChild(riddleAnswer);
    riddleAnswer.hidden=true;
}

function showRiddleAnswer(){
   const getRiddleanswerClass = document.querySelector('.riddleanswer-class-span');
   const getRiddleQuestion = document.querySelector('.riddlequestion-class-span');
    if(getRiddleQuestion && getRiddleanswerClass.hidden ){
        getRiddleanswerClass.hidden=false;   
    }else if(getRiddleQuestion){
        alert('Answer is already shown');
    }else{
        alert('There is no riddle played');
    }
   

}

function clearAll(){
    const jokesCont = document.querySelector('.jokes-class-span');
    const riddleCont = document.querySelector('.riddle-class-span');
    const quotesCont = document.querySelector('.quotes-class-span');
    const memesCont = document.querySelector('.memes-class-span');
    // if(jokesCont.children[0]){
    //     console.log('Present');
    //     jokesCont.removeChild(jokesCont.children[0]);

    // }
    quotesCont.innerHTML='';
    memesCont.innerHTML='';
    jokesCont.innerHTML='';
    riddleCont.innerHTML='';
   // jokesCont.removeChild();
}