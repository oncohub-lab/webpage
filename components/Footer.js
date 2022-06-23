import sFooter from '../styles/Footer.module.css';

export const Footer = () => {
  return (
    <div className={sFooter.footer}>
      <a href='https://rskrzydelski.dev/about'>
        <div className={sFooter.logo}></div>
      </a>
    </div>
  );
};
