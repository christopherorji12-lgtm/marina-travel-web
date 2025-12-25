const quiz=[{question:"Largest mammal?",answers:["Shark","Blue Whale","Dolphin","Octopus"],correct:1},{question:"Oceans cover how much of Earth?",answers:["50%","60%","70%","80%"],correct:2}];
let current=0,score=0;
function loadQuestion(){const q=quiz[current];document.getElementById("question").innerText=q.question;
const a=document.getElementById("answers");a.innerHTML="";
q.answers.forEach((ans,i)=>{const b=document.createElement("button");b.innerText=ans;b.className="btn";b.onclick=()=>check(i);a.appendChild(b);});}
function check(i){if(i===quiz[current].correct){score++;alert("Correct!");}}
function nextQuestion(){current++;if(current<quiz.length){loadQuestion()}else{document.querySelector(".quiz-box").innerHTML="Finished! Score: "+score;}}
function restartQuiz(){current=0;score=0;loadQuestion();}
window.onload=loadQuestion;