import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Button, Space } from 'antd';
import { clearHistory } from '../redux/slices/searchSlice';

const SearchHistoryList = ({ onSelect }) => {
  const history = useSelector((state) => state.search.history);
  const dispatch = useDispatch();

  const handleClear = () => dispatch(clearHistory());

  return (
    <>
      <Space style={{ marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ fontWeight: 'bold' }}>Search History</div>
        <Button type="link" danger onClick={handleClear}>
          Clear All
        </Button>
      </Space>
      <List
        bordered
        dataSource={history}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button type="link" onClick={() => onSelect(item)}>
                📍 Pin
              </Button>,
            ]}
          >
            {item}
          </List.Item>
        )}
      />
    </>
  );
};

export default SearchHistoryList;
