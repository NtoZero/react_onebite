describe("Date 객체", () => {
  let dateNow = new Date();
  test("1. Date 객체를 생성하는 방법", () => {
    console.log(dateNow); // 현재시간

    let date2 = new Date(1997, 1, 7, 23, 59, 59);
    console.log(date2); //"1997-02-07T14:59:59.000Z"

    let date3 = new Date("1995-10-27 01:30:00");
    /*console.log는 객체를 출력할 때 로컬 시간대에서 UTC로 변환하여 출력한다.*/
    console.log(date3); // "1995-10-26T16:30:00.000Z"
    console.log(date3.toLocaleString()); // "1995. 10. 27. 오전 1:30:00"

    let date4 = new Date("1995-10-27 01:30:00");
    console.log(date4.toString());
  });
  test("2. 타임스탬프, getTime() 메서드", () => {
    // 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
    let ts1 = dateNow.getTime(); // 1724938988703 등
    console.log(ts1);
    let dateObj = new Date(ts1);
    console.log(`dateObj : ${dateObj}`); // dateObj : Wed Jan 01 2025 21:10:49 GMT+0900 (대한민국 표준시)
  });
  test("3. 시간 요소들을 추출하는 방법", () => {
    let year = dateNow.getFullYear();
    let month = dateNow.getMonth() + 1; //월은 '0'부터 시작
    let date = dateNow.getDate();

    let hour = dateNow.getHours();
    let minute = dateNow.getMinutes();
    let seconds = dateNow.getSeconds();

    console.log(year, month, date, hour, minute, seconds);
  });
  test("4. 시간 수정하기", () => {
    let date = new Date(1997, 1, 7, 23, 59, 59);
    console.log(`date : ${date}`);
    date.setFullYear(2023);
    date.setMonth(2);
    date.setDate(30);
    date.setHours(23);
    date.setMinutes(59);
    date.setSeconds(59);
    console.log(`date : ${date}`);
  });

  test("5. 시간을 여러 포맷으로 출력하기", () => {
    let date = new Date(1997, 1, 7, 23, 59, 59);
    console.log(date.toDateString());
    console.log(date.toLocaleString());
  });
});
