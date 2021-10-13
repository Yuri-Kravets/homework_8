/*let userAge = +prompt('введите год рождения');
let userCity = prompt('введите название Вашего города');
let userSport ;
const refusedToInsert = 'Жаль, что Вы не захотели ввести свой';
const likeChampion = 'Хочешь стать как';

switch (userAge) {
    case userAge: (userAge > 0)
    case userAge: (userAge === !isNaN)
    case userCity: ('string')
     userSport = prompt('введите вид спорта');

}*/
let year = prompt("В каком году Вы родились?", "");
let age;
let city;
let sport;
let = refusedToInsert = "Жаль, что Вы не захотели ввести свой ";
let = likeChampion = "Хочешь стать как ";

switch(year) {
  case null:
    age = refusedToInsert + "год рождения";
    alert(age);
    break;
  default:
    if (!isFinite(year)) {
      age = refusedToInsert + "год рождения";
      alert(age);
    } else {
      age = 2021 - year;
      city = prompt("В каком городе Вы живете?", "");
    switch(city) {
      case null:
        city = refusedToInsert + "город";
        alert(city);
        break;
      case "Киев":
        city = "Ты живешь в столице Украины";
        break;
      case "Москва":
        city = "Ты живешь в столице России";
        break;
      case "Минск":
        city = "Ты живешь в столице Белоруссии";
        break;
      default:
        city = "Ты живешь в городе " + city;
    }
    sport = prompt("Какой Ваш любимый вид спорта?", "")
    switch(sport) {
      case null:
        sport = refusedToInsert + "любимый вид спорта";
        alert(sport);
        break;
      case "футбол":
        sport = likeChampion + "Лионель Месси?";
        break;
      case "бокс":
        sport = likeChampion + "Василий Ломаченко?";
        break;
      case "киукушинкай":
        sport = likeChampion + "Лечи Курбанов?";
        break;
      default:
        sport = "Твой любимый спорт " + sport;
    }
    alert('Тебе ' + age + ' лет' + '\n' + city + '\n' + sport);
  }
}




