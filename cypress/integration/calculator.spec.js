const clickDelete = () => cy.get(".delete").click();

const clickClear = () => cy.get(".modifier").click();

const clickEqaul = () => cy.get(".equal").click();

const clickDot = () => cy.get(".dot").click();

const clickOpenBracket = () => cy.get(".bracket").contains("(").click();

const clickClosedBracket = () => cy.get(".bracket").contains(")").click();

const clickNumber = (number) => cy.get(".digit").contains(`${number}`).click();

const clickOperator = (oper) =>
  cy.get(".operation").contains(`${oper}`).click();

const clickedFunction = (strings) => {
  for (const x of Array.from(strings)) {
    if (x === "(") clickOpenBracket();
    else if (x === ")") clickClosedBracket();
    else if (x === ".") clickDot();
    else isNaN(x) ? clickOperator(x) : clickNumber(x);
  }
};

describe("복잡한 계산기 앱 테스트", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/index.html");
  });

  it("del 버튼을 누르면 맨 마지막 연산을 취소한다.", () => {
    clickedFunction("5+3");
    clickDelete();
    //cy.get("#total").invoke("text").should("eq", "8");
    cy.get("#total").should("have.text", "5+");
  });

  it("하나의 연산만 있을 때 del 버튼을 누르면 0이 된다.", () => {
    cy.get(".digit").contains("5").click();
    clickDelete();
    //cy.get("#total").invoke("text").should("eq", "8");
    cy.get("#total").should("have.text", "0");
  });

  it("AC 버튼을 누르면 연산을 0으로 초기화한다.", () => {
    clickedFunction("5+5");
    clickClear();
    //cy.get("#total").invoke("text").should("eq", "8");
    cy.get("#total").should("have.text", "0");
  });

  it("맨 처음에 X, /, .를 클릭할 수 없다.", () => {
    clickOperator("X");
    cy.get("#total").should("have.text", "0");

    clickOperator("/");
    cy.get("#total").should("have.text", "0");

    clickDot();
    cy.get("#total").should("have.text", "0");
  });

  it("연산자 뒤에 X, /, .를 클릭할 수 없다.", () => {
    clickedFunction("5+X");
    cy.get("#total").should("have.text", "5+");

    clickOperator("/");
    cy.get("#total").should("have.text", "5+");

    clickDot();
    cy.get("#total").should("have.text", "5+");
  });

  it(") 뒤에 +, -, X, / 는 클릭할 수 있다.", () => {
    clickClosedBracket();
    for (const oper of ["+", "-", "X", "/"]) {
      clickOperator(oper);
      cy.get("#total").should("have.text", `)${oper}`);
      clickDelete();
    }
  });

  // equal 테스트
  it("맨 마지막 값이 )를 제외한 연산자라면 올바른 식이 아니다.", () => {
    for (const oper of ["+", "-", "X", "/", "."]) {
      clickNumber("5");
      clickOperator(oper);
      clickEqaul();
      cy.get("#total").should("have.text", `5${oper}`);
      clickClear();
    }
  });

  it("맨 마지막 값이 )라면 일단 올바른 식이다.", () => {
    clickClosedBracket();
    cy.get("#total").should("have.text", ")");
  });

  it("(는 숫자 뒤에 입력될 수 없다.", () => {
    for (let i = 0; i < 10; i++) {
      clickNumber(`${i}`);
      clickOpenBracket();
      cy.get("#total").should("have.text", `${i}`);
      clickClear();
    }
  });

  it(") 뒤에 .을 입력할 수 없다.", () => {
    clickClosedBracket();
    clickDot();
    cy.get("#total").should("have.text", ")");
  });

  it("맨 처음에 0을 계속 입력하면 0이다.", () => {
    for (let i = 0; i < 4; i++) {
      clickNumber("0");
      cy.get("#total").should("have.text", "0");
    }
  });

  it("0을 한번 입력하고 숫자를 입력하면 그 숫자가 렌더링된다.", () => {
    clickedFunction("01");
    cy.get("#total").should("have.text", "1");
  });

  it("잘못된 괄호 테스트", () => {
    clickedFunction("(1))");
    clickEqaul();
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("괄호가 올바르지 않아요.");
    });
  });

  it("잘못된 소수점 테스트", () => {
    clickedFunction("1.1.1");
    clickEqaul();
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("소수점이 올바르지 않아요.");
    });
  });

  it("첫번째 값 음수 테스트", () => {
    clickedFunction("-1");
    clickEqaul();
    cy.get("#total").should("have.text", "-1");
  });

  it("음수 연산 테스트", () => {
    clickedFunction("-1+5");
    clickEqaul();
    cy.get("#total").should("have.text", "4");
  });

  it("연속된 연산 테스트", () => {
    clickedFunction("-1+5");
    clickEqaul();
    cy.get("#total").should("have.text", "4");
    clickedFunction("-9");
    clickEqaul();
    cy.get("#total").should("have.text", "-5");
  });

  it("(24.8-1.6)X2-3X(1+2)", () => {
    clickedFunction("(24.8-1.6)X2-3X(1+2)");
    clickEqaul();
    cy.get("#total").should("have.text", "37.4");
  });
});
