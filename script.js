var i = 0;
var txt1 =
  "Hey Tarishi.....!  <<               Now I wan't to say something special to you. <<<                So , Please read everything carefully...!                                                                           > I'm sorry if you feel weird for anything < But you're like someone Special to me.  <<                  As the days goes < you get closer to me....! <<                           I don't know the reason why your thoughts always resonates inside my mind...!                                                     > Everything about you is always intresting for me...!                     << You're the most beautiful girl I've ever met,    You're special, You're different...!                                                     > I want you at every happy moment of my life,                  << I don't like to gossip much but...!      > I always want to share eaverthing for you                                                             >Your Smile means a lot for me <You're Special for me.....! |                  <<<< Thanks for making my 2024 moments special ...!   >Thank you❣️ >By Kartik";
var speed = 70;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
