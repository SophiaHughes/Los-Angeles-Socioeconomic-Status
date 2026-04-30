mapboxgl.accessToken = 'pk.eyJ1Ijoic2h1Z2hlczU4IiwiYSI6ImNtb2tzanJxajAzaXkyb3B5YTU0YWo0dncifQ.hhJVBWVqUoE40kEsf0tPfQ';

const neighborhoodData = {
  // West LA (low poverty)
  "Bel Air":              { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 4.2,  fill: "#6ec6e6" },
  "Brentwood":            { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 5.1,  fill: "#6ec6e6" },
  "Pacific Palisades":    { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 3.8,  fill: "#6ec6e6" },
  "Westwood":             { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 9.8,  fill: "#6ec6e6" },
  "West Hollywood":       { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 11.3, fill: "#6ec6e6" },
  "Venice":               { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 12.4, fill: "#6ec6e6" },
  "Mar Vista":            { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 9.1,  fill: "#6ec6e6" },
  "Westchester":          { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 8.3,  fill: "#6ec6e6" },
  "Palms":                { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 13.1, fill: "#6ec6e6" },
  "Santa Monica":         { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 10.2, fill: "#6ec6e6" },
  "Culver City":          { region: "West LA", status: "Higher income / lower poverty", poverty_pct: 8.9,  fill: "#6ec6e6" },

  // Central LA (moderate poverty)
  "Hollywood":            { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 22.4, fill: "#8c96c6" },
  "Koreatown":            { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 26.1, fill: "#8c96c6" },
  "Silver Lake":          { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 15.3, fill: "#8c96c6" },
  "Echo Park":            { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 23.7, fill: "#8c96c6" },
  "Los Feliz":            { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 14.2, fill: "#8c96c6" },
  "Highland Park":        { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 20.8, fill: "#8c96c6" },
  "Eagle Rock":           { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 17.2, fill: "#8c96c6" },
  "Downtown":             { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 28.9, fill: "#8c96c6" },
  "Westlake":             { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 32.1, fill: "#8c96c6" },
  "Pico-Union":           { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 30.6, fill: "#8c96c6" },
  "Mid-City":             { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 19.8, fill: "#8c96c6" },
  "Atwater Village":      { region: "Central LA", status: "Mixed income / moderate poverty", poverty_pct: 16.9, fill: "#8c96c6" },

  // East LA (high poverty)
  "Boyle Heights":        { region: "East LA", status: "Lower income / higher poverty", poverty_pct: 28.7, fill: "#810f7c" },
  "East Los Angeles":     { region: "East LA", status: "Lower income / higher poverty", poverty_pct: 27.3, fill: "#810f7c" },
  "El Sereno":            { region: "East LA", status: "Lower income / higher poverty", poverty_pct: 22.6, fill: "#810f7c" },
  "Lincoln Heights":      { region: "East LA", status: "Lower income / higher poverty", poverty_pct: 25.4, fill: "#810f7c" },
  "Watts":                { region: "East LA", status: "Lower income / higher poverty", poverty_pct: 35.8, fill: "#810f7c" },
  "Compton":              { region: "East LA", status: "Lower income / higher poverty", poverty_pct: 29.5, fill: "#810f7c" },
  "Florence":             { region: "East LA", status: "Lower income / higher poverty", poverty_pct: 33.2, fill: "#810f7c" },
  "Huntington Park":      { region: "East LA", status: "Lower income / higher poverty", poverty_pct: 28.9, fill: "#810f7c" },
  "South Central":        { region: "East LA", status: "Lower income / higher poverty", poverty_pct: 31.4, fill: "#810f7c" },
};

window.onload = () => {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [-118.2437, 34.0522],
    zoom: 9.2
  });

  map.addControl(new mapboxgl.NavigationControl(), 'top-right');

  map.on('load', () => {
    const info = document.getElementById('info');
    let hoveredId = null;

    // Load local file — no external API needed
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

        map.on('mousemove', 'neighborhood-fill', (e) => {
          const f = e.features[0];
          map.getCanvas().style.cursor = 'pointer';
          if (hoveredId !== null) map.setFeatureState({ source: 'la-neighborhoods', id: hoveredId }, { hover: false });
          hoveredId = f.id;
          map.setFeatureState({ source: 'la-neighborhoods', id: hoveredId }, { hover: true });
          info.innerHTML = `<h3>${f.properties.name}</h3><p>${f.properties.status}</p><p><strong>Poverty:</strong> ${f.properties.poverty_pct}%</p>`;
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
            .setHTML(`<strong>${f.properties.name}</strong><br/>${f.properties.status}<br/>Poverty: ${f.properties.poverty_pct}%`)
            .addTo(map);
        });
      })
      .catch(err => {
        console.error(err);
        info.innerHTML = '<h3>Error</h3><p>Could not load neighborhoods.geojson — make sure the file is in your repo.</p>';
      });
  });
};