import React, { useState } from 'react';
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Button,
} from '@chakra-ui/react';

import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from '@chakra-ui/icons';

const AvatarMenu = () => {
  return (
    <Menu>
      <MenuButton as={Button} colorScheme='pink'>
        Profile
      </MenuButton>
      <MenuList>
        <MenuGroup title='Profile'>
          <MenuItem>My Account</MenuItem>
          <MenuItem>Payments </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title='Help'>
          <MenuItem>Docs</MenuItem>
          <MenuItem>FAQ</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default AvatarMenu;
