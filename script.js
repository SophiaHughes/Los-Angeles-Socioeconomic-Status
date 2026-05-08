mapboxgl.accessToken = 'pk.eyJ1Ijoic2h1Z2hlczU4IiwiYSI6ImNtb2tzanJxajAzaXkyb3B5YTU0YWo0dncifQ.hhJVBWVqUoE40kEsf0tPfQ';

const neighborhoodData = {
  "Bel Air": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 4.2 },
  "Brentwood": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 5.1 },
  "Pacific Palisades": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 3.8 },
  "Westwood": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 9.8 },
  "West Hollywood": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 11.3 },
  "Venice": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 12.4 },
  "Mar Vista": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 9.1 },
  "Westchester": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 8.3 },
  "Palms": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 13.1 },
  "Culver City": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 8.9 },
  "Malibu": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 3.5 },
  "Marina del Rey": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 6.2 },
  "Playa del Rey": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 7.8 },
  "Century City": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 7.2 },
  "Cheviot Hills": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 6.8 },
  "Rancho Park": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 7.4 },
  "Playa Vista": { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 5.9 },
  "Hollywood": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 22.4 },
  "Koreatown": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 26.1 },
  "Silver Lake": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 15.3 },
  "Echo Park": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 23.7 },
  "Los Feliz": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 14.2 },
  "Downtown": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 28.9 },
  "Westlake": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 32.1 },
  "Pico-Union": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 30.6 },
  "Mid-City": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 19.8 },
  "Mid-Wilshire": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 20.3 },
  "Fairfax": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 18.5 },
  "Hancock Park": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 9.2 },
  "Larchmont": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 9.7 },
  "Adams-Normandie": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 27.3 },
  "Jefferson Park": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 26.8 },
  "University Park": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 29.1 },
  "Exposition Park": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 28.3 },
  "Historic Filipinotown": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 24.5 },
  "Chinatown": { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 26.2 },
  "Hollywood Hills": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 12.1 },
  "Studio City": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 10.8 },
  "Sherman Oaks": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 11.2 },
  "Van Nuys": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 24.7 },
  "North Hollywood": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 22.1 },
  "Arleta": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 21.3 },
  "Pacoima": { region: "North LA", status: "Lower income / higher poverty", poverty_pct: 29.8 },
  "Sylmar": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 18.4 },
  "Granada Hills": { region: "North LA", status: "Higher income / lower poverty", poverty_pct: 8.7 },
  "Northridge": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 14.1 },
  "Chatsworth": { region: "North LA", status: "Higher income / lower poverty", poverty_pct: 7.9 },
  "Canoga Park": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 19.2 },
  "Reseda": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 20.5 },
  "Tarzana": { region: "North LA", status: "Higher income / lower poverty", poverty_pct: 9.3 },
  "Encino": { region: "North LA", status: "Higher income / lower poverty", poverty_pct: 7.1 },
  "Woodland Hills": { region: "North LA", status: "Higher income / lower poverty", poverty_pct: 8.2 },
  "West Hills": { region: "North LA", status: "Higher income / lower poverty", poverty_pct: 6.4 },
  "Winnetka": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 16.8 },
  "Sun Valley": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 23.6 },
  "Sunland": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 14.7 },
  "Tujunga": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 16.3 },
  "Atwater Village": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 16.9 },
  "Glassell Park": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 21.4 },
  "Mount Washington": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 15.8 },
  "Cypress Park": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 24.1 },
  "Montecito Heights": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 23.8 },
  "Highland Park": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 20.8 },
  "Eagle Rock": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 17.2 },
  "Arlington Heights": { region: "North LA", status: "Mixed income / moderate poverty", poverty_pct: 22.8 },
  "Boyle Heights": { region: "East LA", status: "Lower income / higher poverty", poverty_pct: 28.7 },
  "East Los Angeles": { region: "East LA", status: "Lower income / higher poverty", poverty_pct: 27.3 },
  "El Sereno": { region: "East LA", status: "Lower income / higher poverty", poverty_pct: 22.6 },
  "Lincoln Heights": { region: "East LA", status: "Lower income / higher poverty", poverty_pct: 25.4 },
  "City Terrace": { region: "East LA", status: "Lower income / higher poverty", poverty_pct: 30.2 },
  "Commerce": { region: "East LA", status: "Lower income / higher poverty", poverty_pct: 27.6 },
  "Maywood": { region: "East LA", status: "Lower income / higher poverty", poverty_pct: 31.8 },
  "Bell": { region: "East LA", status: "Lower income / higher poverty", poverty_pct: 29.3 },
  "Bell Gardens": { region: "East LA", status: "Lower income / higher poverty", poverty_pct: 32.1 },
  "Monterey Park": { region: "East LA", status: "Mixed income / moderate poverty", poverty_pct: 14.2 },
  "Alhambra": { region: "East LA", status: "Mixed income / moderate poverty", poverty_pct: 15.8 },
  "Montebello": { region: "East LA", status: "Mixed income / moderate poverty", poverty_pct: 16.4 },
  "Pico Rivera": { region: "East LA", status: "Mixed income / moderate poverty", poverty_pct: 18.9 },
  "Watts": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 35.8 },
  "Compton": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 29.5 },
  "Florence": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 33.2 },
  "Huntington Park": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 28.9 },
  "Vernon": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 26.9 },
  "Inglewood": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 24.8 },
  "Hawthorne": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 22.3 },
  "Gardena": { region: "South LA", status: "Mixed income / moderate poverty", poverty_pct: 20.1 },
  "Carson": { region: "South LA", status: "Mixed income / moderate poverty", poverty_pct: 18.7 },
  "Lynwood": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 30.5 },
  "South Gate": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 28.2 },
  "Torrance": { region: "South LA", status: "Mixed income / moderate poverty", poverty_pct: 10.4 },
  "Lawndale": { region: "South LA", status: "Mixed income / moderate poverty", poverty_pct: 19.6 },
  "Redondo Beach": { region: "South LA", status: "Higher income / lower poverty", poverty_pct: 8.9 },
  "Manhattan Beach": { region: "South LA", status: "Higher income / lower poverty", poverty_pct: 4.1 },
  "Hermosa Beach": { region: "South LA", status: "Higher income / lower poverty", poverty_pct: 5.8 },
  "El Segundo": { region: "South LA", status: "Higher income / lower poverty", poverty_pct: 6.3 },
  "Leimert Park": { region: "South LA", status: "Mixed income / moderate poverty", poverty_pct: 22.4 },
  "Hyde Park": { region: "South LA", status: "Mixed income / moderate poverty", poverty_pct: 24.1 },
  "Vermont Square": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 31.2 },
  "Vermont Vista": { region: "South LA", status: "Lower income / higher poverty", poverty_pct: 29.8 },
};

window.onload = () => {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [-118.35, 34.11],
    zoom: 9.5,
    interactive: false
  });

  map.on('load', () => {
    const info = document.getElementById('info');
    let hoveredId = null;

    fetch('./neighborhoods.geojson')
      .then(r => r.json())
      .then(data => {
        data.features = data.features
          .filter(f => neighborhoodData[f.properties.name])
          .map((f, i) => {
            f.id = i;
            f.properties = { ...f.properties, ...neighborhoodData[f.properties.name] };
            return f;
          });

        map.addSource('la-neighborhoods', { type: 'geojson', data });

        // Single continuous purple gradient based on poverty rate
        // low poverty (~4%) = very light lavender, high poverty (~36%) = deep purple/magenta
        map.addLayer({
          id: 'neighborhood-fill',
          type: 'fill',
          source: 'la-neighborhoods',
          paint: {
            'fill-color': [
              'case',
              // WEST LA — blue family
              ['==', ['get', 'region'], 'West LA'],
              ['interpolate', ['linear'], ['get', 'poverty_pct'],
                3, '#dff4fb',
                8, '#8cd4ed',
                14, '#2a8fb5'
              ],
              // CENTRAL LA — purple family
              ['==', ['get', 'region'], 'Central LA'],
              ['interpolate', ['linear'], ['get', 'poverty_pct'],
                9, '#dfe2f5',
                20, '#8c96c6',
                32, '#2e3a8c'
              ],
              // NORTH LA — green family
              ['==', ['get', 'region'], 'North LA'],
              ['interpolate', ['linear'], ['get', 'poverty_pct'],
                6, '#dff5e8',
                15, '#6abf8a',
                30, '#1e6b40'
              ],
              // EAST LA — magenta family
            ['==', ['get', 'region'], 'East LA'],
              ['interpolate', ['linear'], ['get', 'poverty_pct'],
              14, '#f5d0f0',
              22, '#c060b0',
              32, '#6b0060'
              ],
              // SOUTH LA — orange family
              ['==', ['get', 'region'], 'South LA'],
              ['interpolate', ['linear'], ['get', 'poverty_pct'],
                4, '#fdebd8',
                18, '#e07b39',
                36, '#8c3500'
              ],
                '#ccc'
              ],
              'fill-opacity': [
                'case', ['boolean', ['feature-state', 'hover'], false], 1.0, 0.85
              ]
          }
        });

        map.addLayer({
          id: 'neighborhood-outline',
          type: 'line',
          source: 'la-neighborhoods',
          paint: { 'line-color': '#ffffff', 'line-width': 1.2 }
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

        map.on('mousemove', 'neighborhood-fill', (e) => {
          const f = e.features[0];
          map.getCanvas().style.cursor = 'pointer';
          if (hoveredId !== null) map.setFeatureState({ source: 'la-neighborhoods', id: hoveredId }, { hover: false });
          hoveredId = f.id;
          map.setFeatureState({ source: 'la-neighborhoods', id: hoveredId }, { hover: true });
          info.innerHTML = `
            <h3>${f.properties.name}</h3>
            <p><strong>Region:</strong> ${f.properties.region}</p>
            <p>${f.properties.status}</p>
            <p><strong>Poverty rate:</strong> ${f.properties.poverty_pct}%</p>
          `;
        });

        map.on('mouseleave', 'neighborhood-fill', () => {
          map.getCanvas().style.cursor = '';
          if (hoveredId !== null) map.setFeatureState({ source: 'la-neighborhoods', id: hoveredId }, { hover: false });
          hoveredId = null;
          info.innerHTML = '<h3>Region info</h3><p>Hover over a region</p>';
        });

        map.on('click', 'neighborhood-fill', (e) => {
          const f = e.features[0];
          new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(`<strong>${f.properties.name}</strong><br/><em>${f.properties.region}</em><br/>${f.properties.status}<br/>Poverty: ${f.properties.poverty_pct}%`)
            .addTo(map);
        });
      });
  });
};