import Head from 'next/head';
import PropTypes from 'prop-types';

function PageHead({ title, description, keywords }) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}

PageHead.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default PageHead;
