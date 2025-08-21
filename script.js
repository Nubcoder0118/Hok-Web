const hamMenu = document.getElementById('hamburger');
const nav = document.querySelector('nav');

hamMenu.addEventListener('click', (e) => {
  e.preventDefault();
  nav.classList.toggle('active');
  hamMenu.classList.toggle('active');
});

// auto close menu when clicking navigation links (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        hamMenu.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && nav.classList.contains('active')) {
        nav.classList.remove('active');
        hamMenu.classList.remove('active');
    }
});


let heroData = [];

fetch('https://raw.githubusercontent.com/Pren7/MLBB-Winrate/refs/heads/main/winrate.json')
.then(response => response.json())
.then(products => {
    heroData = products;
    renderTable(heroData);
})

function renderTable(data) {
    const placeholder = document.querySelector("#data-output");
    let out = "";
    for (let hero of data) {
        out += `
            <tr>
                <td><img src="${hero.icon}" alt="${hero.name}"></td>
                <td>${hero.name}</td>
                <td>${hero.winrate}</td>
                <td>${hero.banrate}</td>
                <td>${hero.pickrate}</td>
            </tr>
        `;
    }
    placeholder.innerHTML = out;
}

let sortState = {
    winrate: 'desc',
    banrate: 'desc',
    pickrate: 'desc',
};

function parseRate(rate){
    return parseFloat(rate.replace('%', '')) || 0;
}

document.querySelectorAll('th').forEach(th => {
    th.addEventListener('click', () =>{
        const colId = th.getAttribute('id');
        // skip columns withotu id
        if (!colId) return; 
        // removes the sort- from the id
        let key = colId.replace('sort-', '');

        // sort heroes
        heroData.sort((a, b) => {
            let aVal = parseRate(a[key]);
            let bVal = parseRate(b[key]);

            if (sortState[key] === 'asc'){
                return aVal - bVal;
            } else{
                return bVal - aVal;
            }
        })

        sortState[key] = sortState[key] === 'asc' ? 'desc' : 'asc';
        renderTable(heroData);
    })
});



const herosLinks = document.getElementById('hero-links');
const heroTable = document.getElementById('hero-table');

const startPage = document.getElementById('main-page');

const emblemsPage = document.getElementById('emblems');
const emblemsLink = document.getElementById('embs');

const emblemsCard = document.getElementById('cards');

const guide = document.getElementById('knowledge');
const tips = document.getElementById('tipsntricks');
const lanes = document.getElementById('lanes');

const homeLink = document.getElementById('main-link');

const preperation = document.getElementById('preperation');
const builds = document.getElementById('builds');

const calculatorLink = document.getElementById("price-calculator-link");
const calculatorContainer = document.getElementById('price-calculator-container')


herosLinks.addEventListener('click', function(e){
    e.preventDefault();
    startPage.style.display = 'none';
    heroTable.style.display = 'table';
    emblemsPage.style.display = 'none';
    emblemsCard.style.display = 'none';
    tips.style.display = 'none';
    builds.style.display = 'none';
})

homeLink.addEventListener('click', function(e){
    e.preventDefault();
    heroTable.style.display = 'none';
    startPage.style.display = 'block';
    emblemsPage.style.display = 'none';
    emblemsCard.style.display = 'none';
    tips.style.display = 'none';
    builds.style.display = 'none';
    calculatorContainer.style.display = "none";

})

emblemsLink.addEventListener('click', function(e){
    e.preventDefault();
    startPage.style.display = 'none';
    heroTable.style.display = 'none';
    emblemsPage.style.display = 'block';
    emblemsCard.style.display = 'block';
    tips.style.display = 'none';
    builds.style.display = 'none';
    calculatorContainer.style.display = "none";
})

guide.addEventListener('click', function(e){
    e.preventDefault();
    startPage.style.display = 'none';
    heroTable.style.display = 'none';
    emblemsPage.style.display = 'none';
    emblemsCard.style.display = 'none';
    tips.style.display = 'block';
    lanes.style.display = 'block';
    builds.style.display = 'none';
    calculatorContainer.style.display = "none";
})

preperation.addEventListener('click', function(e){
    e.preventDefault();
    startPage.style.display = 'none';
    heroTable.style.display = 'none';
    emblemsPage.style.display = 'none';
    emblemsCard.style.display = 'none';
    tips.style.display = 'none';
    builds.style.display = 'block';
    calculatorContainer.style.display = "none";
})

calculatorLink.addEventListener("click", () => {
    calculatorContainer.style.display = "block";
    startPage.style.display = 'none';
    heroTable.style.display = 'none';
    emblemsPage.style.display = 'none';
    emblemsCard.style.display = 'none';
    tips.style.display = 'none';
    builds.style.display = 'none';
})

const cardsData = [
    { image: 'embls/assasin.png', title: 'Assassin', description: 'Fast burst damage role and offers penetration + phsyical damage with movement speed'},
    { image: 'embls/basic.png', title: 'basic', description: 'hybrid regeneration boost and enhances both HP and mana-regeneration'},
    { image: 'embls/mage.png', title: 'mage', description: 'Deals magical damage and buffs magical penetration'},
    { image: 'embls/tank.png', title: 'tank', description: 'Durable and defensive role offering extra hp and both physical + magical defense'},
    { image: 'embls/marksman.png', title: 'marksman', description: 'High DPS ranged role offering attack speed and physical damage'},
    { image: 'embls/support.png', title: 'support', description: 'Heals and buffs allies'},
    { image: 'embls/fighter.png', title: 'tank', description: 'Balanced melee role with focus on spell vamp, hybrid defense, and adaptive attack'},
]

const lanesData = [
    {image: 'lanes/exp.png', title: 'EXP', description: `Make sure you don’t lose a lot of hp early game because it would be an opportunity for the enemy to invade your second buff, 1:20-1:35 is when the jungler reaches lvl 4 to gank, so as a gold lane or exp you should back up rather than extending 
        that way you won’t get punished, Wave management is crucial for both lanes, say your jungle is ganking your lane and you freeze your lane under your tower, enemy hero would have to get out of their tower to obtain the exp and gold. Therefore, its more likely for a gank to happen.`
    },

    {image: 'lanes/gold.png', title: 'GOLD', description: `1:20-1:35 is when the jungler reaches lvl 4 to gank, so as a gold lane or exp you should back up rather than extending that way you won’t get punished. 
. Wave management is crucial for both lanes, say your jungle is ganking your lane and you freeze your lane under your tower, enemy hero would have to get out of their tower to obtain the exp and gold. Therefore, its more likely for a gank to happen.
. During teamfights try to stay behind your teammates to maximize damage so you don’t get picked off
`}, 
     {image: 'lanes/jungle.png', title: 'JUNGLE', description: `Try to clear your jungle creeps asap and see if there's an opportunity to gank.
        In solo & duo & trio you often would want to farm rather than engaging all the time with assassin jungles. For example, if you’re on a hero like ling & karina where you spike around 6 minutes after you’ve completed your first item you can invade the opponent when they start turtle if they don’t clear their buff before turtle. 
        Make sure you don’t lose a lot of hp early game because it would be an opportunity for the enemy to invade your second buff. 
`},
    
    {image: 'lanes/mid.png', title: 'MID', description: `If you’re a hero that lacks mobility early game you can try to stay in the mid bush to offer vision rather than rotating (Yve, Xavier, Nana, Cecillion). 
. Always check bushes with your skills to avoid a surprise gank from the enemies.
`},
    {image: 'lanes/roam.png', title: 'ROAM', description: `Give vision for your teammates to let them know beforehand if they’re being ganked
. Instead of baby sitting your marksman you should always try to rotate with your jungles and mid to make sure you do not have a number disadvantage during early fights. 
`},

]

const container = document.getElementById('cards')

cardsData.forEach(card => {
    const cardElem = document.createElement('div');
    cardElem.className = 'thecard';

    cardElem.innerHTML = `
    <div class="thefront">
      <img src="${card.image}" alt="${card.title}">
    </div>
    <div class="theback">Description: ${card.title, card.description}</div>
  `;
    

  container.appendChild(cardElem);
})

const roles = document.getElementById('lanes')

lanesData.forEach(card => {
    const roleElem = document.createElement('div');
    roleElem.className = 'thecard';

    roleElem.innerHTML = `
    <div class = "thefront">
        <img src="${card.image}" alt = "${card.title}">
    </div>
    <div class = "theback">Description: ${card.title, card.description}</div>
    `
    roles.appendChild(roleElem);
})


let heroBuilds = [];

fetch('equipment.json')
  .then(response => response.json())
  .then(data => {
    heroBuilds = data;
    console.log("Hero builds loaded:", heroBuilds);
  })
  .catch(() => {
    console.error("Failed to load hero builds JSON");
  });

const submitBtn = document.getElementById("mysubmit");
const inputField = document.getElementById("myText");
const buildDisplay = document.getElementById("build-display");

submitBtn.addEventListener("click", () => {
  if (heroBuilds.length === 0) {
    buildDisplay.innerHTML = "<p>Loading builds, please wait and try again.</p>";
    return;
  }

  const inputName = inputField.value.trim().toLowerCase();
  if (!inputName) {
    buildDisplay.innerHTML = "<p>Please enter a hero name.</p>";
    return;
  }

  const hero = heroBuilds.find(h => h.name.toLowerCase() === inputName);

  if (!hero) {
    buildDisplay.innerHTML = `<p>No build found for hero: <b>${inputField.value}</b></p>`;
    return;
  }

  const imagesHTML = hero.bestBuild
    .map(url => `<img src="${url}" alt="item" class="build-item" style="width: 64px; height: 64px; margin: 5px;">`)
    .join('');

  buildDisplay.innerHTML = `
    <h3>Recommended Build for ${hero.name}:</h3>
    <div>${imagesHTML}</div>
  `;
});



