

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
  $(".game-text").fadeIn();
  $(".game-control").fadeIn();
  makeQuestion();
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
  var selectAnswerValue = document.getElementsByClassName("head-life")[0].innerHTML = life;
  var selectAnswerValue = document.getElementsByClassName("gameover-text-succesful")[0].innerHTML = answerCount + "만큼 맞췄습니다.";
  if(life == 0){
    alert("게임 오버!");
    $(".game-text").fadeOut();
    $(".game-control").fadeOut();
    $(".gameover-text").fadeIn();
    $(".gameover-text-succesful").fadeIn();
  }
}
