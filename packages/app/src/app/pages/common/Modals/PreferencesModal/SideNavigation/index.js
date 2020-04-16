import React from 'react';
import Relative from '@codesandbox/common/lib/components/Relative';
import { Container, Title, ITEM_HEIGHT, Item, Selector } from './elements';

export const SideNavigation = ({ menuItems, itemId, setItem }) => {
  const itemIndex = menuItems.findIndex(item => item.id === itemId);

  return (
    <Container>
      <Title>Preferences</Title>
      <Relative style={{ height: menuItems.length * ITEM_HEIGHT }}>
        {menuItems.map((item, i) => (
          <Item
            onClick={() => setItem({ itemId: item.id })}
            key={item.title}
            selected={itemId === item.id}
            top={i * ITEM_HEIGHT}
          >
            <div style={{ height: ITEM_HEIGHT, marginRight: '0.5rem' }}>
              {item.icon}
            </div>
            {item.title}
          </Item>
        ))}
        <Selector offset={itemIndex * ITEM_HEIGHT} />
      </Relative>
    </Container>
  );
};
