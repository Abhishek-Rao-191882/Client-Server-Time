const socket = io()

let dateandtime = document.querySelector('.dateTime')

socket.on("dateTime", (dateTime) => {
    console.log(dateTime)
    dateandtime.innerHTML = dateTime;
  });

  
