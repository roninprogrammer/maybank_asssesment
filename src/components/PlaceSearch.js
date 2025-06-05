import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, AutoComplete, Spin } from 'antd';
import { addToHistory, setSuggestions } from '../redux/slices/searchSlice';
import { fetchAutocomplete } from '../api/googlePlacesApi'; // adjust if needed

const PlaceSearch = () => {
  const dispatch = useDispatch();
  const suggestions = useSelector((state) => state.search.suggestions);
  const [loading, setLoading] = useState(false);

  const onSearch = async (value) => {
    if (!value) return;
    setLoading(true);
    const results = await fetchAutocomplete(value);
    dispatch(setSuggestions(results));
    setLoading(false);
  };

  const onSelect = (value) => {
    dispatch(addToHistory(value));
  };

  return (
    <AutoComplete
      style={{ width: '100%' }}
      options={suggestions.map((s) => ({ value: s.description }))}
      onSelect={onSelect}
      onSearch={onSearch}
    >
      <Input.Search
        size="large"
        placeholder="Search Places"
        enterButton
        suffix={loading ? <Spin size="small" /> : null}
      />
    </AutoComplete>
  );
};

export default PlaceSearch;
