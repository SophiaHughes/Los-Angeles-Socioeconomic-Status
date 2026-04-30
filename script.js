mapboxgl.accessToken = 'pk.eyJ1Ijoic2h1Z2hlczU4IiwiYSI6ImNtb2tzanJxajAzaXkyb3B5YTU0YWo0dncifQ.hhJVBWVqUoE40kEsf0tPfQ'; 

window.onload = () => {

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [-118.2437, 34.0522],
    zoom: 9.2
  });

  map.addControl(new mapboxgl.NavigationControl(), 'top-right');

  map.on('load', () => {

    // ✅ INLINE GEOJSON (no loading issues)
    map.addSource('la-regions', {
      type: 'geojson',
      data: {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "id": 1,
            "properties": {
              "region": "West LA",
              "status": "Higher income / lower poverty",
              "poverty_pct": 9.8
            },
            "geometry": {
              "type": "Polygon",
              "coordinates": [[
                [-118.56, 34.12],
                [-118.36, 34.12],
                [-118.36, 33.95],
                [-118.56, 33.95],
                [-118.56, 34.12]
              ]]
            }
          },
          {
            "type": "Feature",
            "id": 2,
            "properties": {
              "region": "Central LA",
              "status": "Mixed income / moderate poverty",
              "poverty_pct": 22.4
            },
            "geometry": {
              "type": "Polygon",
              "coordinates": [[
                [-118.36, 34.12],
                [-118.16, 34.12],
                [-118.16, 33.95],
                [-118.36, 33.95],
                [-118.36, 34.12]
              ]]
            }
          },
          {
            "type": "Feature",
            "id": 3,
            "properties": {
              "region": "East LA",
              "status": "Lower income / higher poverty",
              "poverty_pct": 28.7
            },
            "geometry": {
              "type": "Polygon",
              "coordinates": [[
                [-118.16, 34.12],
                [-117.92, 34.12],
                [-117.92, 33.95],
                [-118.16, 33.95],
                [-118.16, 34.12]
              ]]
            }
          }
        ]
      }
    });

    // ✅ COLORED REGIONS
    map.addLayer({
      id: 'region-fill',
      type: 'fill',
      source: 'la-regions',
      paint: {
        'fill-color': [
          'match',
          ['get', 'region'],
          'West LA', '#edf8fb',
          'Central LA', '#8c96c6',
          'East LA', '#810f7c',
          '#ccc'
        ],
        'fill-opacity': [
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          1,
          0.75
        ]
      }
    });

    // outline
    map.addLayer({
      id: 'outline',
      type: 'line',
      source: 'la-regions',
      paint: {
        'line-color': '#ffffff',
        'line-width': 2
      }
    });

    const info = document.getElementById('info');
    let hoveredId = null;

    // hover
    map.on('mousemove', 'region-fill', (e) => {
      const f = e.features[0];

      map.getCanvas().style.cursor = 'pointer';

      if (hoveredId !== null) {
        map.setFeatureState({ source: 'la-regions', id: hoveredId }, { hover: false });
      }

      hoveredId = f.id;

      map.setFeatureState({ source: 'la-regions', id: hoveredId }, { hover: true });

      info.innerHTML = `
        <h3>${f.properties.region}</h3>
        <p>${f.properties.status}</p>
        <p><strong>Poverty:</strong> ${f.properties.poverty_pct}%</p>
      `;
    });

    map.on('mouseleave', 'region-fill', () => {
      map.getCanvas().style.cursor = '';

      if (hoveredId !== null) {
        map.setFeatureState({ source: 'la-regions', id: hoveredId }, { hover: false });
      }

      hoveredId = null;
    });

    // click popup
    map.on('click', 'region-fill', (e) => {
      const f = e.features[0];

      new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(`
          <strong>${f.properties.region}</strong><br/>
          ${f.properties.status}<br/>
          Poverty: ${f.properties.poverty_pct}%
        `)
        .addTo(map);
    });

  });
};