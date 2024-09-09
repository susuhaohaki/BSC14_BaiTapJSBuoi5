document.getElementById("btnResult1").onclick = function () {
  let benchmark = parseFloat(document.getElementById("benchmark").value);
  let selectArea = parseFloat(document.getElementById("selectArea").value);
  let selectObject = parseFloat(document.getElementById("selectObject").value);
  let firstScore = parseFloat(document.getElementById("firstScore").value);
  let secondScore = parseFloat(document.getElementById("secondScore").value);
  let thirdScore = parseFloat(document.getElementById("thirdScore").value);
  let showResults1 = document.getElementById("showResults1");
  let totalScore =
    firstScore + secondScore + thirdScore + selectObject + selectArea;
  if (firstScore == 0 || secondScore == 0 || thirdScore == 0) {
    showResults1.innerHTML = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
  } else if (benchmark <= totalScore) {
    showResults1.innerHTML = `Bạn đã đậu. Tổng điểm: ${totalScore}`;
  } else if (benchmark > totalScore) {
    showResults1.innerHTML = `Bạn đã rớt. Tổng điểm: ${totalScore}`;
  } else {
    showResults1.innerHTML = `vui lòng nhập đầy đủ`;
  }
};

//Bai Tap 2
document.getElementById("btnResult2").onclick = function () {
  let kw = document.getElementById("kw").value;
  let fullName = document.getElementById("fullName1").value;
  let tongTien = 0;
  let showResults2 = document.getElementById("showResults2");
  if (kw > 0 && kw <= 50) {
    tongTien = kw * 500;
  } else if (kw > 50 && kw <= 100) {
    tongTien = 50 * 500 + (kw - 50) * 650;
  } else if (kw > 100 && kw <= 200) {
    tongTien = 50 * 500 + 50 * 650 + (kw - 100) * 850;
  } else if (kw > 200 && kw <= 350) {
    tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
  } else {
    tongTien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300;
  }
  console.log(showResults2);
  showResults2.innerHTML = `họ Tên : ${fullName} ; Tiền điện: ${tongTien.toLocaleString(
    "it-IT",
    {
      style: "currency",
      currency: "VND",
    }
  )}`;
};

//bài tập 3
document.getElementById("btnResult3").onclick = function () {
  let fullName = document.getElementById("fullName2").value;
  let tongThuThap = Number(document.getElementById("totalIncome").value);
  let dependents = document.getElementById("dependents").value;
  console.log(Number(4e6));
  let thuThapChiuThue = tongThuThap - Number(4e6) - dependents * Number(16e5);
  let tax = 0;
  if (thuThapChiuThue <= Number(60e6)) {
    tax = thuThapChiuThue * 0.05;
  } else if (thuThapChiuThue <= Number(120e6)) {
    tax = thuThapChiuThue * 0.1;
  } else if (thuThapChiuThue <= Number(210e6)) {
    tax = thuThapChiuThue * 0.15;
  } else if (thuThapChiuThue <= Number(384e6)) {
    tax = thuThapChiuThue * 0.2;
  } else if (thuThapChiuThue <= Number(624e6)) {
    tax = thuThapChiuThue * 0.25;
  } else if (thuThapChiuThue <= Number(960e6)) {
    tax = thuThapChiuThue * 0.3;
  } else {
    tax = thuThapChiuThue * 0.35;
  }
  document.getElementById(
    "showResults3"
  ).innerHTML = `họ Tên : ${fullName} ; Tiền thuế thu nhập cá nhân: ${tax.toLocaleString(
    "it-IT",
    {
      style: "currency",
      currency: "VND",
    }
  )}`;
};

function showExercise(exerciseId) {
  const exercises = [
    "exerciseOne",
    "exerciseTwo",
    "exerciseThree",
    "exerciseFour",
  ];
  const tabs = [
    "exerciseOneTab",
    "exerciseTwoTab",
    "exerciseThreeTab",
    "exerciseFourTab",
  ];

  // Hiển thị nội dung tương ứng và ẩn các nội dung khác
  exercises.forEach((id) => {
    const element = document.getElementById(id);
    if (id === exerciseId) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  });

  // Cập nhật các lớp CSS cho các tab
  tabs.forEach((tabId) => {
    const tab = document.getElementById(tabId);
    if (tabId === exerciseId + "Tab") {
      tab.classList.add("bg-blue-500", "text-white");
    } else {
      tab.classList.remove("bg-blue-500", "text-white");
    }
  });
}

document.getElementById("exerciseOneTab").onclick = function () {
  showExercise("exerciseOne");
};
document.getElementById("exerciseTwoTab").onclick = function () {
  showExercise("exerciseTwo");
};
document.getElementById("exerciseThreeTab").onclick = function () {
  showExercise("exerciseThree");
};
document.getElementById("exerciseFourTab").onclick = function () {
  showExercise("exerciseFour");
};

// Bai 4
document.getElementById("selectClient").onchange = function () {
  let select = document.getElementById("selectClient").value;
  if (select == "doanhNghiep") {
    document.getElementById("connectNumber").classList.remove("hidden");
  } else {
    document.getElementById("connectNumber").classList.add("hidden");
  }
};

document.getElementById("btnResult4").onclick = function () {
  let select = document.getElementById("selectClient").value;
  let tienCap = 0;
  let channelVipNumber = document.getElementById("channelVipNumber").value;
  let customerCode = document.getElementById("customerCode").value;
  if (select == "nhaDan") {
    tienCap = 4.5 + 20.5 + channelVipNumber * 7.5;
  } else if (select == "doanhNghiep") {
    let connectNumber = document.getElementById("connectNumber").value;
    if (connectNumber <= 10) {
      tienCap = 15 + 75 + channelVipNumber * 50;
    } else {
      tienCap = 15 + 75 + (connectNumber - 10) * 5 + channelVipNumber * 50;
    }
  } else {
    alert(" Hãy chọn loại khách hàng");
  }
  document.getElementById(
    "showResults4"
  ).innerHTML = ` Mã khách hàng: ${customerCode} ; Tiền cáp: ${tienCap.toLocaleString(
    "en-US",
    {
      style: "currency",
      currency: "USD",
    }
  )}`;
};
