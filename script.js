mapboxgl.accessToken = 'pk.eyJ1Ijoic2h1Z2hlczU4IiwiYSI6ImNtb2tzanJxajAzaXkyb3B5YTU0YWo0dncifQ.hhJVBWVqUoE40kEsf0tPfQ';

const geojson = {
  type: "FeatureCollection",
  features: [
    // ── WEST LA (blue) ──────────────────────────────────────────
    { type:"Feature", id:1, properties:{ name:"Venice", region:"West LA", status:"Higher income / lower poverty", poverty_pct:12.4, fill:"#6ec6e6" },
      geometry:{ type:"Polygon", coordinates:[[[-118.481,33.997],[-118.469,33.997],[-118.464,33.983],[-118.478,33.978],[-118.487,33.984],[-118.481,33.997]]] }},
    { type:"Feature", id:2, properties:{ name:"Santa Monica", region:"West LA", status:"Higher income / lower poverty", poverty_pct:10.2, fill:"#6ec6e6" },
      geometry:{ type:"Polygon", coordinates:[[[-118.515,34.042],[-118.490,34.042],[-118.481,34.020],[-118.481,33.997],[-118.506,33.997],[-118.516,34.020],[-118.515,34.042]]] }},
    { type:"Feature", id:3, properties:{ name:"Brentwood", region:"West LA", status:"Higher income / lower poverty", poverty_pct:5.1, fill:"#6ec6e6" },
      geometry:{ type:"Polygon", coordinates:[[[-118.516,34.066],[-118.490,34.066],[-118.485,34.042],[-118.515,34.042],[-118.516,34.066]]] }},
    { type:"Feature", id:4, properties:{ name:"Pacific Palisades", region:"West LA", status:"Higher income / lower poverty", poverty_pct:3.8, fill:"#6ec6e6" },
      geometry:{ type:"Polygon", coordinates:[[[-118.572,34.075],[-118.516,34.075],[-118.516,34.042],[-118.543,34.025],[-118.572,34.048],[-118.572,34.075]]] }},
    { type:"Feature", id:5, properties:{ name:"Westwood", region:"West LA", status:"Higher income / lower poverty", poverty_pct:9.8, fill:"#6ec6e6" },
      geometry:{ type:"Polygon", coordinates:[[[-118.460,34.075],[-118.440,34.075],[-118.435,34.055],[-118.455,34.050],[-118.465,34.060],[-118.460,34.075]]] }},
    { type:"Feature", id:6, properties:{ name:"Bel Air", region:"West LA", status:"Higher income / lower poverty", poverty_pct:4.2, fill:"#6ec6e6" },
      geometry:{ type:"Polygon", coordinates:[[[-118.490,34.106],[-118.455,34.106],[-118.450,34.085],[-118.460,34.075],[-118.490,34.075],[-118.490,34.106]]] }},
    { type:"Feature", id:7, properties:{ name:"West Hollywood", region:"West LA", status:"Higher income / lower poverty", poverty_pct:11.3, fill:"#6ec6e6" },
      geometry:{ type:"Polygon", coordinates:[[[-118.390,34.098],[-118.369,34.098],[-118.365,34.082],[-118.385,34.078],[-118.395,34.088],[-118.390,34.098]]] }},
    { type:"Feature", id:8, properties:{ name:"Culver City", region:"West LA", status:"Higher income / lower poverty", poverty_pct:8.9, fill:"#6ec6e6" },
      geometry:{ type:"Polygon", coordinates:[[[-118.415,34.030],[-118.390,34.030],[-118.385,34.010],[-118.405,34.005],[-118.420,34.015],[-118.415,34.030]]] }},
    { type:"Feature", id:9, properties:{ name:"Mar Vista", region:"West LA", status:"Higher income / lower poverty", poverty_pct:9.1, fill:"#6ec6e6" },
      geometry:{ type:"Polygon", coordinates:[[[-118.440,34.015],[-118.415,34.015],[-118.412,33.998],[-118.430,33.992],[-118.445,34.000],[-118.440,34.015]]] }},
    { type:"Feature", id:10, properties:{ name:"Westchester", region:"West LA", status:"Higher income / lower poverty", poverty_pct:8.3, fill:"#6ec6e6" },
      geometry:{ type:"Polygon", coordinates:[[[-118.420,33.985],[-118.395,33.985],[-118.390,33.960],[-118.415,33.958],[-118.425,33.970],[-118.420,33.985]]] }},

    // ── CENTRAL LA (purple) ──────────────────────────────────────
    { type:"Feature", id:11, properties:{ name:"Hollywood", region:"Central LA", status:"Mixed income / moderate poverty", poverty_pct:22.4, fill:"#8c96c6" },
      geometry:{ type:"Polygon", coordinates:[[[-118.345,34.115],[-118.310,34.115],[-118.305,34.095],[-118.335,34.088],[-118.350,34.100],[-118.345,34.115]]] }},
    { type:"Feature", id:12, properties:{ name:"Silver Lake", region:"Central LA", status:"Mixed income / moderate poverty", poverty_pct:15.3, fill:"#8c96c6" },
      geometry:{ type:"Polygon", coordinates:[[[-118.280,34.098],[-118.258,34.098],[-118.253,34.078],[-118.272,34.072],[-118.285,34.082],[-118.280,34.098]]] }},
    { type:"Feature", id:13, properties:{ name:"Echo Park", region:"Central LA", status:"Mixed income / moderate poverty", poverty_pct:23.7, fill:"#8c96c6" },
      geometry:{ type:"Polygon", coordinates:[[[-118.270,34.082],[-118.252,34.082],[-118.248,34.065],[-118.262,34.060],[-118.275,34.068],[-118.270,34.082]]] }},
    { type:"Feature", id:14, properties:{ name:"Los Feliz", region:"Central LA", status:"Mixed income / moderate poverty", poverty_pct:14.2, fill:"#8c96c6" },
      geometry:{ type:"Polygon", coordinates:[[[-118.305,34.125],[-118.278,34.125],[-118.272,34.105],[-118.295,34.098],[-118.310,34.112],[-118.305,34.125]]] }},
    { type:"Feature", id:15, properties:{ name:"Koreatown", region:"Central LA", status:"Mixed income / moderate poverty", poverty_pct:26.1, fill:"#8c96c6" },
      geometry:{ type:"Polygon", coordinates:[[[-118.318,34.068],[-118.295,34.068],[-118.292,34.050],[-118.310,34.045],[-118.322,34.056],[-118.318,34.068]]] }},
    { type:"Feature", id:16, properties:{ name:"Mid-City", region:"Central LA", status:"Mixed income / moderate poverty", poverty_pct:19.8, fill:"#8c96c6" },
      geometry:{ type:"Polygon", coordinates:[[[-118.360,34.040],[-118.332,34.040],[-118.328,34.020],[-118.350,34.015],[-118.365,34.025],[-118.360,34.040]]] }},
    { type:"Feature", id:17, properties:{ name:"Downtown", region:"Central LA", status:"Mixed income / moderate poverty", poverty_pct:28.9, fill:"#8c96c6" },
      geometry:{ type:"Polygon", coordinates:[[[-118.262,34.065],[-118.240,34.065],[-118.236,34.042],[-118.255,34.038],[-118.268,34.050],[-118.262,34.065]]] }},
    { type:"Feature", id:18, properties:{ name:"Westlake", region:"Central LA", status:"Mixed income / moderate poverty", poverty_pct:32.1, fill:"#8c96c6" },
      geometry:{ type:"Polygon", coordinates:[[[-118.278,34.068],[-118.258,34.068],[-118.254,34.050],[-118.270,34.045],[-118.282,34.056],[-118.278,34.068]]] }},
    { type:"Feature", id:19, properties:{ name:"Pico-Union", region:"Central LA", status:"Mixed income / moderate poverty", poverty_pct:30.6, fill:"#8c96c6" },
      geometry:{ type:"Polygon", coordinates:[[[-118.295,34.052],[-118.272,34.052],[-118.268,34.035],[-118.285,34.030],[-118.298,34.040],[-118.295,34.052]]] }},
    { type:"Feature", id:20, properties:{ name:"Highland Park", region:"Central LA", status:"Mixed income / moderate poverty", poverty_pct:20.8, fill:"#8c96c6" },
      geometry:{ type:"Polygon", coordinates:[[[-118.218,34.118],[-118.195,34.118],[-118.190,34.098],[-118.210,34.092],[-118.224,34.105],[-118.218,34.118]]] }},
    { type:"Feature", id:21, properties:{ name:"Eagle Rock", region:"Central LA", status:"Mixed income / moderate poverty", poverty_pct:17.2, fill:"#8c96c6" },
      geometry:{ type:"Polygon", coordinates:[[[-118.210,34.142],[-118.185,34.142],[-118.180,34.120],[-118.200,34.115],[-118.215,34.128],[-118.210,34.142]]] }},
    { type:"Feature", id:22, properties:{ name:"Atwater Village", region:"Central LA", status:"Mixed income / moderate poverty", poverty_pct:16.9, fill:"#8c96c6" },
      geometry:{ type:"Polygon", coordinates:[[[-118.248,34.125],[-118.228,34.125],[-118.224,34.108],[-118.240,34.102],[-118.252,34.112],[-118.248,34.125]]] }},

    // ── EAST LA (magenta) ───────────────────────────────────────
    { type:"Feature", id:23, properties:{ name:"Boyle Heights", region:"East LA", status:"Lower income / higher poverty", poverty_pct:28.7, fill:"#810f7c" },
      geometry:{ type:"Polygon", coordinates:[[[-118.222,34.058],[-118.195,34.058],[-118.190,34.035],[-118.210,34.028],[-118.226,34.040],[-118.222,34.058]]] }},
    { type:"Feature", id:24, properties:{ name:"East Los Angeles", region:"East LA", status:"Lower income / higher poverty", poverty_pct:27.3, fill:"#810f7c" },
      geometry:{ type:"Polygon", coordinates:[[[-118.190,34.040],[-118.162,34.040],[-118.158,34.018],[-118.175,34.012],[-118.194,34.022],[-118.190,34.040]]] }},
    { type:"Feature", id:25, properties:{ name:"Lincoln Heights", region:"East LA", status:"Lower income / higher poverty", poverty_pct:25.4, fill:"#810f7c" },
      geometry:{ type:"Polygon", coordinates:[[[-118.222,34.082],[-118.200,34.082],[-118.196,34.062],[-118.215,34.056],[-118.226,34.068],[-118.222,34.082]]] }},
    { type:"Feature", id:26, properties:{ name:"El Sereno", region:"East LA", status:"Lower income / higher poverty", poverty_pct:22.6, fill:"#810f7c" },
      geometry:{ type:"Polygon", coordinates:[[[-118.180,34.098],[-118.158,34.098],[-118.152,34.075],[-118.170,34.068],[-118.184,34.082],[-118.180,34.098]]] }},
    { type:"Feature", id:27, properties:{ name:"Watts", region:"East LA", status:"Lower income / higher poverty", poverty_pct:35.8, fill:"#810f7c" },
      geometry:{ type:"Polygon", coordinates:[[[-118.258,33.952],[-118.232,33.952],[-118.228,33.930],[-118.248,33.924],[-118.262,33.936],[-118.258,33.952]]] }},
    { type:"Feature", id:28, properties:{ name:"Compton", region:"East LA", status:"Lower income / higher poverty", poverty_pct:29.5, fill:"#810f7c" },
      geometry:{ type:"Polygon", coordinates:[[[-118.238,33.910],[-118.208,33.910],[-118.202,33.882],[-118.222,33.876],[-118.242,33.888],[-118.238,33.910]]] }},
    { type:"Feature", id:29, properties:{ name:"Florence", region:"East LA", status:"Lower income / higher poverty", poverty_pct:33.2, fill:"#810f7c" },
      geometry:{ type:"Polygon", coordinates:[[[-118.278,33.980],[-118.252,33.980],[-118.248,33.958],[-118.265,33.952],[-118.282,33.962],[-118.278,33.980]]] }},
    { type:"Feature", id:30, properties:{ name:"South Central", region:"East LA", status:"Lower income / higher poverty", poverty_pct:31.4, fill:"#810f7c" },
      geometry:{ type:"Polygon", coordinates:[[[-118.298,34.002],[-118.268,34.002],[-118.262,33.978],[-118.280,33.972],[-118.302,33.984],[-118.298,34.002]]] }},
  ]
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

    map.addSource('la-neighborhoods', { type: 'geojson', data: geojson });

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
        'text-size': 11,
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
  });
};