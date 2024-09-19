let numberArr = [10, 2, 33, 46, 11];
document.getElementById("txt-array").innerHTML = `[${numberArr}]`;
// Tính tổng số dương
let tinhTongSoDuong = () => {
  let ketQua = 0;
  numberArr.forEach((item) => {
    if (item > 0) {
      ketQua += item;
    }
  });
  document.getElementById(
    "txt-tong-so-duong"
  ).innerHTML = `Tổng số dương: ${ketQua}`;
};
// -----------------------------------------------------------------------------

// Đếm số dương
let demSoDuong = () => {
  let ketQua = 0;
  numberArr.forEach((item) => {
    if (item > 0) {
      ketQua++;
    }
  });
  document.getElementById(
    "txt-dem-so-duong"
  ).innerHTML = `Đếm số dương: ${ketQua}`;
};
// -----------------------------------------------------------------------------
// tìm số nhỏ nhất
let timSoNhoNhat = () => {
  let min = numberArr[0];
  numberArr.forEach((item) => {
    if (item < min) {
      min = item;
    }
  });
  document.getElementById("txt-so-nho-nhat").innerHTML = `Số nhỏ nhất: ${min}`;
};
// -----------------------------------------------------------------------------

// Tìm số dương nhỏ nhất trong mảng
let timSoDuongNhoNhat = () => {
  let min = numberArr[0];
  numberArr.forEach((item) => {
    if (item < min && item > 0) {
      min = item;
    }
  });
  document.getElementById(
    "txt-so-duong-nho-nhat"
  ).innerHTML = `Số dương nhỏ nhất: ${min}`;
};
// -----------------------------------------------------------------------------

//Tìm số chẵn cuối cùng
let timSoChanCuoiCung = () => {
  let ketQua = 0;
  numberArr.forEach((item) => {
    if (item % 2 === 0) {
      ketQua = item;
    } else {
      ketQua = -1;
    }
  });
  document.getElementById(
    "txt-so-chan-cuoi-cung"
  ).innerHTML = `Số chẵn cuối: ${ketQua}`;
};
//

// -----------------------------------------------------------------------------
// Số nguyên tố
let kiemTraSoNguyenTo = (n) => {
  let flag = 1;
  if (n < 2) return (flag = 0);
  let i = 2;
  while (i < n) {
    if (n % i == 0) {
      flag = 0;
      break;
    }
    i++;
  }

  return flag;
};
let timSoNguyenTo = (item) => {
  for (let i = 0; i < numberArr.length; i++) {
    if (kiemTraSoNguyenTo(numberArr[i]) == 1) {
      item = numberArr[i];
    }
  }
  document.getElementById(
    "txt-tim-so-nguyen-to"
  ).innerHTML = `Số nguyên tố: [${item}]`;
};

//
//=======================================

// -----------------------------------------------------------------------------
let submit = () => {
  let number = document.getElementById("number").value;
  if (number.trim() === "") {
    alert("vui lòng nhập số");
    return;
  }
  numberArr.push(number * 1);
  document.getElementById("txt-array").innerHTML = `[${numberArr}]`;
  //   yc 1
  tinhTongSoDuong();
  //   yc 2
  demSoDuong();
  //   yc 3
  timSoNhoNhat();
  //   yc4
  timSoDuongNhoNhat();
  //   yc 5
  timSoChanCuoiCung();
  //
  timSoNguyenTo();
  //
};
// -----------------------------------------------------------------------------

// đổi vị trí
let swapItems = () => {
  let index1 = document.getElementById("index-1").value;
  let index2 = document.getElementById("index-2").value;
  let temp = numberArr[index1];
  numberArr[index1] = numberArr[index2];
  numberArr[index2] = temp;
  //
  document.getElementById("txt-array").innerHTML = `[${numberArr}]`;
};
// -----------------------------------------------------------------------------

// sắp xếp tăng
let sort = () => {
  for (let i = 0; i < numberArr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < numberArr.length; j++) {
      if (numberArr[minIndex] > numberArr[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = numberArr[i];
      numberArr[i] = numberArr[minIndex];
      numberArr[minIndex] = temp;
    }
  }
  document.getElementById(
    "txt-array"
  ).innerHTML = `Sắp xếp tăng dần: [${numberArr}]`;
};
