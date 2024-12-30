describe("객체 리터럴을 이용한 객체의 생성 ", () => {
  let person = {
    hobby: "Computer Game",
    age: 30,
    doCoding: function () {
      console.log("doCoding");
    },
    // 띄어쓰기가 퐇마된 키를 사용하고자 한다면 큰 따옴표 활용
    "like cat": true,
  };
  test("객체 리터럴로 객체를 생성한 후 접근할 수 있다.", () => {
    console.log(person);
    // 괄호 표기법으로 특정 프로퍼티에 접근
    console.log(`person["hobby"] : ${person["hobby"]}`);
    // 점 표기법으로 특정 프로퍼티에 접근
    console.log(`person.hobby : ${person.hobby}`);
  });

  test("객체에 새로운 프로퍼티를 추가할 수 있다.", () => {
    console.log(person);
    console.log((person.hobby2 = "call lovers"));
    console.log(`person.hobby2 = ${person.hobby2}`);

    console.log((person["hobby3"] = "call lovers!!!!"));
    console.log(`person[hobby3] = ${person.hobby3}`);
  });

  test("[Object.freeze] 객체의 불변성을 유지할 수 있다. (기존 속성 수정X, 새 속성 추가 X)", () => {
    console.log(person);

    Object.freeze(person);

    /*Cannot add property hobby2, object is not extensible
    TypeError: Cannot add property hobby2, object is not extensible
    at Object.<anonymous>*/
    console.log((person.hobby2 = "call lovers"));
    console.log(`person.hobby2 = ${person.hobby2}`);
  });

  test("[Object.seal]객체의 기존 속성은 변경할 수 있는 채로, 새로운 속성을 추가하지 못하도록 할 수 있다.", () => {
    console.log(`person.age = ${person.age}`);
    Object.seal(person);
    person["age"] = 999;
    console.log(`person["age"] : ${person["age"]}`);
    /*Cannot add property hobby999, object is not extensible
    TypeError: Cannot add property hobby999, object is not extensible
    at Object.<anonymous*/
    person["hobby999"] = "Reading Comics";
    console.log(`person.hobby999 : ${person.hobby999}`);
  });

  test("프로퍼티를 삭제하는 방법은 delete 키워드를 사용한다.", () => {
    console.log(person);
    delete person.age;
    console.log(person);
  });

  describe("Object2 테스트", () => {
    const animal = {
      type: "고양이",
      name: "나비",
      color: "black",
      cry: (sound) => {
        console.log(`cat cries ${sound}`);
      },
    };
    test("객체의 프로퍼티에 인자를 전달할 수도 있다.", () => {
      console.log(animal.cry("야옹"));
    });
  });
});
