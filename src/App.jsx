import {ConfigProvider, Space, Button} from 'antd';

import tokens from './tokens.json';

export const App = () => {

  return (
    <ConfigProvider
    theme={tokens}
  >
    <Space>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
    </Space>
  </ConfigProvider>
  );
};