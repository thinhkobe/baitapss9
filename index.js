const heading = document.getElementById("heading");
console.log(heading);

let score = 4;

// câu lệnh điều kiện chỉ có if
if (score > 5) {
  console.log("đủ điều kiện qua môn");
}

//câu lệnh điều kiện if-else
//nếu thỏa mãn điều kiện thì vào trong if sai thì vào else

if (score > 8) {
  console.log("học lực giỏi");
  heading.innerHTML = "học lực giỏi";
} else {
//   console.log("chưa có cửa");
  heading.innerText = "không có cửa";
}

// câu lệnh có nhiều điều kiện khác nhau
//nhập vào điểm trung bình của học sinh A và xếp loại học lực theo tiêu chí sau:
//nếu đểm trung bình bé hơn 5 hoc lực là yếu
// nếu điểm trung bình lớn hơn 5 và bé hơn hoặc bằng 6.4 là điểm trung bình
// nếu điểm trung bình lớn hơn hoặc bằng 6.5 và bé hơn hoặc bằng 7.9 là khá
// nếu điểm trung bình lớn hơn hoặc bằng 8 và bé hơn hoặc bằng 9 là giỏi
//từ 9 đến 10 là xuất sắc
//nếu điểm bé hơn 0 hoặc lớn hơn 10

if (score < 0 || score > 10) {
  console.log("điểm nhập sai");
} else {
  if (score < 5) {
    console.log("học lực yếu");
  } else if (score > 5 && score <= 6.4) {
    console.log("học lực trung bình");
  } else if (score >= 6.5 && score <= 7.9) {
    console.log("học lực khá");
  } else if (score >= 8 && score <= 9) {
    console.log("giỏi");
  } else {
    console.log("xuất sắc");
  }
}

let year = 2024;
// cách 1
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("năm nhuận");
} else {
  console.log("không phải là năm nhuận");
}

// cách 2
let flag = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
if (flag) {
  console.log("năm nhuận");
} else {
  console.log("không phải là năm nhuận");
}

let gender = 5;

if (gender === 0) {
  console.log("giới tính nam");
} else {
  console.log("giới tính nữ");
}

// toán tử 3 ngôi
//cú pháp :(điều kiện)?(giá trị đúng):(giá trị sai)

let result = gender === 0 ? "Nam" : gender === 1 ? "nữ" : "other";
console.log("result:", result);

// Cấu trúc điều khiển switch-case
//  trường hợp trong 1 chương trình có nhiều điều kiện

// cú pháp t
// switch (key){}

// yêu cầu người dùng nhập vào lựa chọn +-*/

let key = "a";
switch (key) {
  case "+":
    console.log("đây là phép cộng");
    break;
  case "-":
    console.log("đây là phép trừ");
    break;
  case "*":
    console.log("đây là phép nhân");
    break;
  case "/":
    console.log("đây là phép chia");
    break;

  default:
    console.log("giá trị nhập vào không hợp lệ");
    break;
}

console.log(Math.random()); //tạo số ngẫu nhiên
console.log(Math.abs(-7)); //giá trị tuyệt đối
console.log(Math.pow(2, 64)); //hàm mũ
console.log(Math.ceil(1.6)); //làm tròn trên
console.log(Math.floor(1.6)); //làm tròn dưới
console.log(Math.round(1.4)); //phần thập phân >=5 làm tròn
console.log(Math.sqrt(4));//căn bậc 2
console.log(Math.PI);
