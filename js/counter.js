document.addEventListener("DOMContentLoaded", function() {
      var cakesmash = setInterval(cakesmashSessions, 10)
      var family = setInterval(familySessions, 10)
      var maternity = setInterval(maternitySessions, 10)
      var newborn = setInterval(newbornSessions, 10)
      var pets = setInterval(petsSessions, 10)
      let count1 = 1;
      let count2 = 1;
      let count3 = 1;
      let count4 = 1;
      let count5 = 1;

      function cakesmashSessions() {
          count1++
          document.querySelector("#number1").innerHTML = count1
          if (count1 == 120) {
              clearInterval(cakesmash)
          }
      }

      function familySessions() {
          count2++
          document.querySelector("#number2").innerHTML = count2
          if (count2 == 97) {
              clearInterval(family)
          }
      }

      function maternitySessions() {
          count3++
          document.querySelector("#number3").innerHTML = count3
          if (count3 == 260) {
              clearInterval(maternity)
          }
      }

      function newbornSessions() {
        count4++
        document.querySelector("#number4").innerHTML = count4
        if (count4 == 385) {
            clearInterval(newborn)
        }
    }

    function petsSessions() {
        count5++
        document.querySelector("#number5").innerHTML = count5
        if (count5 == 57) {
            clearInterval(pets)
        }
    }
  
});