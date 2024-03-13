const currencies = [
    {
      "name": "Euro",
      "code": "EUR",
      "country": "Europe",
      "imagePath": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Euro_Series_Banknotes_%282019%29.jpg"
    },
    {
      "name": "Yen",
      "code": "JPY",
      "country": "Japan",
      "imagePath": "https://www.washingtonpost.com/creativegroup/uploads/2022/01/17222404/Japanese-Yen_1600x900.jpg"
    },
    {
      "name": "Colon",
      "code": "CRC",
      "country": "Costa Rica",
      "imagePath": "https://www.adobecar.com/wp-content/uploads/2019/04/costa-rica-colones.jpg"
    },
    {
      "name": "Peso",
      "code": "MXN",
      "country": "Mexico",
      "imagePath": "https://www.puertovallarta.net/wp-content/uploads/2015/05/mexican-currency-pesos-s.jpg"
    },
    {
      "name": "Pound",
      "code": "GBP",
      "country": "United Kingdom",
      "imagePath": "https://www.globocambio.co/documents/20151/31585/libra-esterlina-billetes.jpg/4360cca3-9f63-c215-4fc3-e9317e549604?t=1539771304328"
    },
    {
      "name": "Dollar",
      "code": "USD",
      "country": "United States",
      "imagePath": "https://upload.wikimedia.org/wikipedia/commons/0/00/USDnotesNew.png"

    },
    {
      "name": "Peso",
      "code": "DOP",
      "country": "Dominican Republic",
      "imagePath": "https://travel-4-fun.com/dominicana/wp-content/uploads/sites/3/2023/01/money-dominicana-main.jpeg"
    },
    {
      "name": "Rand",
      "code": "ZAR",
      "country": "South Africa",
      "imagePath": "https://www.globocambio.co/documents/20151/31597/rand-sudafricano-billetes.png/bcab2d93-95e7-983c-dbeb-5667637bbc16?t=1539771751531"
    },
    {
      "name": "Riyal",
      "code": "SAR",
      "country": "Saudi Arabia",
      "imagePath": "https://upload.wikimedia.org/wikipedia/en/9/98/Saudi_Riyal_5th_Domination.jpg"
    },
    {
      "name": "Pesos",
      "code": "ARS",
      "country": "Argentina",
      "imagePath": "https://preview.redd.it/zsnn4b2777t61.jpg?width=640&crop=smart&auto=webp&s=47d169952b1d222581efcd9682bbd3f717472b82"
    },
    {
      "name": "Dollar",
      "code": "AUD",
      "country": "Australia",
      "imagePath": "https://qph.cf2.quoracdn.net/main-qimg-02cc2e4de5d80ef17345a7b3fb73e980-lq"

    },
    {
      "name": "Dinar",
      "code": "BHD",
      "country": "Bahrain",
      "imagePath": "https://www.globalexchange.hk/documents/20151/208780/dinar-bahreini-billetes.jpg/a4550cdc-04a5-9c40-cd4b-bb0a204cb9e0?t=1557845325346"
    },
    {
      "name": "Dollars",
      "code": "BBD",
      "country": "Barbados",
      "imagePath": "https://www.totallybarbados.com/wp-content/uploads/2022/08/barbados-polymer-bank-notes.jpg"
    },
    {
      "name": "Dollars",
      "code": "BZD",
      "country": "Belize",
      "imagePath": "https://upload.wikimedia.org/wikipedia/en/3/30/Belize_dollar_bills_2003.png"
    },
    {
      "name": "Real",
      "code": "BRL",
      "country": "Brazil",
      "imagePath": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Novas_cedulas_real_thumb11-450x309.jpg"
    },
    {
      "name": "Dollar",
      "code": "XCD",
      "country": "Eastern Caribbean",
      "imagePath": "https://www.global-exchange.fr/documents/20151/137062/caribe-oriental-billetes.jpg/28a413d6-ce01-5ce0-146b-8a300733433b?t=1545985669338"
    },
    {
      "name": "Dollars",
      "code": "KYD",
      "country": "Cayman Islands",
      "imagePath": "https://globalbanks.com/wp-content/uploads/2023/05/Currency-of-Cayman-Islands-1.webp"
    },
    {
      "name": "Peso",
      "code": "CLP",
      "country": "Chile",
      "imagePath": "https://i.redd.it/current-issue-chilean-peso-clp-banknotes-coins-v0-3kjjjopblcib1.jpg?width=3744&format=pjpg&auto=webp&s=45151dcb78a7d81ce0df6889169f12dbed06187e"
    },
    {
      "name": "Yuan",
      "code": "CNY",
      "country": "China",
      "imagePath": "https://i.pinimg.com/564x/d3/f6/0f/d3f60fcb6d9ee72f886a90b42fc81b9d.jpg"
    },
    {
      "name": "Pesos",
      "code": "COP",
      "country": "Colombia",
      "imagePath": "https://www.globocambio.com/documents/20151/208765/peso_colombiano_billetes.png/422a6665-bfe3-9fa7-9f1f-d178c92e50ee?t=1557840304431"
    },
    {
      "name": "Won",
      "code": "KRW",
      "country": "South Korea",
      "imagePath": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Currency_South_Korea.jpg/252px-Currency_South_Korea.jpg"
    },
    {
      "name": "Couronne",
      "code": "DKK",
      "country": "Denmark",
      "imagePath": "https://www.atsnotes.com/catalog/banknotes-pictures/denmark/denmark-55.JPG"
    },
    {
      "name": "Dollar",
      "code": "FJD",
      "country": "Fiji",
      "imagePath": "https://robertsworldmoney.files.wordpress.com/2013/02/fijiset5notes5-200.jpg"
    },
    {
      "name": "Quetzal",
      "code": "GTQ",
      "country": "Guatemala",
      "imagePath": "https://i.redd.it/05013hm7t9i61.jpg"
    },
    {
      "name": "Lempira",
      "code": "HNL",
      "country": "Honduras",
      "imagePath": "https://www.atsnotes.com/catalog/banknotes-pictures/honduras/honduras-79.JPG"
    },
    {
      "name": "Dollar",
      "code": "HKD",
      "country": "Hong Kong",
      "imagePath": "https://i.pinimg.com/564x/2b/bd/df/2bbddf0aa65373492b19f9118ec0187f.jpg"
    },
    {
      "name": "Forint",
      "code": "HUF",
      "country": "Hungary",
      "imagePath": "https://www.portfolio.hu/img/upload/res/th/181217forint02b.png"
    },
    {
      "name": "Roupie",
      "code": "INR",
      "country": "India",
      "imagePath": "https://upload.wikimedia.org/wikipedia/commons/b/b8/Banknote_of_india.png"
    },
    {
      "name": "Roupie",
      "code": "IDR",
      "country": "Indonesia",
      "imagePath": "https://www.banknoteworld.com/blog/wp-content/uploads/2022/10/Indonesia-1000-100000-Rupiah-7-Pieces-Banknote-Set-2022-P-162N-168-UNC-686x1024.jpg"
    },
    {
      "name": "Couronne",
      "code": "ISK",
      "country": "Iceland",
      "imagePath": "https://www.atsnotes.com/catalog/banknotes-pictures/iceland/iceland-48.JPG"
    },
    {
      "name": "Shekel",
      "code": "ILS",
      "country": "Israel",
      "imagePath": "https://upload.wikimedia.org/wikipedia/commons/5/5e/%D7%94%D7%A9%D7%98%D7%A8%D7%95%D7%AA_%D7%94%D7%97%D7%93%D7%A9%D7%99%D7%9D_%D7%A9%D7%9C_%D7%99%D7%A9%D7%A8%D7%90%D7%9C.jpg"
    },
    {
      "name": "Dollar",
      "code": "JMD",
      "country": "Jamaica",
      "imagePath": "https://loopnewslive.blob.core.windows.net/liveimage/sites/default/files/2022-03/a058f99a6a03fcbe9d6270bb9e09c8a7new-jamaican-bank-note-series-final-march-11-2022.jpg"
    },
    {
      "name": "Dinar",
      "code": "JOD",
      "country": "Jordan",
      "imagePath": "https://www.banknoteworld.com/blog/wp-content/uploads/2023/01/list.jpg"
    },
    {
      "name": "Shilling",
      "code": "KES",
      "country": "Kenya",
      "imagePath": "https://mriguide.com/wp-content/uploads/2019/06/l_kenya-set-shillings-2019-pn-new01-banknote24-b-700x698.jpg"
    },
    {
      "name": "Dinar",
      "code": "KWD",
      "country": "Kuwait",
      "imagePath": "https://www.atsnotes.com/catalog/banknotes-pictures/kuwait/kuwait-1.JPG"
    },
    {
      "name": "Ringgit",
      "code": "MYR",
      "country": "Malaysia",
      "imagePath": "https://i.pinimg.com/736x/c0/ef/5b/c0ef5b793c955c82981bb8da5f4a506b.jpg"
    },
    {
      "name": "Dirham",
      "code": "MAD",
      "country": "Morocco",
      "imagePath": "https://www.global-exchange.com.au/documents/20151/31660/dirham-marroqui-billetes.png/845d1d6b-23cd-c802-c59b-863c8533a15d?t=1541523815721"
    },
    {
      "name": "Dollar",
      "code": "NZD",
      "country": "New Zealand",
      "imagePath": "https://www.investopedia.com/thmb/TdRZ8uCg8tzJAffJKY7ezAvD-hY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/NZbanknotes-bf8ab3866aad4363b74a39b39f1b850d.GIF"
    },
    {
      "name": "Roupie",
      "code": "NPR",
      "country": "Nepal",
      "imagePath": "https://www.globocambio.co/documents/20151/31519/rupia-nepali-billetes.jpg/7f06afb2-74c4-37b4-b109-fdeb833740b5?t=1539761981191"
    },
    {
      "name": "Cordoba",
      "code": "NIO",
      "country": "Nicaragua",
      "imagePath": "https://www.atsnotes.com/catalog/banknotes-pictures/nicaragua/nicaragua-210.JPG"
    },
    {
      "name": "Couronne",
      "code": "NOK",
      "country": "Norway",
      "imagePath": "https://image2.commarts.com/images1/9/5/0/1/1/1105999_0_992_LTEyNTM2NjkyNTkyMTAyNzQ4MzU.jpg"
    },
    {
      "name": "Rial",
      "code": "OMR",
      "country": "Oman",
      "imagePath": "https://www.banknoteworld.com/blog/wp-content/uploads/2021/03/Untitled-2-1-815x1024.png"
    },
    {
      "name": "Sol",
      "code": "PEN",
      "country": "Peru",
      "imagePath": "https://cdn.pixabay.com/photo/2015/08/27/10/59/banknotes-910201_960_720.jpg"
    },
    {
      "name": "Peso",
      "code": "PHP",
      "country": "Philippines",
      "imagePath": "https://upload.wikimedia.org/wikipedia/en/3/3c/New_Gen_Money_Philippines.png"
    },
    {
      "name": "Zloty",
      "code": "PLN",
      "country": "Poland",
      "imagePath": "https://i.pinimg.com/474x/b9/c8/ea/b9c8eac2459e3d083d0421d85070b20f.jpg"
    },
    {
      "name": "Couronne",
      "code": "CZK",
      "country": "Czech Republic",
      "imagePath": "https://www.atsnotes.com/catalog/banknotes-pictures/czech/czech-17.JPG"
    },
    {
      "name": "Leu",
      "code": "RON",
      "country": "Romania",
      "imagePath": "https://i.pinimg.com/564x/46/38/67/463867eaa9e059b2778900e7003b4e48.jpg"
    },
    {
      "name": "Rouble",
      "code": "RUB",
      "country": "Russia",
      "imagePath": "https://i.redd.it/4itwzhl9rvh61.jpg"
    },
    {
      "name": "Dollar",
      "code": "SGD",
      "country": "Singapore",
      "imagePath": "https://www.atsnotes.com/catalog/banknotes-pictures/singapore/singapore-38.JPG"
    },
    {
      "name": "Couronne",
      "code": "SEK",
      "country": "Sweden",
      "imagePath": "https://banknoteinfo.net/wp-content/uploads/2015/02/SEK-2k151.jpg"
    },
    {
      "name": "Franc",
      "code": "CHF",
      "country": "Switzerland",
      "imagePath": "https://studyinginswitzerland.com/wp-content/uploads/2021/02/swiss-francs.jpg"
    },
    {
      "name": "Franc",
      "code": "XPF",
      "country": "Tahiti",
      "imagePath": "https://www.newcaledonia.travel/sites/default/files/2016-08/nouveaux_billets_francs_pacifique_nouvelle_caledonie_653x437.jpg"
    },
    {
      "name": "Yuan",
      "code": "TWD",
      "country": "Taiwan",
      "imagePath": "https://i.ebayimg.com/images/g/KIcAAOSwhQhYx3LS/s-l1600.jpg"
    },
    {
      "name": "Baht",
      "code": "THB",
      "country": "Thailand",
      "imagePath": "https://www.atsnotes.com/catalog/banknotes-pictures/thailand/thailand-124.JPG"
    },
    {
      "name": "Dollar",
      "code": "TTD",
      "country": "Trinidad and Tobago",
      "imagePath": "https://upload.wikimedia.org/wikipedia/en/4/4f/Series_2020_TTD_Polymer_Design.png"
    },
    {
      "name": "Dinar",
      "code": "TND",
      "country": "Tunisia",
      "imagePath": "https://www.investopedia.com/thmb/4TbsWpm7hQraosQaP5-tP8E3qJ0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2021-07-17at2.57.32PM-92d8ff721bf641aa82eb5f389144be94.png"
    },
    {
      "name": "Livre",
      "code": "TRY",
      "country": "Turkey",
      "imagePath": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Turkish_Lira_Series_Banknotes_%28Modern%29.png/1200px-Turkish_Lira_Series_Banknotes_%28Modern%29.png"
    },
    {
      "name": "Dirham",
      "code": "AED",
      "country": "United Arab Emirates",
      "imagePath": "https://www.atsnotes.com/catalog/banknotes-pictures/united-arab-emirates/united-arab-emirates-7.JPG"
    },
    {
      "name": "Dong",
      "code": "VND",
      "country": "Vietnam",
      "imagePath": "https://evivatour.com/wp-content/uploads/2022/07/Vietnamese-dong-954x565.jpg"
    }
  ]
  
  
  // Function to get three random currencies different from the correct one
  function getThreeRandomCurrencies(correctCurrency) {
    // Filter out the correct currency
    let otherCurrencies = currencies.filter(currency => currency.code !== correctCurrency.code);
    // Shuffle the array
    let shuffled = otherCurrencies.sort(() => 0.5 - Math.random());
    // Return the first three currencies
    return shuffled.slice(0, 3);
  }
  
  // Display a random currency and choices
  function displayCurrencyAndChoices() {
    const feedbackElement = document.getElementById('feedback');
    feedbackElement.textContent = "";
    const correctChoice = currencies[Math.floor(Math.random() * currencies.length)];
    const otherChoices = getThreeRandomCurrencies(correctChoice);
    const choices = [...otherChoices, correctChoice].sort(() => Math.random() - 0.5);
  
    const currencyImage = document.getElementById('currency-image');
    // Use the imagePath property of the correct choice for the image source
    currencyImage.src = correctChoice.imagePath;
    currencyImage.alt = `Currency of ${correctChoice.country}`;
  
    const choicesContainer = document.getElementById('choices-container');
    choicesContainer.innerHTML = '';
  
    choices.forEach(choice => {
      const button = document.createElement('button');
      button.textContent = `${choice.name} `;
      button.onclick = function() { checkGuess(choice, correctChoice); };
      choicesContainer.appendChild(button);
    });
  }
  
  // Check the user's guess
  function checkGuess(guess, correctChoice) {
    const feedbackElement = document.getElementById('feedback');
    if (guess.code === correctChoice.code) {
      feedbackElement.textContent = `Correct! Well done. It's from ${guess.country}`;
      feedbackElement.style.color = 'green';
    } else {
      feedbackElement.textContent = `Incorrect! The correct answer was the ${correctChoice.name} from ${correctChoice.country}.`;
      feedbackElement.style.color = 'red';
    }
    setTimeout(displayCurrencyAndChoices, 2000); // Wait a bit before showing the next question
  }
  
  // Initialize the game
  window.onload = displayCurrencyAndChoices;
  