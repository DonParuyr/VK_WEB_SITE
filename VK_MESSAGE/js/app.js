// //Отправить сообщение
// function addSMS() {
//   const smsBarView = document.getElementById('sms_bar_view'); //получаем sms

//   const newDiv = document.createElement("div"); newDiv.classList.add('sms');
//   const message = document.getElementById('sms_bar_sms'); //получаем текст
//   const newContent = document.createTextNode(message.value);
//   newDiv.appendChild(newContent); // добавить newDiv к newContent
//   smsBarView.appendChild(newDiv);
//   document.getElementById('send_sms').value = ''; //удалить сообщение
//   dayAndTime();
// }
// // Функция для нажатия клавиши Enter, которая при нажатии активирует функцию  addSMS() в input
// (function() {  
//   document.querySelector('input').addEventListener('keydown', function(e) {
//     if (e.keyCode === 13) {
//       addSMS();
//     }
//   });
// })();

// //Функция получения даты и времени
// function dayAndTime(){
//   let date = new Date();
  
//   let YY = date.getFullYear();
//   let MM = date.getMonth();
//   let DD = date.getDay();
//   let HOURSES = date.getHours();
//   let MINUTES = date.getMinutes();
  
//   message = `${HOURSES}:${MINUTES}`;
// }

function addSMS() {
  dayAndTime()
 
  if ((document.getElementById('smska').value) != ''){

    const sms = document.createElement("div"); // создаем div
    sms.classList.add('sms'); // добавим к div класс "sms".  div class="sms"
    console.log(sms);

        const img = document.createElement("img");
        img.src = "../img/friends/durov.png";
        sms.appendChild(img);

        const smsBarInfo = document.createElement("div"); // создаем еще один див  <div>
        smsBarInfo.classList.add('sms_bar_info'); //добавим к подДиву класс  <div class="sms_bar_info">
        sms.appendChild(smsBarInfo);

            const attributeA = document.createElement('a'); // создаем элемент А
            attributeA.href = 'https://sargsian.ru'

               const senderName = document.createTextNode("Павел");  // создаем текст "Павел"
               attributeA.appendChild(senderName);  //
            smsBarInfo.appendChild(attributeA);
            // <a href"https://sargsian.ru">Павел</a>

            const smsBarSms = document.createElement("div");
            smsBarSms.classList.add('sms_bar_sms');

                const attributeP = document.createElement("p");
                smsBarSms.appendChild(attributeP);
                smsBarInfo.appendChild(smsBarSms);

    const smsBarView = document.getElementById('sms_bar_view'); // получаем sms_bar_view 1-й блок div            
    smsBarView.appendChild(sms);

    const message = document.getElementById('smska'); // получаем в message текст из _ input id="smska" _ 
    const txt = document.createTextNode(message.value); // добавим текст из message в переменную newContent
    document.getElementById('smska').value = ''; //удалить сообщение
    attributeP.appendChild(txt); //поместим в newDiv  
    attributeP.appendChild(sms);
  }

}
// Функция для нажатия клавиши Enter, которая при нажатии активирует функцию  addSMS() в input
(function() {  
  document.getElementById('smska').addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
      addSMS();
    }
  });
})();

//Функция получения даты и времени
function dayAndTime(){
  let date = new Date();
  
  let YY = date.getFullYear();
  let MM = date.getMonth();
  let DD = date.getDay();
  let HOURSES = date.getHours();
  let MINUTES = date.getMinutes();
  
  let dataAndTime = `${HOURSES}:${MINUTES}`;
}

// удаление уведомления об сообщении
setTimeout(document.querySelector('.left_bar_new__message').remove(), 3000);