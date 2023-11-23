// bài 1

let weight = +prompt("nhập chỉ số cân nặng");
let height = +prompt("Chiều cao của bạn là đơn vị m ?");
let bmi = weight / (height * height);

const heading = document.getElementsByClassName("heading")[0];
const type = document.getElementsByClassName("type")[0];

heading.innerHTML = "chỉ số BMI của bạn là : " + bmi;

if(bmi<18.5){
    type.innerHTML = "Cân nặng thấp gầy"
}else if(bmi>18.5 && bmi<24.9){
    type.innerHTML = "Cân nặng bình thường"
}else if(bmi=25){
    type.innerHTML = "Cân nặng tiền béo phì"
}else if(bmi>25 && bmi<29.9){
    type.innerHTML = "Cân nặng béo "
}else if(bmi>30 && bmi<34.9){
    type.innerHTML = "Cân nặng béo phì cấp độ I"
}else if(bmi>35 && bmi<39.9){
    type.innerHTML = "Cân nặng béo phì cấp độ II"
}else if(bmi>=40){
    type.innerHTML = "Cân nặng béo phì cấp độ III"
}

// bài 2 tính số ngày trong tháng

let month = +prompt("tìm hiểu số ngày tháng ?");
let year = +prompt("bạn muốn biết" + month + "của năm nào");
let flag = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    alert("số ngày của tháng " + month + year + "là 31 ngày");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    alert("số ngày của tháng " + month + year + "là 30 ngày");
    break;
  case 2:
    if (flag) {
      alert(
        "năm" +
          year +
          "là năm nhuận nên số ngày của tháng 2 năm " +
          year +
          "là 29 ngày"
      );
    } else {
      alert("số ngày của tháng 2 năm " + year + "là 28 ngày");
    }
    {
    }
    break;
  default:
    alert("nhập lại tháng");
    break;
}
