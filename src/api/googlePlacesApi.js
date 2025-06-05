const mockSuggestions = [
    { description: 'Mock Place 1' },
    { description: 'Mock Place 2' },
    { description: 'Mock Place 3' },
  ];
  
  export const fetchAutocomplete = (input) => {
    return new Promise((resolve) => {
      if (!window.google?.maps?.places?.AutocompleteService) {
        console.warn('AutocompleteService not available – using mock');
        return resolve(mockSuggestions);
      }
  
      const service = new window.google.maps.places.AutocompleteService();
      service.getPlacePredictions(
        {
          input,
          componentRestrictions: { country: 'my' },
        },
        (predictions, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            resolve(predictions.map((p) => ({ description: p.description })));
          } else {
            console.warn('[AutocompleteService] Fallback to mock due to status:', status);
            resolve(mockSuggestions);
          }
        }
      );
    });
  };
  
  