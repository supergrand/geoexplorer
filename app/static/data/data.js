var risk_data = {
	coveragesSettings:  [
		{
			  name: "gebco_sea",
			  min: -8000,
			  max: 0
		},
		{
			  name: "slope",
			  min: 0,
			  max: 1
		},
		{
			  name: "aspect",
			  min: 0,
			  max: 360
		},
		{
			  name: "eucdist_1000m",
			  min: 0,
			  max: 1
		},  
		{
			  name: "spring2007",
			  min: 0,
			  max: 63
		},
		{
			  name: "spring2008",
			  min: 0,
			  max: 63
		},
		{
			  name: "spring2009",
			  min: 0,
			  max: 63
		}
	],
    urlParameters: {
		geoserverURL: "http://localhost:8080/geoserver"
	}
};

var mammalData = {		
    "speciesInformationData":[
        ["Acadian redfish", "Sebastes fasciatus", "Scorpaenidae", "http://www.fao.org/fishery/species/2525/en"],
        ["Adriatic sturgeon", "Acipenser naccarii", "Acipenseridae", "http://www.fao.org/fishery/species/10183/en"],
        ["Aesop shrimp", "Pandalus montagui", "Pandalidae", "http://www.fao.org/fishery/species/3426/en"],
        ["African angelshark", "Squatina africana", "Squatinidae", "http://www.fao.org/fishery/species/15415/en"],
        ["African blackspot threadfin", "Polydactylus malagasyensis", "Polynemidae", "http://www.fao.org/fishery/species/18801/en"],
        ["African cuttlefish", "Sepia bertheloti", "Sepiidae", "http://www.fao.org/fishery/species/16968/en"],
        ["African squid", "Alloteuthis africana", "Loliginidae", "http://www.fao.org/fishery/species/17016/en"],
        ["Akiami paste shrimp", "Acetes japonicus", "Sergestidae", "http://www.fao.org/fishery/species/3428/en"],
        ["Alaska pollock(=Walleye poll.)", "Theragra chalcogramma", "Gadidae", "http://www.fao.org/fishery/species/3017/en"],
        ["Albacore", "Thunnus alalunga", "Scombridae", "http://www.fao.org/fishery/species/2496/en"],
        ["Amer. plaice(=Long rough dab)", "Hippoglossoides platessoides", "Pleuronectidae", "http://www.fao.org/fishery/species/3359/en"],
        ["American angler", "Lophius americanus", "Lophiidae", "http://www.fao.org/fishery/species/3380/en"],
        ["American cupped oyster", "Crassostrea virginica", "Ostreidae", "http://www.fao.org/fishery/species/2669/en"],
        ["American lobster", "Homarus americanus", "Nephropidae", "http://www.fao.org/fishery/species/3482/en"],
        ["American sea scallop", "Placopecten magellanicus", "Pectinidae", "http://www.fao.org/fishery/species/3519/en"],
        ["Amur sturgeon", "Acipenser schrenckii", "Acipenseridae", "http://www.fao.org/fishery/species/10187/en"],
        ["Analogous bobtail squid", "Sepiola affinis", "Sepiolidae", "http://www.fao.org/fishery/species/17097/en"],
        ["Anchoveta(=Peruvian anchovy", "Engraulis ringens", "Engraulidae", "http://www.fao.org/fishery/species/2917/en"],
        ["Andrea cuttlefish", "Sepia andreana", "Sepiidae", "http://www.fao.org/fishery/species/17071/en"],
        ["Angel squid", "Ancistroteuthis lichtensteini", "Onychoteuthidae", "http://www.fao.org/fishery/species/16948/en"]
    ]
};

var georeferences_data = [
    ["AFGHANISTAN" , "60.5054,29.612733,74.93195,38.538967"],
    ["ALBANIA" , "19.29795,39.713733,21.072,42.7006"],
    ["ALGERIA" , "-8.69675,18.852433,11.96305,37.025967"],
    ["AMERICAN SAMOA" , "-170.9021,-14.541433,-168.23395,-14.183633"],
    ["ANDORRA" , "1.3726,42.404867,1.781219,42.621636"],
    ["ANGOLA" , "11.57905,-18.112767,24.1105,-4.424667"],
    ["ANGUILLA" , "-63.1879,18.137033,-62.9537,18.248633"],
    ["ANTARCTICA" , "-179.999427042259,-89.9,179.999427042256,-60.9997330347133"],
    ["ANTIGUA AND BARBUDA" , "-61.89365,16.9478,-61.64325,17.735533"],
    ["ARGENTINA" , "-73.4967,-55.049767,-53.64205,-21.829967"],
    ["ARMENIA" , "43.4194,38.9416,46.5982,41.3796"],
    ["ARUBA" , "-70.08745,12.4276,-69.83805,12.647367"],
    ["AUSTRALIA" , "72.57625,-53.259967,159.4839,-10.078033"],
    ["AUSTRIA" , "9.47885,46.427367,17.15825,49.010433"],
    ["AZERBAIJAN" , "44.7416,38.4074,50.37515,41.924867"],
    ["BAHAMAS" , "-79.2951,20.8592,-72.6932,27.0249"],
    ["BAHRAIN" , "50.402,25.862667,50.66065,26.339733"],
    ["BAKER-HOWLAND-JARVIS" , "-176.76955,0.1971,-176.38025,0.848433"],
    ["BANGLADESH" , "87.8338,20.794167,92.67495,26.491433"],
    ["BARBADOS" , "-59.6715,13.018433,-59.3994,13.285133"],
    ["BELARUS" , "23.1605,51.331367,32.6273,56.223167"],
    ["BELGIUM" , "2.5104,49.518533,6.3713,51.528667"],
    ["BELIZE" , "-89.19635,15.799133,-87.64955,18.4742"],
    ["BENIN" , "0.7266,6.189467,3.81025,12.340233"],
    ["BERMUDA" , "-64.98725,32.189967,-64.6069,32.406167"],
    ["BHUTAN" , "88.668547,26.804233,92.08275,28.342233"],
    ["BOLIVIA" , "-69.706,-22.762867,-57.49985,-9.6598"],
    ["BOSNIA AND HERZEGOVINA" , "15.77965,42.621233,19.61625,45.251767"],
    ["BOTSWANA" , "19.9836,-26.8509,29.2724,-17.837133"],
    ["BRAZIL" , "-73.97965,-33.8089,-28.8133,5.259233"],
    ["BRITISH INDIAN OCEAN TERRITORY" , "71.2711,-7.505967,72.47375,-5.220733"],
    ["BRUNEI DARUSSALAM" , "114.0778,4.119667,115.3485,5.099067"],
    ["BULGARIA" , "22.34235,41.2841,28.559,44.237"],
    ["BURKINA FASO" , "-5.5285,9.4826,2.2205,15.1109"],
    ["BURUNDI" , "29.17565,-4.499667,30.8881,-2.4882"],
    ["CAMBODIA" , "102.2838,10.4398,107.52335,14.561533"],
    ["CAMEROON" , "8.34605,1.648433,16.32655,13.158733"],
    ["CANADA" , "-141.06265,41.671167,-52.64095,83.1522"],
    ["CAPE VERDE" , "-25.45625,14.702533,-22.55505,17.15"],
    ["CAYMAN ISLANDS" , "-81.4223,19.2398,-79.75185,19.7329"],
    ["CENTRAL AFRICAN REPUBLIC" , "14.512,2.727,27.4848,11.062967"],
    ["CHAD" , "13.5963,7.523867,24.08065,23.507333"],
    ["CHILE" , "-89.1566,-56.3359,-66.53165,-17.5216"],
    ["CHINA" , "73.5403,16.0968,134.7658,53.608867"],
    ["CHRISTMAS ISLAND" , "105.619,-10.3823,105.69085,-10.351733"],
    ["COCOS (KEELING) ISLANDS" , "95.2723,-12.2493,96.8062,-11.742167"],
    ["COLOMBIA" , "-81.8458,-4.0608,-66.8912,15.886067"],
    ["COMOROS" , "43.121,-12.405267,44.527,-11.3164"],
    ["CONGO" , "11.0154,-4.999933,18.691,3.681333"],
    ["CONGO THE DEMOCRATIC REPUBLIC OF THE" , "12.1532,-13.528667,31.3713,5.3374"],
    ["COOK ISLANDS" , "-165.7749,-11.650367,-165.37025,-10.815933"],
    ["COSTA RICA" , "-87.01515,5.4829,-82.6145,11.217367"],
    ["COTE D'IVOIRE" , "-8.7309,4.283467,-2.48625,10.486367"],
    ["CROATIA" , "13.50481,42.4555,19.2728,46.583016"],
    ["CUBA" , "-84.88225,19.796767,-74.10875,23.263867"],
    ["CYPRUS" , "32.196,34.596467,34.5541,35.748533"],
    ["CZECH REPUBLIC" , "12.0978,48.5857,18.90825,51.041333"],
    ["DENMARK" , "8.00875,54.590067,15.15975,57.805567"],
    ["DJIBOUTI" , "41.7834,10.874833,43.4419,12.718233"],
    ["DOMINICA" , "-61.5093,15.237433,-61.20985,15.627967"],
    ["DOMINICAN REPUBLIC" , "-71.90115,17.506667,-68.2548,19.880967"],
    ["EAST TIMOR" , "124.081233,-9.373487,127.319,-8.349"],
    ["ECUADOR" , "-92.0364,-4.891367,-75.23925,1.715733"],
    ["EGYPT" , "24.78595,22.008123,36.88215,31.746867"],
    ["EL SALVADOR" , "-90.12705,13.0919,-87.6757,14.478067"],
    ["EQUATORIAL GUINEA" , "8.34785,0.824267,11.456,3.7184"],
    ["ERITREA" , "36.3629,12.344214,43.0529,18.039133"],
    ["ESTONIA" , "21.75065,57.6099,28.1741,59.6835"],
    ["ETHIOPIA" , "33.0563,3.550567,47.97805,19.896167"],
    ["FALKLAND ISLANDS MALVINAS" , "-61.47105,-52.5233,-57.8102,-51.0832"],
    ["FAROE ISLANDS" , "-7.71855,61.392267,-6.3104,62.419167"],
    ["FIJI" , "-180,-21.808767,180,-15.7846"],
    ["FINLAND" , "19.45165,59.806267,31.42675,70.137467"],
    ["FRANCE" , "-176.3726,-27.946767,172.15695,51.122333"],
    ["FRENCH GUIANA" , "-54.54515,1.999333,-51.7183,5.779333"],
    ["FRENCH POLYNESIA" , "-150.8061,-18.0048,-148.0971,-17.036567"],
    ["FRENCH SOUTHERN TERRITORIES" , "50.0717,-49.642933,70.5273,-45.8805"],
    ["GABON" , "8.59375,-3.9324,14.72285,2.299667"],
    ["GAMBIA" , "-16.79745,13.105767,-13.8271,13.7983"],
    ["GEORGIA" , "39.923261,41.1446,46.7882,43.6354"],
    ["GERMANY" , "5.87225,47.2249,15.04765,55.0839"],
    ["GHANA" , "-3.3352,4.678367,1.25875,11.169167"],
    ["GREECE" , "19.65595,34.851,28.16225,41.885033"],
    ["GREENLAND" , "-73.39145,59.7644,-11.72105,83.674733"],
    ["GRENADA" , "-61.839279,11.956733,-61.59945,12.179133"],
    ["GUADELOUPE" , "-61.81885,15.840433,-61.1777,16.4324"],
    ["GUAM" , "144.62375,13.277267,144.98795,13.6521"],
    ["GUATEMALA" , "-92.28845,13.7392,-88.23725,17.783133"],
    ["GUERNSEY" , "-2.77195,49.381867,-2.3856,49.4828"],
    ["GUINEA" , "-15.1616,7.179467,-7.68565,12.672033"],
    ["GUINEA-BISSAU" , "-16.92935,10.839167,-13.6464,12.672033"],
    ["GUYANA" , "-61.3364,1.278567,-56.5865,8.373633"],
    ["HAITI" , "-74.49565,18.0219,-71.62015,20.107033"],
    ["HONDURAS" , "-89.3019,12.961867,-82.8413,17.467133"],
    ["HUNGARY" , "16.065,45.768167,22.88665,48.577"],
    ["ICELAND" , "-25.3873,63.426633,-13.5579,67.174067"],
    ["INDIA" , "68.1721,6.470867,97.27195,37.118133"],
    ["INDONESIA" , "95.1087,-10.878967,141.0309,5.978267"],
    ["IRAN" , "44.01905,25.120267,63.3325,39.825267"],
    ["IRAQ" , "38.63745,29.119667,48.5924,37.4467"],
    ["IRELAND" , "-10.571,51.450467,-6.1045,55.4358"],
    ["ISLE OF MAN" , "-4.874,54.0471,-4.38405,54.424067"],
    ["ISRAEL" , "34.177243,29.519233,35.8844,33.314233"],
    ["ITALY" , "6.52765,35.532933,18.47165,47.059967"],
    ["JAMAICA" , "-78.4033,16.911867,-75.9029,18.462967"],
    ["JAPAN" , "122.8517,20.468967,146.13545,45.546567"],
    ["JERSEY" , "-2.40735,49.181767,-2.15155,49.2844"],
    ["JOHNSTON ATOLL" , "-169.64765,16.845033,-169.5304,16.907567"],
    ["JORDAN" , "34.8481,29.204733,39.74045,33.319433"],
    ["KAZAKHSTAN" , "46.4657,40.6715,87.40955,55.4617"],
    ["KENYA" , "33.7914,-4.729033,42.20675,4.542067"],
    ["KINGMAN REEF - PALMYRA ATOLL" , "-162.0129,5.794667,-161.9275,5.853"],
    ["KIRIBATI" , "-175.8883,-11.523967,176.69935,4.8706"],
    ["KOREA DEMOCRATIC PEOPLE'S REPUBLIC OF" , "124.1465,37.552733,130.6874,43.0412"],
    ["KOREA REPUBLIC OF" , "124.9997,33.1999,130.8977,38.564405"],
    ["KUWAIT" , "46.49765,28.557733,48.4888,30.140667"],
    ["KYRGYZSTAN" , "69.22635,39.292,80.3863,43.292233"],
    ["LAO PEOPLE'S DEMOCRATIC REPUBLIC" , "100.07815,13.963667,107.5605,22.540733"],
    ["LATVIA" , "20.8848,55.723733,28.1695,58.147367"],
    ["LEBANON" , "35.2636,33.262433,36.56995,34.720367"],
    ["LESOTHO" , "27.04245,-30.613033,29.4317,-28.549033"],
    ["LIBERIA" , "-11.5545,4.278,-7.4955,8.526333"],
    ["LIBYA ARAB JAMAHIRIY_" , "9.1949,19.6007,25.245,33.183333"],
    ["LIECHTENSTEIN" , "9.417494,46.997118,9.61825,47.206967"],
    ["LITHUANIA" , "20.76725,53.949833,26.86295,56.478033"],
    ["LUXEMBOURG" , "5.69075,49.470867,6.43925,50.182633"],
    ["MACAU" , "113.352805,22.266567,113.64425,22.487433"],
    ["MACEDONIA THE FORMER YUGOSLAV REPUBLIC" , "20.48435,40.908767,23.01185,42.398131"],
    ["MADAGASCAR" , "42.67535,-25.580067,50.4287,-12.0137"],
    ["MALAWI" , "32.7198,-17.0924,35.93715,-9.500267"],
    ["MALAYSIA" , "99.6346,0.9351,119.2795,7.417033"],
    ["MALDIVES" , "72.5723,-0.739367,73.6987,7.194"],
    ["MALI" , "-12.08985,10.1315,4.34825,24.997733"],
    ["MALTA" , "14.22605,35.837233,14.649,36.139367"],
    ["MARSHALL ISLANDS" , "160.8925,4.588533,172.2296,12.3939"],
    ["MARTINIQUE" , "-61.241,14.391567,-60.7837,14.8491"],
    ["MAURITANIA" , "-17.0583,14.669667,-5.00065,27.406533"],
    ["MAURITIUS" , "56.401,-20.633133,63.50495,-10.402433"],
    ["MAYOTTE" , "45.0551,-13.045133,45.32135,-12.6251"],
    ["MEXICO" , "-118.34045,14.519233,-86.63915,32.755267"],
    ["MICRONESIA - FEDERATED STATES OF" , "159.7215,5.272,163.07195,6.696067"],
    ["MIDWAI ISLANDS" , "-177.4143,28.193,-177.2783,28.3228"],
    ["MOLDOVA - REPUBLIC OF" , "26.5871,45.528238,29.9864,48.481733"],
    ["MONACO" , "7.267656,43.6426,7.53715,43.927506"],
    ["MONGOLIA" , "87.6924,41.553167,119.899,52.096"],
    ["MONTSERRAT" , "-62.26695,16.659067,-62.20585,16.738"],
    ["MOROCCO" , "-13.26225,27.6511,-1.1251,35.87"],
    ["MOZAMBIQUE" , "30.0867,-26.767533,40.87665,-10.568067"],
    ["MYANMAR" , "92.1068,9.755067,101.048,28.184067"],
    ["NAMIBIA" , "11.72,-28.881233,25.23535,-16.866767"],
    ["NAURU" , "167.0567,-0.589533,167.11675,-0.5351"],
    ["NEPAL" , "80.0464,26.411167,88.1283,30.364033"],
    ["NETHERLANDS" , "3.3026,50.711233,7.14225,53.539867"],
    ["NETHERLANDS ANTILLES" , "-69.16155,11.711233,-66.13465,12.397367"],
    ["NEW CALEDONIA" , "159.8613,-22.9837,168.914,-18.4219"],
    ["NEW ZEALAND" , "-178.94835,-57.294267,179.22415,-8.536767"],
    ["NICARAGUA" , "-87.74495,10.7611,-82.6318,14.9877"],
    ["NIGER" , "0.09595,11.814233,15.95105,23.507833"],
    ["NIGERIA" , "2.64745,4.226367,14.7131,13.807067"],
    ["NIUE" , "-169.92405,-19.139433,-169.63905,-18.9068"],
    ["NORFOLK ISLAND" , "167.7933,-29.217267,167.94745,-29.0449"],
    ["NORTHERN MARIANA ISLANDS" , "143.2344,14.1388,146.2014,20.6741"],
    ["NORWAY" , "-9.169,58.037433,33.46415,80.884167"],
    ["OMAN" , "52.003603,16.691113,59.82915,26.417867"],
    ["PAKISTAN" , "60.9339,23.683133,75.52705,36.9695"],
    ["PALAU" , "134.1386,6.798967,134.8889,7.697967"],
    ["PALESTINE" , "34.07335,31.067749,35.598633,32.594033"],
    ["PANAMA" , "-83.0577,7.1904,-77.17625,9.6265"],
    ["PAPUA NEW GUINEA" , "140.8018,-11.691233,159.50015,-0.784233"],
    ["PARAGUAY" , "-62.7526,-27.5863,-54.24475,-19.248333"],
    ["PERU" , "-81.3752,-18.247967,-68.75585,-0.050133"],
    ["PHILIPPINES" , "111.82475,4.704433,126.7051,21.3256"],
    ["POLAND" , "14.10525,49.0147,24.13405,54.922967"],
    ["PORTUGAL" , "-31.25925,32.335633,-6.25515,42.028267"],
    ["PUERTO RICO" , "-67.2807,17.913933,-65.38815,18.459233"],
    ["QATAR" , "50.70915,24.6815,51.74715,26.170267"],
    ["REUNION" , "55.2646,-21.451133,55.8696,-20.883"],
    ["ROMANIA" , "20.2073,43.7213,30.20235,48.21"],
    ["RUSSIAN FEDERATION" , "-180,41.2846,180,81.927267"],
    ["RWANDA" , "28.8737,-2.890967,30.87085,-1.116267"],
    ["SAINT HELENA" , "-5.9486,-16.042567,-5.7812,-15.896867"],
    ["SAINT KITTS AND NEVIS" , "-62.92925,17.095533,-62.5697,17.3875"],
    ["SAINT LUCIA" , "-61.1531,13.692333,-60.8714,14.0824"],
    ["SAINT PIERRE AND MIQUELON" , "-56.41835,46.7927,-56.1141,47.203467"],
    ["SAINT VINCENT AND THE GRENADINES" , "-61.62325,12.2329,-61.1719,13.362333"],
    ["SAN MARINO" , "12.23665,43.882767,12.4976,44.070533"],
    ["SAO TOME AND PRINCIPE" , "6.3808,0.075233,7.44865,1.704133"],
    ["SAUDI ARABIA" , "34.5647,15.518117,55.028463,32.275"],
    ["SENEGAL" , "-17.7009,12.283667,-11.4326,16.624867"],
    ["SEYCHELLES" , "46.04125,-11.5018,56.26545,-4.231767"],
    ["SIERRA LEONE" , "-13.39655,6.905,-10.2617,10.008"],
    ["SINGAPORE" , "103.6183,1.3645,103.88895,1.4793"],
    ["SLOVAKIA" , "16.8745,47.792133,22.5518,49.5692"],
    ["SLOVENIA" , "13.4225,45.352576,16.576871,46.901"],
    ["SOLOMON ISLANDS" , "155.4885,-12.2589,170.23905,-5.210433"],
    ["SOMALIA" , "40.9763,-1.640967,51.41685,11.9692"],
    ["SOUTH AFRICA" , "16.50735,-34.7871,32.80535,-22.152867"],
    ["SOUTH GEORGIA AND THE SOUTH SANDWICH ISL" , "-42.1187,-59.4409,-26.23775,-53.452433"],
    ["SPAIN" , "-18.26745,27.5218,4.2802,43.739867"],
    ["SRI LANKA" , "79.5574,6.0023,81.89185,9.856367"],
    ["SUDAN" , "21.8241,3.426933,38.9644,22.009756"],
    ["SURINAME" , "-58.09095,1.9214,-53.90215,6.035667"],
    ["SWAZILAND" , "30.7093,-27.274367,32.2211,-25.720333"],
    ["SWEDEN" , "11.06005,55.385433,23.989,69.126433"],
    ["SWITZERLAND" , "5.8814,45.7606,10.58005,47.693367"],
    ["SYRIA" , "35.6348,32.3535,42.21705,37.3552"],
    ["TAIWAN - PROVINCE OF CHINA" , "119.2594,21.999733,122.2268,25.637833"],
    ["TAJIKISTAN" , "67.42345,36.7487,75.1309,41.066867"],
    ["TANZANIA" , "29.29035,-11.737133,40.4958,-1.0601"],
    ["THAILAND" , "97.3234,5.697633,105.57965,20.5392"],
    ["TOGO" , "-0.0933,6.086033,1.7728,11.124"],
    ["TONGA" , "-176.29485,-22.319633,-173.6335,-15.5681"],
    ["TRINIDAD AND TOBAGO" , "-61.93015,10.0588,-60.5064,11.2911"],
    ["TUNISIA" , "7.521,30.1174,11.59235,37.291"],
    ["TURKEY" , "25.7317,35.939633,44.7416,42.214367"],
    ["TURKMENISTAN" , "52.48045,35.1277,66.558,42.754"],
    ["TURKS AND CAICOS ISLANDS" , "-72.42375,21.2068,-70.9723,21.9866"],
    ["TUVALU" , "176.1042,-12.571533,179.8403,-5.725"],
    ["UGANDA" , "29.5619,-1.501367,35.02905,4.201733"],
    ["UKRAINE" , "22.0955,44.4744,40.13205,52.452833"],
    ["UNITED ARAB EMIRATES" , "50.7756,22.540493,56.3684,26.241233"],
    ["UNITED KINGDOM" , "-130.77105,-40.3249,1.70915,60.880567"],
    ["UNITED STATES" , "-179.22745,-56.5109,158.80735,71.399467"],
    ["URUGUAY" , "-58.39985,-34.9494,-53.1923,-30.1059"],
    ["UZBEKISTAN" , "55.975,37.1818,73.0411,45.6219"],
    ["VANUATU" , "166.55505,-20.260633,170.30605,-13.112333"],
    ["VATICAN CITY HOLY SEE" , "12.465919,41.7912,12.755146,41.920848"],
    ["VENEZUELA" , "-73.37305,0.793967,-59.8755,15.7633"],
    ["VIETNAM" , "102.2111,8.589833,109.412,23.4265"],
    ["VIRGIN ISLANDS" , "-64.8782,18.3688,-64.2303,18.751433"],
    ["VIRGIN ISLANDS U.S." , "-65.37415,17.6519,-64.60795,18.383667"],
    ["WAKE ISLAND" , "166.4183,19.441,166.50975,19.509833"],
    ["WALLIS AND FUTUNA ISLANDS" , "-178.2172,-14.383267,-178.00905,-14.2644"],
    ["WESTERN SAHARA" , "-17.08725,20.761433,-8.6836,27.654567"],
    ["WESTERN SAMOA" , "-172.8562,-14.080933,-171.45495,-13.471067"],
    ["YEMEN" , "42.05785,12.1411,54.45815,18.033511"],
    ["YUGOSLAVIA" , "18.4559,41.948567,22.9804,46.217033"],
    ["ZAMBIA" , "21.92875,-18.0931,33.53855,-8.221467"],
    ["ZIMBABWE" , "25.23535,-22.465267,33.06475,-15.691267"],
    ["WORLD" , "-171.89125,-3.2149,179.6405,32.8913"]
];