function updateCountdown() {
  var now = new Date();
  var targetDate = new Date(now.getFullYear(), 4, 16); 
  if (now.getMonth() > 4 || (now.getMonth() === 4 && now.getDate() >= 16)) {
    targetDate.setFullYear(targetDate.getFullYear() + 1); 
  }
  
  var timeLeft = targetDate - now;

  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
}

setInterval(updateCountdown, 1000);

updateCountdown();
