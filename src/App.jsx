import {ConfigProvider, Space, Button} from 'antd';
import tokens from './tokens.json';

export const App = () => {

  const additionalComponents = {
    "components": {
      "Layout": {
        "colorBgHeader": "#ffffff"
      }
    }
  };
  
  // Merge the initial JSON object with the additional components
  const mergedStyleDefinition = { ...tokens, ...additionalComponents };

  return (
    <ConfigProvider
    theme={mergedStyleDefinition}
  >
    <Space>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
    </Space>
  </ConfigProvider>
  );
};