function check(answer, correct, next){

if(answer.toLowerCase() === correct){

window.location.href = next;

}

else{

document.getElementById("msg").innerHTML =

"❌ Falsch. Versuche es erneut.";

}

}