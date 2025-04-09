function updateClock() {
   const now = new Date();


   let hours = now.getHours();
   let Minutes = now.getMinutes();
   let sec = now.getSeconds();
   let mil = now.getMilliseconds();
   let day = now.getDate();
   let month = now.getMonth() + 1;
   let year = now.getFullYear();

   hours = (hours >= 10)? hours: "0" + hours;
   Minutes = (Minutes >= 10)? Minutes: "0" + Minutes;
   sec = (sec >= 10)? sec: "0" + sec;
   mil = (mil >= 10)? mil: "0" + mil;
   day = (day >= 10)? day: "0" + day;
   month = (month >= 10)? month: "0" + month;

   document.getElementById("display").textContent = `${hours}:${Minutes}:${sec}:${mil}`;
   document.getElementById("display2").textContent = `${day}/${month}/${year}`;
  }
 updateClock();

 setInterval(updateClock,1);
