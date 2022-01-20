/** @jsx jsx */
import { jsx, NavLink as MenuLink, Link as A } from 'theme-ui';
import NextLink from 'next/link';
export function NavLink({ path, label, children, ...rest }) {
  return (
    <NextLink href={path}>
      <MenuLink {...rest}>{children ? children : label}</MenuLink>
    </NextLink>
  );
}
export function Link2({ path, label, children, ...rest }) {
  return (
    <NextLink href={path}>
      <A rel="noopener noreferrer"  href={path} target='_blank' {...rest}>{children ? children : label}</A>
    
    </NextLink>
  );
}
