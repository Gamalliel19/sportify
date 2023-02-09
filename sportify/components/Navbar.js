import {
  Box,
  Flex,
  Link,
  Stack,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';
import AvatarMenu from './AvatarMenu';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      padding='1.5rem'
      bg='#111111'
      color='white'
    >
      <Flex align='center' mr={5}>
        <Link href='#' fontWeight='bold' color='#F2FA57'>
          sportify
        </Link>
      </Flex>

      <Stack
        display={{ sm: 'none', md: 'flex' }}
        align='center'
        justify='center'
        direction='row'
        ml='auto'
        mt={{ base: 4, md: 0 }}
      >
        <Link href='#' color='inherit' mr={6}>
          HOME
        </Link>

        <AvatarMenu />
      </Stack>
    </Flex>
  );
}
