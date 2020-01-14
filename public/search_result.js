const search  = document.getElementById('search')
const searchresult = document.getElementById('searchresult')

data = [ '000webhost',
  '126',
  '17Media',
  '17173',
  '2844Breaches',
  '2fast4u',
  '500px',
  '7k7k',
  '8fit',
  '8tracks',
  'Abandonia',
  'AbuseWithUs',
  'AcneOrg',
  'Adapt',
  'Adobe',
  'AdultFriendFinder',
  'AdultFanFiction',
  'AerServ',
  'AgusiQTorrents',
  'AhaShare',
  'AIType',
  'Aipai',
  'AKP',
  'Ancestry',
  'AndroidForums',
  'AnimePlanet',
  'Animoto',
  'AntiPublic',
  'Apollo',
  'Appartoo',
  'ArmorGames',
  'ArmyForceOnline',
  'Artvalue',
  'AshleyMadison',
  'AstroPID',
  'Aternos',
  'AtlasQuantum',
  'Autocentrum',
  'Avast',
  'B2BUSABusinesses',
  'BabyNames',
  'Badoo',
  'BannerBit',
  'BattlefieldHeroes',
  'BeautifulPeople',
  'Bell',
  'Bell2017',
  'Bestialitysextaboo',
  'BigMoneyJobs',
  'BinWeevils',
  'BiohackMe',
  'BTSec',
  'BitcoinTalk',
  'Bitly',
  'BitTorrent',
  'BlackHatWorld',
  'BlackSpigotMC',
  'BlankMediaGames',
  'Bolt',
  'BombujEu',
  'Bookmate',
  'BotOfLegends',
  'Boxee',
  'Brazzers',
  'BTCE',
  'BtoBet',
  'Bukalapak',
  'BulgarianNationalRevenueAgency',
  'BusinessAcumen',
  'CafeMom',
  'CafePress',
  'CannabisForum',
  'Canva',
  'CashCrate',
  'CDProjektRed',
  'CheapAssGamer',
  'Chegg',
  'CivilOnline',
  'ClashOfKings',
  'ClixSense',
  'CloudPets',
  'ClubPenguinRewritten',
  'ClubPenguinRewrittenJul2019',
  'Coachella',
  'Coinmama',
  'Collection1',
  'Comcast',
  'COMELEC',
  'CouponMomAndArmorGames',
  'CrackCommunity',
  'CrackedTO',
  'CrackingForum',
  'Creative',
  'CrimeAgencyVBulletin',
  'CrossFire',
  'D3scene',
  'DaFont',
  'Dailymotion',
  'Dangdang',
  'DaniWeb',
  ]

search.addEventListener('input',()=>{
 
 matches = data.filter((element)=>{
                        const regex = new RegExp(`^${search.value}`,'gi')
                        // console.log(element)
                        return element.match(regex)  
                    })
	
	if (search.value.length === 0) { searchresult.innerHTML = '' }

	if (search.value.length != 0) {

 	searchresult.innerHTML = outputHtml(matches)     
	}

})


   const outputHtml = matches => {
      if (matches.length > 0) {
           htmlx = matches.map(
               match =>    
              `<div class="card card-body bg-danger mb-1" onClick = "autoFill(${match})">${match}</div>`
          ).join('');
            return htmlx  
      }
     }



function autoFill(match){
search.value = match

}