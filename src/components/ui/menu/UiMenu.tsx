import { ConfigProvider, Menu, MenuProps } from 'antd';
import React from 'react';

const UiMenu: React.FC<MenuProps> = (_props) => (
  <ConfigProvider
    theme={{
      components: {
        Menu: {
          itemSelectedColor: '#5384e4',
          itemSelectedBg: '#CBDAF7',
          itemColor: '#a5a5a5',
          itemBg: '#f5fbff',
        },
      },
    }}
  >
    <Menu {..._props} />
  </ConfigProvider>
);

export { UiMenu };
