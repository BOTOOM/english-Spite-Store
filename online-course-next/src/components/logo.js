/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import LogoDark from 'assets/logo.svg';

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        width: '8rem'
      }}
    >
      <Image src={LogoDark} alt="English Spite Store Academy logo" />
    </Link>
  );
}

const styles = {
  imagen: {
    width: '5rem'
  }
};