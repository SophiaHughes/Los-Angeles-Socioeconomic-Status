mapboxgl.accessToken = 'pk.eyJ1Ijoic2h1Z2hlczU4IiwiYSI6ImNtb2tzanJxajAzaXkyb3B5YTU0YWo0dncifQ.hhJVBWVqUoE40kEsf0tPfQ';

const neighborhoodData = {
  "Bel Air": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 4.2, sf_pct: 88 },
  "Brentwood": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 5.1, sf_pct: 72 },
  "Pacific Palisades": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 3.8, sf_pct: 82 },
  "Westwood": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 9.8, sf_pct: 41 },
  "West Hollywood": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 11.3, sf_pct: 8 },
  "Venice": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 12.4, sf_pct: 38 },
  "Mar Vista": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 9.1, sf_pct: 55 },
  "Westchester": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 8.3, sf_pct: 74 },
  "Palms": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 13.1, sf_pct: 14 },
  "Culver City": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 8.9, sf_pct: 52 },
  "Malibu": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 3.5, sf_pct: 91 },
  "Marina del Rey": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 6.2, sf_pct: 12 },
  "Playa del Rey": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 7.8, sf_pct: 61 },
  "Century City": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 7.2, sf_pct: 9 },
  "Cheviot Hills": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 6.8, sf_pct: 78 },
  "Rancho Park": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 7.4, sf_pct: 68 },
  "Playa Vista": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 5.9, sf_pct: 22 },
  "Hollywood": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 22.4, sf_pct: 11 },
  "Koreatown": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 26.1, sf_pct: 5 },
  "Silver Lake": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 15.3, sf_pct: 32 },
  "Echo Park": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 23.7, sf_pct: 28 },
  "Los Feliz": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 14.2, sf_pct: 34 },
  "Downtown": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 28.9, sf_pct: 4 },
  "Westlake": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 32.1, sf_pct: 6 },
  "Pico-Union": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 30.6, sf_pct: 9 },
  "Mid-City": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 19.8, sf_pct: 29 },
  "Mid-Wilshire": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 20.3, sf_pct: 18 },
  "Fairfax": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 18.5, sf_pct: 21 },
  "Hancock Park": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 9.2, sf_pct: 62 },
  "Larchmont": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 9.7, sf_pct: 58 },
  "Adams-Normandie": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 27.3, sf_pct: 24 },
  "Jefferson Park": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 26.8, sf_pct: 31 },
  "University Park": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 29.1, sf_pct: 19 },
  "Exposition Park": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 28.3, sf_pct: 22 },
  "Historic Filipinotown": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 24.5, sf_pct: 14 },
  "Chinatown": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 26.2, sf_pct: 8 },
  "Hollywood Hills": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 12.1, sf_pct: 71 },
  "Studio City": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 10.8, sf_pct: 58 },
  "Sherman Oaks": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 11.2, sf_pct: 54 },
  "Van Nuys": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 24.7, sf_pct: 38 },
  "North Hollywood": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 22.1, sf_pct: 41 },
  "Arleta": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 21.3, sf_pct: 68 },
  "Pacoima": { region: "North LA", status: "Lower income / higher poverty", poverty_pct: 29.8, sf_pct: 62 },
  "Sylmar": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 18.4, sf_pct: 66 },
  "Granada Hills": { region: "North LA", status: "Higher income / lower poverty", poverty_pct: 8.7, sf_pct: 81 },
  "Northridge": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 14.1, sf_pct: 62 },
  "Chatsworth": { region: "North LA", status: "Higher income / lower poverty", poverty_pct: 7.9, sf_pct: 78 },
  "Canoga Park": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 19.2, sf_pct: 44 },
  "Reseda": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 20.5, sf_pct: 52 },
  "Tarzana": { region: "North LA", status: "Higher income / lower poverty", poverty_pct: 9.3, sf_pct: 72 },
  "Encino": { region: "North LA", status: "Higher income / lower poverty", poverty_pct: 7.1, sf_pct: 69 },
  "Woodland Hills": { region: "North LA", status: "Higher income / lower poverty", poverty_pct: 8.2, sf_pct: 74 },
  "West Hills": { region: "North LA", status: "Higher income / lower poverty", poverty_pct: 6.4, sf_pct: 82 },
  "Winnetka": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 16.8, sf_pct: 58 },
  "Sun Valley": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 23.6, sf_pct: 55 },
  "Sunland": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 14.7, sf_pct: 76 },
  "Tujunga": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 16.3, sf_pct: 71 },
  "Atwater Village": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 16.9, sf_pct: 44 },
  "Glassell Park": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 21.4, sf_pct: 48 },
  "Mount Washington": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 15.8, sf_pct: 62 },
  "Cypress Park": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 24.1, sf_pct: 51 },
  "Montecito Heights": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 23.8, sf_pct: 54 },
  "Highland Park": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 20.8, sf_pct: 46 },
  "Eagle Rock": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 17.2, sf_pct: 58 },
  "Arlington Heights": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 22.8, sf_pct: 31 },
  "Boyle Heights": { region: "East LA", status: "Lower income / higher poverty", poverty_pct: 28.7, sf_pct: 29 },
  "East Los Angeles": { region: "East LA", status: "Lower income / higher poverty", poverty_pct: 27.3, sf_pct: 34 },
  "El Sereno": { region: "East LA", status: "Lower income / higher poverty", poverty_pct: 22.6, sf_pct: 48 },
  "Lincoln Heights": { region: "East LA", status: "Lower income / higher poverty", poverty_pct: 25.4, sf_pct: 38 },
  "City Terrace": { region: "East LA", status: "Lower income / higher poverty", poverty_pct: 30.2, sf_pct: 42 },
  "Commerce": { region: "East LA", status: "Lower income / higher poverty", poverty_pct: 27.6, sf_pct: 44 },
  "Maywood": { region: "East LA", status: "Lower income / higher poverty", poverty_pct: 31.8, sf_pct: 31 },
  "Bell": { region: "East LA", status: "Lower income / higher poverty", poverty_pct: 29.3, sf_pct: 36 },
  "Bell Gardens": { region: "East LA", status: "Lower income / higher poverty", poverty_pct: 32.1, sf_pct: 28 },
  "Monterey Park": { region: "East LA", status: "Mixed income / moderate poverty", poverty_pct: 14.2, sf_pct: 52 },
  "Alhambra": { region: "East LA", status: "Mixed income / moderate poverty", poverty_pct: 15.8, sf_pct: 44 },
  "Montebello": { region: "East LA", status: "Mixed income / moderate poverty", poverty_pct: 16.4, sf_pct: 55 },
  "Pico Rivera": { region: "East LA", status: "Mixed income / moderate poverty", poverty_pct: 18.9, sf_pct: 58 },
  "Watts": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 35.8, sf_pct: 38 },
  "Compton": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 29.5, sf_pct: 48 },
  "Florence": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 33.2, sf_pct: 35 },
  "Huntington Park": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 28.9, sf_pct: 29 },
  "Vernon": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 26.9, sf_pct: 18 },
  "Inglewood": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 24.8, sf_pct: 34 },
  "Hawthorne": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 22.3, sf_pct: 41 },
  "Gardena": { region: "South LA", status: "Mixed income / moderate poverty", poverty_pct: 20.1, sf_pct: 52 },
  "Carson": { region: "South LA", status: "Mixed income / moderate poverty", poverty_pct: 18.7, sf_pct: 61 },
  "Lynwood": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 30.5, sf_pct: 44 },
  "South Gate": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 28.2, sf_pct: 38 },
  "Torrance": { region: "South LA", status: "Mixed income / moderate poverty", poverty_pct: 10.4, sf_pct: 62 },
  "Lawndale": { region: "South LA", status: "Mixed income / moderate poverty", poverty_pct: 19.6, sf_pct: 36 },
  "Redondo Beach": { region: "South LA", status: "Higher income / lower poverty", poverty_pct: 8.9, sf_pct: 44 },
  "Manhattan Beach": { region: "South LA", status: "Higher income / lower poverty", poverty_pct: 4.1, sf_pct: 72 },
  "Hermosa Beach": { region: "South LA", status: "Higher income / lower poverty", poverty_pct: 5.8, sf_pct: 38 },
  "El Segundo": { region: "South LA", status: "Higher income / lower poverty", poverty_pct: 6.3, sf_pct: 48 },
  "Leimert Park": { region: "South LA", status: "Mixed income / moderate poverty", poverty_pct: 22.4, sf_pct: 42 },
  "Hyde Park": { region: "South LA", status: "Mixed income / moderate poverty", poverty_pct: 24.1, sf_pct: 48 },
  "Vermont Square": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 31.2, sf_pct: 22 },
  "Vermont Vista": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 29.8, sf_pct: 28 },
  "Santa Monica": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 10.2, sf_pct: 38 },
  "Hollywood Hills West": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 11.1, sf_pct: 74 },
  "Bel-Air": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 4.2, sf_pct: 88 },
  "Sawtelle": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 10.8, sf_pct: 22 },
  "Pico-Robertson": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 14.2, sf_pct: 28 },
  "Beverlywood": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 6.1, sf_pct: 71 },
  "Beverly Hills": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 5.8, sf_pct: 52 },
  "Beverly Grove": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 9.4, sf_pct: 18 },
  "Carthay": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 8.8, sf_pct: 41 },
  "Miracle Mile": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 11.2, sf_pct: 16 },
  "East Hollywood": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 26.8, sf_pct: 12 },
  "Thai Town": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 21.8, sf_pct: 11 },
  "Little Armenia": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 20.9, sf_pct: 14 },
  "Rampart Village": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 28.1, sf_pct: 10 },
  "Harvard Heights": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 27.6, sf_pct: 18 },
  "Windsor Square": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 8.9, sf_pct: 68 },
  "Little Tokyo": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 22.1, sf_pct: 4 },
  "Arts District": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 19.4, sf_pct: 3 },
  "Historic Core": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 27.1, sf_pct: 3 },
  "Elysian Valley": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 18.9, sf_pct: 44 },
  "Elysian Park": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 20.1, sf_pct: 38 },
  "Angelino Heights": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 22.4, sf_pct: 42 },
  "Victor Heights": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 21.8, sf_pct: 36 },
  "Solano Canyon": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 19.4, sf_pct: 41 },
  "Whitley Heights": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 14.8, sf_pct: 62 },
  "Franklin Hills": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 13.2, sf_pct: 54 },
  "West Adams": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 18.4, sf_pct: 44 },
  "Hollywood Hills East": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 13.4, sf_pct: 72 },
  "Lake View Terrace": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 18.2, sf_pct: 71 },
  "Shadow Hills": { region: "North LA", status: "Higher income / lower poverty", poverty_pct: 8.1, sf_pct: 88 },
  "Hansen Dam": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 19.4, sf_pct: 65 },
  "Mission Hills": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 20.1, sf_pct: 66 },
  "Panorama City": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 26.4, sf_pct: 38 },
  "North Hills": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 18.8, sf_pct: 58 },
  "Porter Ranch": { region: "North LA", status: "Higher income / lower poverty", poverty_pct: 5.8, sf_pct: 84 },
  "Calabasas": { region: "North LA", status: "Higher income / lower poverty", poverty_pct: 4.1, sf_pct: 79 },
  "Burbank": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 13.4, sf_pct: 54 },
  "Glendale": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 14.6, sf_pct: 48 },
  "Pasadena": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 16.2, sf_pct: 52 },
  "La Crescenta-Montrose": { region: "North LA", status: "Higher income / lower poverty", poverty_pct: 7.6, sf_pct: 78 },
  "Altadena": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 12.8, sf_pct: 72 },
  "Valley Village": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 14.2, sf_pct: 52 },
  "Lake Balboa": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 16.8, sf_pct: 64 },
  "Chatsworth Reservoir": { region: "North LA", status: "Higher income / lower poverty", poverty_pct: 6.1, sf_pct: 84 },
  "Toluca Lake": { region: "North LA", status: "Higher income / lower poverty", poverty_pct: 9.8, sf_pct: 62 },
  "Hollywood Knolls": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 11.4, sf_pct: 74 },
  "Beachwood Canyon": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 12.1, sf_pct: 68 },
  "Hermon": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 16.8, sf_pct: 54 },
  "Garvanza": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 19.2, sf_pct: 48 },
  "Rosemead": { region: "East LA", status: "Mixed income / moderate poverty", poverty_pct: 16.8, sf_pct: 54 },
  "El Monte": { region: "East LA", status: "Mixed income / moderate poverty", poverty_pct: 22.4, sf_pct: 44 },
  "South El Monte": { region: "East LA", status: "Lower income / higher poverty", poverty_pct: 24.8, sf_pct: 38 },
  "Baldwin Park": { region: "East LA", status: "Mixed income / moderate poverty", poverty_pct: 20.1, sf_pct: 48 },
  "West Covina": { region: "East LA", status: "Mixed income / moderate poverty", poverty_pct: 13.2, sf_pct: 62 },
  "Hacienda Heights": { region: "East LA", status: "Mixed income / moderate poverty", poverty_pct: 11.4, sf_pct: 66 },
  "Rowland Heights": { region: "East LA", status: "Mixed income / moderate poverty", poverty_pct: 10.8, sf_pct: 58 },
  "Diamond Bar": { region: "East LA", status: "Higher income / lower poverty", poverty_pct: 7.4, sf_pct: 74 },
  "Whittier": { region: "East LA", status: "Mixed income / moderate poverty", poverty_pct: 15.3, sf_pct: 58 },
  "Downey": { region: "East LA", status: "Mixed income / moderate poverty", poverty_pct: 14.7, sf_pct: 52 },
  "Norwalk": { region: "East LA", status: "Mixed income / moderate poverty", poverty_pct: 16.2, sf_pct: 54 },
  "Lakewood": { region: "East LA", status: "Mixed income / moderate poverty", poverty_pct: 10.4, sf_pct: 68 },
  "El Encanto Heights": { region: "East LA", status: "Mixed income / moderate poverty", poverty_pct: 18.4, sf_pct: 58 },
  "Ramona": { region: "East LA", status: "Lower income / higher poverty", poverty_pct: 24.8, sf_pct: 38 },
  "Beverly Crest": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 5.2, sf_pct: 82 },
  "Del Rey": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 11.4, sf_pct: 38 },
  "Central-Alameda": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 33.4, sf_pct: 28 },
  "Chesterfield Square": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 30.8, sf_pct: 42 },
  "Broadway-Manchester": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 31.2, sf_pct: 36 },
  "Windsor Hills": { region: "South LA", status: "Mixed income / moderate poverty", poverty_pct: 18.2, sf_pct: 62 },
  "View Park": { region: "South LA", status: "Mixed income / moderate poverty", poverty_pct: 12.4, sf_pct: 71 },
  "Crenshaw": { region: "South LA", status: "Mixed income / moderate poverty", poverty_pct: 24.6, sf_pct: 38 },
  "Vermont Knolls": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 30.1, sf_pct: 42 },
  "Manchester Square": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 31.8, sf_pct: 36 },
  "Gramercy Park": { region: "South LA", status: "Mixed income / moderate poverty", poverty_pct: 22.4, sf_pct: 44 },
  "Harvard Park": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 28.9, sf_pct: 40 },
  "Vermont-Slauson": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 29.4, sf_pct: 32 },
  "West Adams Heights": { region: "South LA", status: "Mixed income / moderate poverty", poverty_pct: 21.8, sf_pct: 52 },
  "Baldwin Hills": { region: "South LA", status: "Mixed income / moderate poverty", poverty_pct: 19.4, sf_pct: 58 },
  "Westlake South": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 31.4, sf_pct: 8 },
  "West Athens": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 29.4, sf_pct: 52 },
  "Westmont": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 31.8, sf_pct: 38 },
  "Willowbrook": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 32.4, sf_pct: 41 },
  "Athens": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 30.1, sf_pct: 48 },
  "Green Meadows": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 29.8, sf_pct: 44 },
  "Harbor City": { region: "South LA", status: "Mixed income / moderate poverty", poverty_pct: 18.4, sf_pct: 52 },
  "Harbor Gateway": { region: "South LA", status: "Mixed income / moderate poverty", poverty_pct: 20.1, sf_pct: 48 },
  "San Pedro": { region: "South LA", status: "Mixed income / moderate poverty", poverty_pct: 18.2, sf_pct: 44 },
  "Wilmington": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 26.4, sf_pct: 38 },
  "Lomita": { region: "South LA", status: "Mixed income / moderate poverty", poverty_pct: 12.8, sf_pct: 52 },
  "Rancho Palos Verdes": { region: "South LA", status: "Higher income / lower poverty", poverty_pct: 4.2, sf_pct: 86 },
  "Palos Verdes Estates": { region: "South LA", status: "Higher income / lower poverty", poverty_pct: 3.9, sf_pct: 91 },
  "Willow Brook": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 32.4, sf_pct: 36 },
  "Paramount": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 24.6, sf_pct: 44 },
  "Bellflower": { region: "South LA", status: "Mixed income / moderate poverty", poverty_pct: 16.8, sf_pct: 48 },
  "Long Beach": { region: "South LA", status: "Mixed income / moderate poverty", poverty_pct: 19.8, sf_pct: 38 },
};

const regionColors = {
  "West LA":    "#5bb8d4",
  "Central LA": "#8c96c6",
  "North LA":   "#6abf8a",
  "East LA":    "#c060b0",
  "South LA":   "#e07b39",
};

window.onload = () => {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [-118.42, 34.05],
    zoom: 9.0,
    minZoom: 8.8,
    maxZoom: 13,
    interactive: true
  });

  map.addControl(new mapboxgl.NavigationControl(), 'top-right');
  map.dragPan.disable();
  map.dragRotate.disable();
  map.keyboard.disable();

  map.on('load', () => {
    const info = document.getElementById('info');
    let hoveredId = null;
    let activeId = null;

    try {
      const stripeCanvas = document.createElement('canvas');
      stripeCanvas.width = 8;
      stripeCanvas.height = 8;
      const ctx = stripeCanvas.getContext('2d');
      ctx.fillStyle = 'rgba(0,0,0,0)';
      ctx.fillRect(0, 0, 8, 8);
      ctx.strokeStyle = 'rgba(255,255,255,0.6)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, 8);
      ctx.lineTo(8, 0);
      ctx.stroke();
      const imageData = ctx.getImageData(0, 0, 8, 8);
      map.addImage('stripe-pattern', { width: 8, height: 8, data: imageData.data });
    } catch (e) {
      console.warn('Stripe pattern failed:', e);
    }

    fetch('./neighborhoods.geojson')
      .then(r => {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(data => {
        data.features = data.features.map((f, i) => {
          f.id = i;
          const d = neighborhoodData[f.properties.name];
          if (d) {
            f.properties = { ...f.properties, ...d };
          } else {
            f.properties.region = 'Unknown';
            f.properties.poverty_pct = 0;
            f.properties.sf_pct = 0;
            f.properties.status = 'Data not available';
          }
          return f;
        });

        map.addSource('la-neighborhoods', { type: 'geojson', data });

        map.addLayer({
          id: 'neighborhood-fill',
          type: 'fill',
          source: 'la-neighborhoods',
          paint: {
            'fill-color': [
              'case',
              ['==', ['get', 'region'], 'West LA'],
              ['interpolate', ['linear'], ['get', 'poverty_pct'], 3, '#dff4fb', 8, '#8cd4ed', 14, '#2a8fb5'],
              ['==', ['get', 'region'], 'Central LA'],
              ['interpolate', ['linear'], ['get', 'poverty_pct'], 9, '#dfe2f5', 20, '#8c96c6', 32, '#2e3a8c'],
              ['==', ['get', 'region'], 'North LA'],
              ['interpolate', ['linear'], ['get', 'poverty_pct'], 6, '#dff5e8', 15, '#6abf8a', 30, '#1e6b40'],
              ['==', ['get', 'region'], 'East LA'],
              ['interpolate', ['linear'], ['get', 'poverty_pct'], 14, '#f5d0f0', 22, '#c060b0', 32, '#6b0060'],
              ['==', ['get', 'region'], 'South LA'],
              ['interpolate', ['linear'], ['get', 'poverty_pct'], 4, '#fdebd8', 18, '#e07b39', 36, '#8c3500'],
              '#ccc'
            ],
            'fill-opacity': [
              'case',
              ['boolean', ['feature-state', 'active'], false], 1.0,
              ['boolean', ['feature-state', 'hover'], false], 0.95,
              0.82
            ]
          }
        });

        map.addLayer({
          id: 'neighborhood-outline',
          type: 'line',
          source: 'la-neighborhoods',
          paint: { 'line-color': '#ffffff', 'line-width': 1.2 }
        });

        // Active outline — thicker border on clicked neighborhood
        map.addLayer({
          id: 'neighborhood-active-outline',
          type: 'line',
          source: 'la-neighborhoods',
          paint: {
            'line-color': '#1e3a5f',
            'line-width': ['case', ['boolean', ['feature-state', 'active'], false], 2.5, 0]
          }
        });

        map.addLayer({
          id: 'neighborhood-stripe',
          type: 'fill',
          source: 'la-neighborhoods',
          paint: {
            'fill-pattern': 'stripe-pattern',
            'fill-opacity': ['case', ['>', ['get', 'sf_pct'], 50], 1, 0]
          }
        });

        map.addLayer({
          id: 'neighborhood-labels',
          type: 'symbol',
          source: 'la-neighborhoods',
          layout: {
            'text-field': ['get', 'name'],
            'text-size': 10,
            'text-anchor': 'center'
          },
          paint: {
            'text-color': '#1e1e2e',
            'text-halo-color': '#ffffff',
            'text-halo-width': 1.5
          }
        });

        function showInfo(f) {
          const region = f.properties.region;
          const color = regionColors[region] || '#aaa';
          const sfPct = f.properties.sf_pct;
          const mfPct = 100 - sfPct;
          const poverty = f.properties.poverty_pct;

          if (region === 'Unknown') {
            info.innerHTML = `
              <h3>${f.properties.name}</h3>
              <p style="color:#94a3b8;">No data available for this area.</p>
            `;
            return;
          }

          info.innerHTML = `
            <h3>${f.properties.name}</h3>
            <p class="info-region">
              <span class="region-dot" style="background:${color}"></span>
              ${region}
            </p>
            <p class="info-status">${f.properties.status}</p>
            <div class="info-stat">
              <span class="info-label">Poverty rate</span>
              <span class="info-value">${poverty}%</span>
            </div>
            <div class="info-stat">
              <span class="info-label">🏠 Single-family</span>
              <span class="info-value">${sfPct}%</span>
            </div>
            <div class="info-stat">
              <span class="info-label">🏢 Multi-family</span>
              <span class="info-value">${mfPct}%</span>
            </div>
          `;
        }

        // Hover — just highlight
        map.on('mousemove', 'neighborhood-fill', (e) => {
          const f = e.features[0];
          map.getCanvas().style.cursor = 'pointer';
          if (hoveredId !== null) {
            map.setFeatureState({ source: 'la-neighborhoods', id: hoveredId }, { hover: false });
          }
          hoveredId = f.id;
          map.setFeatureState({ source: 'la-neighborhoods', id: hoveredId }, { hover: true });
        });

        map.on('mouseleave', 'neighborhood-fill', () => {
          map.getCanvas().style.cursor = '';
          if (hoveredId !== null) {
            map.setFeatureState({ source: 'la-neighborhoods', id: hoveredId }, { hover: false });
          }
          hoveredId = null;
        });

        // Click — make active and show details
        map.on('click', 'neighborhood-fill', (e) => {
          const f = e.features[0];

          // Deactivate previous
          if (activeId !== null) {
            map.setFeatureState({ source: 'la-neighborhoods', id: activeId }, { active: false });
          }

          // If clicking same one, deactivate
          if (activeId === f.id) {
            activeId = null;
            info.innerHTML = '<h3>Select a neighborhood</h3><p>Click on any neighborhood to see details.</p>';
            return;
          }

          activeId = f.id;
          map.setFeatureState({ source: 'la-neighborhoods', id: activeId }, { active: true });
          showInfo(f);
        });
      })
      .catch(err => {
        info.innerHTML = '<h3 style="color:red">Error: ' + err.message + '</h3>';
      });
  });
};