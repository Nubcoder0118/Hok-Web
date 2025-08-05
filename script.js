const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})


fetch('https://raw.githubusercontent.com/Pren7/MLBB-Winrate/refs/heads/main/winrate.json')
.then(function(response){
    return response.json();
})
.then(function(products){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let product of products){
        out += `
            <tr>
                <td> <img src="${product.icon}" alt = "${product.name}"></td>
                <td> ${product.name}</td>
                <td> ${product.winrate}</td>
                <td> ${product.banrate}</td>
                <td> ${product.pickrate}</td>
            </tr>
        `;
    }

    placeholder.innerHTML = out;
})

fetch('emblem.json')
.then(response => response.json())
.then(data => showInfo(data))

function showInfo(data){
    console.table(data.data);
}

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

herosLinks.addEventListener('click', function(e){
    e.preventDefault();
    startPage.style.display = 'none';
    heroTable.style.display = 'table';
    emblemsPage.style.display = 'none';
    emblemsCard.style.display = 'none';
    tips.style.display = 'none';
})

homeLink.addEventListener('click', function(e){
    e.preventDefault();
    heroTable.style.display = 'none';
    startPage.style.display = 'block';
    emblemsPage.style.display = 'none';
    emblemsCard.style.display = 'none';
    tips.style.display = 'none';

})

emblemsLink.addEventListener('click', function(e){
    e.preventDefault();
    startPage.style.display = 'none';
    heroTable.style.display = 'none';
    emblemsPage.style.display = 'block';
    emblemsCard.style.display = 'block';
    tips.style.display = 'none';
})

guide.addEventListener('click', function(e){
    e.preventDefault();
    startPage.style.display = 'none';
    heroTable.style.display = 'none';
    emblemsPage.style.display = 'none';
    emblemsCard.style.display = 'none';
    tips.style.display = 'block';
    lanes.style.display = 'block';
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


