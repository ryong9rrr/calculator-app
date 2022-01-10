const clickDelete = () => {
  cy.get(".delete").click();
};

const clickClear = () => {
  cy.get(".modifier").click();
};

const clickEqaul = () => {
  cy.get(".equal").click();
};

describe("복잡한 계산기 앱 테스트", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/index.html");
  });

  it("del 버튼을 누르면 맨 마지막 연산을 취소한다.", () => {
    cy.get(".digit").contains("5").click();
    cy.get(".operation").contains("+").click();
    cy.get(".digit").contains("3").click();
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
    cy.get(".digit").contains("5").click();
    cy.get(".operation").contains("+").click();
    cy.get(".digit").contains("5").click();
    clickClear();
    //cy.get("#total").invoke("text").should("eq", "8");
    cy.get("#total").should("have.text", "0");
  });

  it("맨 처음에 X, /, .를 클릭할 수 없다.", () => {
    cy.get(".operation").contains("X").click();
    cy.get("#total").should("have.text", "0");

    cy.get(".operation").contains("/").click();
    cy.get("#total").should("have.text", "0");

    cy.get(".dot").click();
    cy.get("#total").should("have.text", "0");
  });

  it("연산자 뒤에 X, /, .를 클릭할 수 없다.", () => {
    cy.get(".digit").contains("5").click();
    cy.get(".operation").contains("+").click();

    cy.get(".operation").contains("X").click();
    cy.get("#total").should("have.text", "5+");

    cy.get(".operation").contains("/").click();
    cy.get("#total").should("have.text", "5+");

    cy.get(".dot").click();
    cy.get("#total").should("have.text", "5+");
  });

  it(") 뒤에 +, -, X, / 는 클릭할 수 있다.", () => {
    cy.get(".bracket").contains(")").click();
    for (const oper of ["+", "-", "X", "/"]) {
      cy.get(".operation").contains(oper).click();
      cy.get("#total").should("have.text", `)${oper}`);
      clickDelete();
    }
  });

  // equal 테스트
  it("맨 마지막 값이 )를 제외한 연산자라면 올바른 식이 아니다.", () => {
    for (const oper of ["+", "-", "X", "/", "."]) {
      cy.get(".digit").contains("5").click();
      cy.get(".operation").contains(oper).click();
      clickEqaul();
      cy.get("#total").should("have.text", `5${oper}`);
      clickClear();
    }
  });

  it("맨 마지막 값이 )라면 일단 올바른 식이다.", () => {
    cy.get(".bracket").contains(")").click();
    cy.get("#total").should("have.text", ")");
  });

  it("(는 숫자 뒤에 입력될 수 없다.", () => {
    for (let i = 0; i < 10; i++) {
      cy.get(".digit").contains(`${i}`).click();
      cy.get(".bracket").contains("(").click();
      cy.get("#total").should("have.text", `${i}`);
      clickClear();
    }
  });

  it(") 뒤에 .을 입력할 수 없다.", () => {
    cy.get(".bracket").contains(")").click();
    cy.get(".dot").click();
    cy.get("#total").should("have.text", ")");
  });

  it("맨 처음에 0을 계속 입력하면 0이다.", () => {
    for (let i = 0; i < 4; i++) {
      cy.get(".digit").contains("0").click();
      cy.get("#total").should("have.text", "0");
    }
  });

  it("0을 한번 입력하고 숫자를 입력하면 그 숫자가 렌더링된다.", () => {
    cy.get(".digit").contains("0").click();
    cy.get(".digit").contains("1").click();
    cy.get("#total").should("have.text", "1");
  });
});
