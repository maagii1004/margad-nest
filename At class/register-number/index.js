const register = "УЖ07300479";
const regions = {
  А: "Архангай",
  Б: "Баян-Өлгий",
  В: "Баянхонгор",
  Г: "Булган",
  Д: "Говь-Алтай",
  Е: "Дорноговь",
  Ж: "Дорнод",
  З: "Дундговь",
  И: "Завхан",
  Й: "Өвөрхангай",
  К: "Өмнөговь",
  Л: "Сүхбаатар",
  М: "Сэлэнгэ",
  Н: "Төв",
  О: "Увс",
  П: "Ховд",
  Р: "Хөвсгөл",
  С: "Хэнтий",
  Т: "Дархан-Уул",
  Ф: "Орхон",
  Х: "Говьсүмбэр",
  У: "Улаанбаатар",
};
 
const getInfoFromRegister = (registerNo) => {
  const firstLetter = registerNo[0];
  const region = regions[firstLetter];
  const birthDigits = registerNo.slice(2, 8);
  const rawYear = birthDigits.slice(0, 2);
  const rawMonth = birthDigits.slice(2, 4);
  const day = birthDigits.slice(4, 6);
  const checkGender = birthDigits.slice(6, 8);
 
  const isBornAfter2000 = parseInt(rawMonth) > 12;
 
  let year = "";
  let month = "";
  if (isBornAfter2000) {
    year = "20" + rawYear;
    month = rawMonth - 20;
  } else {
    year = "19" + rawYear;
    month = rawMonth;
  }

  let gender = "";
  if (checkGender % 2 === 0) {
     gender = "Male ";
  } else {
     gender = "Female";
  }


 
  console.log({ region, year, month, day, gender});
};
 
getInfoFromRegister(register);
 
 