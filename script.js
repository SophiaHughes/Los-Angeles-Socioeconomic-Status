mapboxgl.accessToken = 'pk.eyJ1Ijoic2h1Z2hlczU4IiwiYSI6ImNtb2tzanJxajAzaXkyb3B5YTU0YWo0dncifQ.hhJVBWVqUoE40kEsf0tPfQ';

const neighborhoodData = {
  // ── WEST LA (blue) ──
  "Bel Air":                { region:"West LA",    status:"Higher income / lower poverty",    poverty_pct:4.2,  fill:"#5bb8d4" },
  "Brentwood":              { region:"West LA",    status:"Higher income / lower poverty",    poverty_pct:5.1,  fill:"#5bb8d4" },
  "Pacific Palisades":      { region:"West LA",    status:"Higher income / lower poverty",    poverty_pct:3.8,  fill:"#5bb8d4" },
  "Westwood":               { region:"West LA",    status:"Higher income / lower poverty",    poverty_pct:9.8,  fill:"#5bb8d4" },
  "West Hollywood":         { region:"West LA",    status:"Higher income / lower poverty",    poverty_pct:11.3, fill:"#5bb8d4" },
  "Venice":                 { region:"West LA",    status:"Higher income / lower poverty",    poverty_pct:12.4, fill:"#5bb8d4" },
  "Mar Vista":              { region:"West LA",    status:"Higher income / lower poverty",    poverty_pct:9.1,  fill:"#5bb8d4" },
  "Westchester":            { region:"West LA",    status:"Higher income / lower poverty",    poverty_pct:8.3,  fill:"#5bb8d4" },
  "Palms":                  { region:"West LA",    status:"Higher income / lower poverty",    poverty_pct:13.1, fill:"#5bb8d4" },
  "Culver City":            { region:"West LA",    status:"Higher income / lower poverty",    poverty_pct:8.9,  fill:"#5bb8d4" },
  "Malibu":                 { region:"West LA",    status:"Higher income / lower poverty",    poverty_pct:3.5,  fill:"#5bb8d4" },
  "Marina del Rey":         { region:"West LA",    status:"Higher income / lower poverty",    poverty_pct:6.2,  fill:"#5bb8d4" },
  "Playa del Rey":          { region:"West LA",    status:"Higher income / lower poverty",    poverty_pct:7.8,  fill:"#5bb8d4" },
  "Century City":           { region:"West LA",    status:"Higher income / lower poverty",    poverty_pct:7.2,  fill:"#5bb8d4" },
  "Cheviot Hills":          { region:"West LA",    status:"Higher income / lower poverty",    poverty_pct:6.8,  fill:"#5bb8d4" },
  "Rancho Park":            { region:"West LA",    status:"Higher income / lower poverty",    poverty_pct:7.4,  fill:"#5bb8d4" },
  "Playa Vista":            { region:"West LA",    status:"Higher income / lower poverty",    poverty_pct:5.9,  fill:"#5bb8d4" },

  // ── CENTRAL LA (purple) ──
  "Hollywood":              { region:"Central LA", status:"Mixed income / moderate poverty",  poverty_pct:22.4, fill:"#8c96c6" },
  "Koreatown":              { region:"Central LA", status:"Mixed income / moderate poverty",  poverty_pct:26.1, fill:"#8c96c6" },
  "Silver Lake":            { region:"Central LA", status:"Mixed income / moderate poverty",  poverty_pct:15.3, fill:"#8c96c6" },
  "Echo Park":              { region:"Central LA", status:"Mixed income / moderate poverty",  poverty_pct:23.7, fill:"#8c96c6" },
  "Los Feliz":              { region:"Central LA", status:"Mixed income / moderate poverty",  poverty_pct:14.2, fill:"#8c96c6" },
  "Downtown":               { region:"Central LA", status:"Mixed income / moderate poverty",  poverty_pct:28.9, fill:"#8c96c6" },
  "Westlake":               { region:"Central LA", status:"Mixed income / moderate poverty",  poverty_pct:32.1, fill:"#8c96c6" },
  "Pico-Union":             { region:"Central LA", status:"Mixed income / moderate poverty",  poverty_pct:30.6, fill:"#8c96c6" },
  "Mid-City":               { region:"Central LA", status:"Mixed income / moderate poverty",  poverty_pct:19.8, fill:"#8c96c6" },
  "Mid-Wilshire":           { region:"Central LA", status:"Mixed income / moderate poverty",  poverty_pct:20.3, fill:"#8c96c6" },
  "Fairfax":                { region:"Central LA", status:"Mixed income / moderate poverty",  poverty_pct:18.5, fill:"#8c96c6" },
  "Hancock Park":           { region:"Central LA", status:"Mixed income / moderate poverty",  poverty_pct:9.2,  fill:"#8c96c6" },
  "Larchmont":              { region:"Central LA", status:"Mixed income / moderate poverty",  poverty_pct:9.7,  fill:"#8c96c6" },
  "Adams-Normandie":        { region:"Central LA", status:"Mixed income / moderate poverty",  poverty_pct:27.3, fill:"#8c96c6" },
  "Jefferson Park":         { region:"Central LA", status:"Mixed income / moderate poverty",  poverty_pct:26.8, fill:"#8c96c6" },
  "University Park":        { region:"Central LA", status:"Mixed income / moderate poverty",  poverty_pct:29.1, fill:"#8c96c6" },
  "Exposition Park":        { region:"Central LA", status:"Mixed income / moderate poverty",  poverty_pct:28.3, fill:"#8c96c6" },
  "Historic Filipinotown":  { region:"Central LA", status:"Mixed income / moderate poverty",  poverty_pct:24.5, fill:"#8c96c6" },
  "Chinatown":              { region:"Central LA", status:"Mixed income / moderate poverty",  poverty_pct:26.2, fill:"#8c96c6" },
  "Little Tokyo":           { region:"Central LA", status:"Mixed income / moderate poverty",  poverty_pct:22.1, fill:"#8c96c6" },
  "Thai Town":              { region:"Central LA", status:"Mixed income / moderate poverty",  poverty_pct:21.8, fill:"#8c96c6" },
  "Little Armenia":         { region:"Central LA", status:"Mixed income / moderate poverty",  poverty_pct:20.9, fill:"#8c96c6" },

  // ── NORTH LA (green) ──
  "Hollywood Hills":        { region:"North LA",   status:"Mixed income / moderate poverty",  poverty_pct:12.1, fill:"#6abf8a" },
  "Studio City":            { region:"North LA",   status:"Mixed income / moderate poverty",  poverty_pct:10.8, fill:"#6abf8a" },
  "Sherman Oaks":           { region:"North LA",   status:"Mixed income / moderate poverty",  poverty_pct:11.2, fill:"#6abf8a" },
  "Van Nuys":               { region:"North LA",   status:"Mixed income / moderate poverty",  poverty_pct:24.7, fill:"#6abf8a" },
  "North Hollywood":        { region:"North LA",   status:"Mixed income / moderate poverty",  poverty_pct:22.1, fill:"#6abf8a" },
  "Burbank":                { region:"North LA",   status:"Mixed income / moderate poverty",  poverty_pct:13.4, fill:"#6abf8a" },
  "Glendale":               { region:"North LA",   status:"Mixed income / moderate poverty",  poverty_pct:14.6, fill:"#6abf8a" },
  "Pasadena":               { region:"North LA",   status:"Mixed income / moderate poverty",  poverty_pct:16.2, fill:"#6abf8a" },
  "Atwater Village":        { region:"North LA",   status:"Mixed income / moderate poverty",  poverty_pct:16.9, fill:"#6abf8a" },
  "Glassell Park":          { region:"North LA",   status:"Mixed income / moderate poverty",  poverty_pct:21.4, fill:"#6abf8a" },
  "Mount Washington":       { region:"North LA",   status:"Mixed income / moderate poverty",  poverty_pct:15.8, fill:"#6abf8a" },
  "Cypress Park":           { region:"North LA",   status:"Mixed income / moderate poverty",  poverty_pct:24.1, fill:"#6abf8a" },
  "Montecito Heights":      { region:"North LA",   status:"Mixed income / moderate poverty",  poverty_pct:23.8, fill:"#6abf8a" },
  "Highland Park":          { region:"North LA",   status:"Mixed income / moderate poverty",  poverty_pct:20.8, fill:"#6abf8a" },
  "Eagle Rock":             { region:"North LA",   status:"Mixed income / moderate poverty",  poverty_pct:17.2, fill:"#6abf8a" },
  "Arleta":                 { region:"North LA",   status:"Mixed income / moderate poverty",  poverty_pct:21.3, fill:"#6abf8a" },
  "Pacoima":                { region:"North LA",   status:"Lower income / higher poverty",    poverty_pct:29.8, fill:"#6abf8a" },
  "Sylmar":                 { region:"North LA",   status:"Mixed income / moderate poverty",  poverty_pct:18.4, fill:"#6abf8a" },
  "Granada Hills":          { region:"North LA",   status:"Higher income / lower poverty",    poverty_pct:8.7,  fill:"#6abf8a" },
  "Northridge":             { region:"North LA",   status:"Mixed income / moderate poverty",  poverty_pct:14.1, fill:"#6abf8a" },
  "Chatsworth":             { region:"North LA",   status:"Higher income / lower poverty",    poverty_pct:7.9,  fill:"#6abf8a" },
  "Canoga Park":            { region:"North LA",   status:"Mixed income / moderate poverty",  poverty_pct:19.2, fill:"#6abf8a" },
  "Reseda":                 { region:"North LA",   status:"Mixed income / moderate poverty",  poverty_pct:20.5, fill:"#6abf8a" },
  "Tarzana":                { region:"North LA",   status:"Higher income / lower poverty",    poverty_pct:9.3,  fill:"#6abf8a" },
  "Encino":                 { region:"North LA",   status:"Higher income / lower poverty",    poverty_pct:7.1,  fill:"#6abf8a" },
  "Woodland Hills":         { region:"North LA",   status:"Higher income / lower poverty",    poverty_pct:8.2,  fill:"#6abf8a" },
  "West Hills":             { region:"North LA",   status:"Higher income / lower poverty",    poverty_pct:6.4,  fill:"#6abf8a" },
  "Winnetka":               { region:"North LA",   status:"Mixed income / moderate poverty",  poverty_pct:16.8, fill:"#6abf8a" },
  "Sun Valley":             { region:"North LA",   status:"Mixed income / moderate poverty",  poverty_pct:23.6, fill:"#6abf8a" },
  "Sunland":                { region:"North LA",   status:"Mixed income / moderate poverty",  poverty_pct:14.7, fill:"#6abf8a" },
  "Tujunga":                { region:"North LA",   status:"Mixed income / moderate poverty",  poverty_pct:16.3, fill:"#6abf8a" },
  "La Crescenta-Montrose":  { region:"North LA",   status:"Higher income / lower poverty",    poverty_pct:7.6,  fill:"#6abf8a" },
  "Arlington Heights":      { region:"North LA",   status:"Mixed income / moderate poverty",  poverty_pct:22.8, fill:"#6abf8a" },

  // ── EAST LA (magenta) ──
  "Boyle Heights":          { region:"East LA",    status:"Lower income / higher poverty",    poverty_pct:28.7, fill:"#810f7c" },
  "East Los Angeles":       { region:"East LA",    status:"Lower income / higher poverty",    poverty_pct:27.3, fill:"#810f7c" },
  "El Sereno":              { region:"East LA",    status:"Lower income / higher poverty",    poverty_pct:22.6, fill:"#810f7c" },
  "Lincoln Heights":        { region:"East LA",    status:"Lower income / higher poverty",    poverty_pct:25.4, fill:"#810f7c" },
  "City Terrace":           { region:"East LA",    status:"Lower income / higher poverty",    poverty_pct:30.2, fill:"#810f7c" },
  "Commerce":               { region:"East LA",    status:"Lower income / higher poverty",    poverty_pct:27.6, fill:"#810f7c" },
  "Maywood":                { region:"East LA",    status:"Lower income / higher poverty",    poverty_pct:31.8, fill:"#810f7c" },
  "Bell":                   { region:"East LA",    status:"Lower income / higher poverty",    poverty_pct:29.3, fill:"#810f7c" },
  "Bell Gardens":           { region:"East LA",    status:"Lower income / higher poverty",    poverty_pct:32.1, fill:"#810f7c" },
  "Monterey Park":          { region:"East LA",    status:"Mixed income / moderate poverty",  poverty_pct:14.2, fill:"#810f7c" },
  "Alhambra":               { region:"East LA",    status:"Mixed income / moderate poverty",  poverty_pct:15.8, fill:"#810f7c" },
  "Montebello":             { region:"East LA",    status:"Mixed income / moderate poverty",  poverty_pct:16.4, fill:"#810f7c" },
  "Pico Rivera":            { region:"East LA",    status:"Mixed income / moderate poverty",  poverty_pct:18.9, fill:"#810f7c" },
  "Whittier":               { region:"East LA",    status:"Mixed income / moderate poverty",  poverty_pct:15.3, fill:"#810f7c" },
  "Downey":                 { region:"East LA",    status:"Mixed income / moderate poverty",  poverty_pct:14.7, fill:"#810f7c" },

  // ── SOUTH LA (orange) ──
  "Watts":                  { region:"South LA",   status:"Lower income / higher poverty",    poverty_pct:35.8, fill:"#e07b39" },
  "Compton":                { region:"South LA",   status:"Lower income / higher poverty",    poverty_pct:29.5, fill:"#e07b39" },
  "Florence":               { region:"South LA",   status:"Lower income / higher poverty",    poverty_pct:33.2, fill:"#e07b39" },
  "Huntington Park":        { region:"South LA",   status:"Lower income / higher poverty",    poverty_pct:28.9, fill:"#e07b39" },
  "South Central":          { region:"South LA",   status:"Lower income / higher poverty",    poverty_pct:31.4, fill:"#e07b39" },
  "Vernon":                 { region:"South LA",   status:"Lower income / higher poverty",    poverty_pct:26.9, fill:"#e07b39" },
  "Inglewood":              { region:"South LA",   status:"Lower income / higher poverty",    poverty_pct:24.8, fill:"#e07b39" },
  "Hawthorne":              { region:"South LA",   status:"Lower income / higher poverty",    poverty_pct:22.3, fill:"#e07b39" },
  "Gardena":                { region:"South LA",   status:"Mixed income / moderate poverty",  poverty_pct:20.1, fill:"#e07b39" },
  "Carson":                 { region:"South LA",   status:"Mixed income / moderate poverty",  poverty_pct:18.7, fill:"#e07b39" },
  "Lynwood":                { region:"South LA",   status:"Lower income / higher poverty",    poverty_pct:30.5, fill:"#e07b39" },
  "South Gate":             { region:"South LA",   status:"Lower income / higher poverty",    poverty_pct:28.2, fill:"#e07b39" },
  "Torrance":               { region:"South LA",   status:"Mixed income / moderate poverty",  poverty_pct:10.4, fill:"#e07b39" },
  "Lawndale":               { region:"South LA",   status:"Mixed income / moderate poverty",  poverty_pct:19.6, fill:"#e07b39" },
  "Redondo Beach":          { region:"South LA",   status:"Higher income / lower poverty",    poverty_pct:8.9,  fill:"#e07b39" },
  "Manhattan Beach":        { region:"South LA",   status:"Higher income / lower poverty",    poverty_pct:4.1,  fill:"#e07b39" },
  "Hermosa Beach":          { region:"South LA",   status:"Higher income / lower poverty",    poverty_pct:5.8,  fill:"#e07b39" },
  "El Segundo":             { region:"South LA",   status:"Higher income / lower poverty",    poverty_pct:6.3,  fill:"#e07b39" },
  "Inglewood":              { region:"South LA",   status:"Lower income / higher poverty",    poverty_pct:24.8, fill:"#e07b39" },
  "Leimert Park":           { region:"South LA",   status:"Mixed income / moderate poverty",  poverty_pct:22.4, fill:"#e07b39" },
  "Hyde Park":              { region:"South LA",   status:"Mixed income / moderate poverty",  poverty_pct:24.1, fill:"#e07b39" },
  "Vermont Square":         { region:"South LA",   status:"Lower income / higher poverty",    poverty_pct:31.2, fill:"#e07b39" },
  "Vermont Vista":          { region:"South LA",   status:"Lower income / higher poverty",    poverty_pct:29.8, fill:"#e07b39" },
};

window.onload = () => {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [-118.2437, 34.0522],
    zoom: 9.5
  });

  map.addControl(new mapboxgl.NavigationControl(), 'top-right');

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

        map.addLayer({
          id: 'neighborhood-fill',
          type: 'fill',
          source: 'la-neighborhoods',
          paint: {
            'fill-color': ['get', 'fill'],
            'fill-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], 0.95, 0.72]
          }
        });

        map.addLayer({
          id: 'neighborhood-outline',
          type: 'line',
          source: 'la-neighborhoods',
          paint: { 'line-color': '#ffffff', 'line-width': 1.5 }
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
            'text-color': '#1e3a5f',
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
            <p><strong>Poverty:</strong> ${f.properties.poverty_pct}%</p>
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