var timer;

var diffCount;
var answer;
var answerArr = [];
var answerCount = 0;
var life = 5;

$(document).ready(function(){
  $('.game-text').hide();
  $('.game-control').hide();
  $(".gameover-text").hide();
  $(".gameover-text-succesful").hide();
  for(var i = 0; i < 4; i++){
    var value = "but_answer_" + i;
    answerArr[i] = value;
  }
});

function start(diff){
  if(diff == "eazy"){
    diffCount = 100;
  }
  else if(diff == "common"){
    diffCount = 1000;
  }
  else if(diff == "hard"){
    diffCount = 10000;
  }
  else{
    diffCount = 100000;
  }
  $(".body-lobby").fadeOut();
  $(".body-lobby-control").fadeOut();
  $(".body-count").fadeIn();
  $(".game-text").fadeIn();
  $(".game-control").fadeIn();
  startCount();
  makeQuestion();
}

function startCount(){
  var timerCount = 60;
  document.getElementsByClassName('body-timer')[0].innerHTML = timerCount + "초";
  timer = setInterval(function(){
    timerCount -= 1;
    document.getElementsByClassName('body-timer')[0].innerHTML = timerCount + "초";
    if(timerCount == 0){
      gameOver();
    }
  }, 1000);
}

function makeQuestion(){
  var num1 = Math.floor(Math.random() * diffCount);
  var num2 = Math.floor(Math.random() * diffCount);
  var question = num1 + " + " + num2
  document.getElementsByClassName('question_Number')[0].innerHTML = question;
  makeAnswer(num1, num2);
}

function makeAnswer(num1, num2){
  var answer = num1 + num2;
  this.answer = answer;
  var answerCount = Math.floor(Math.random() * 4);
  for(var i = 0; i < 4; i++){
    if(answerCount == i){
      show_Answer = answer;
    }
    else{
      num1 = Math.floor(Math.random()* diffCount);
      num2 = Math.floor(Math.random() * diffCount);
      show_Answer = num1 + num2
    }
    document.getElementsByClassName(answerArr[i])[0].innerHTML = show_Answer;
  }
}

function confirmAnswer(selectAnswer){
  var selectAnswerValue = document.getElementsByClassName(answerArr[selectAnswer])[0].innerText;
  if(selectAnswerValue == answer){
    answerCount = answerCount + 1;
    makeQuestion();
  }
  else{
    wrongAnswer();
  }
}

function wrongAnswer(){
  life = life - 1;
  document.getElementsByClassName("head-life")[0].innerHTML = life;
  if(life == 0){
    gameOver();
  }
}

function gameOver(){
  clearInterval(timer);
  alert("게임 오버!");
  document.getElementsByClassName("gameover-text-succesful")[0].innerHTML = answerCount + "개만큼이나 맞췄습니다.";
  $(".game-text").fadeOut();
  $(".game-control").fadeOut();
  $(".gameover-text").fadeIn();
  $(".gameover-text-succesful").fadeIn();
}
