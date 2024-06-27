let suaidade;
let ação;
let aventura;
let RPG;
let fonte1;
let fonte2;

let jogos = {
  menor10: {
    ação: "Minecraft",
    aventura: "Freddi Fish Series",
    RPG: "Pokemon Let's Go",
  },
  entre10e15: {
    ação: "Fortnite",
    aventura: "Zelda",
    RPG: "Final Fantasy VII",
  },
  entre16e18: {
    ação: "GTA IV",
    aventura: "Assassin's Creed Odyssey",
    RPG: "Cyberpunk",
  },
  maior18: {
    ação: "GTA V",
    aventura: "The Sims",
    RPG: "Para de ser nerdola",
  },
};
function preload() {
  fonte1 = loadFont("fonte1.otf");
  fonte2 = loadFont("fonte2.otf");
}

function setup() {
  createCanvas(850, 400).position(100, 100);
  createSpan("Qual sua idade?").position(590, 530).id("idade");
  suaidade = createInput("").position(590, 585);
  ação = createCheckbox("Gosta de jogos de ação?").position(100, 600);
  aventura = createCheckbox("Gosta de jogos de aventura?").position(100, 650);
  RPG = createCheckbox("Gosta de jogos de RPG?").position(100, 700);
}

function draw() {
  background("white");
  let idade = parseInt(suaidade.value());
  let checkação = ação.checked();
  let checkaventura = aventura.checked();
  let checkRPG = RPG.checked();
  let jogo = "INSIRA SUAS PREFERÊNCIAS";
  if (suaidade.value() !== "") {
    jogo = mostrajogo(idade, checkação, checkaventura, checkRPG);
  }
  fill("black");
  textFont(fonte2);
  textAlign(CENTER,CENTER);
  textSize(40);
  text(jogo, 425,220);
  
  fill("#E91E63");
  textFont(fonte1);
  textAlign(CENTER,CENTER);
  textSize(95);
  text("MELHOR INDICADOR DE JOGOS", 425,20);
}

function mostrajogo(idade, checkação, checkaventura, checkRPG){
 if (isNaN(idade)) {
    return "IDADE INVÁLIDA";
  } else 
    if (idade < 5) {
    return "VOCÊ É UMA CRIANÇA, SAI DAQUI";
  } else 
    if (idade > 120) {
    return "JÁ MORREU";
    }
  if(idade < 10) {
    if (checkaventura){
      return jogos["menor10"]["aventura"];
    }
    if (checkação){
      return jogos["menor10"]["ação"];
    }
    if (checkRPG){
      return jogos["menor10"]["RPG"];
    }
  }
   else if(idade >= 10 && idade <= 15) {
    if (checkaventura){
      return jogos["entre10e15"]["aventura"];
    }
    if (checkação){
      return jogos["entre10e15"]["ação"];
    }
    if (checkRPG){
      return jogos["entre10e15"]["RPG"];
    }
  }
  else if(idade >= 16 && idade <= 18) {
    if (checkaventura){
      return jogos["entre16e18"]["aventura"];
    }
    if (checkação){
      return jogos["entre16e18"]["ação"];
    }
    if (checkRPG){
      return jogos["entre16e18"]["RPG"];
    }
  }
  else if(idade > 18) {
    if (checkaventura){
      return jogos["maior18"]["aventura"];
    }
    if (checkação){
      return jogos["maior18"]["ação"];
    }
    if (checkRPG){
      return jogos["maior18"]["RPG"];
    }
  }
}



