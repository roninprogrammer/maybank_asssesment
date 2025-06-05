const maybankMapStyle = [
    {
      featureType: 'all',
      elementType: 'geometry.fill',
      stylers: [
        { color: '#f7f7f7' }, 
      ],
    },
    {
      featureType: 'administrative',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#333333' }],
    },
    {
      featureType: 'poi',
      elementType: 'geometry.fill',
      stylers: [{ color: '#fff6cc' }],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#FFD500' }], 
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{ color: '#e0e0e0' }],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#666666' }],
    },
    {
      featureType: 'transit.line',
      elementType: 'geometry',
      stylers: [{ color: '#0A0A0AFF' }],
    },
    {
      featureType: 'water',
      elementType: 'geometry.fill',
      stylers: [{ color: '#c4e1ff' }],
    },
    {
      featureType: 'landscape.man_made',
      elementType: 'geometry',
      stylers: [{ color: '#f5f5f5' }],
    },
  ];
  
  export default maybankMapStyle;
  