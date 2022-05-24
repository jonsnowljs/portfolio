import React from 'react';
import { Helmet } from 'react-helmet';

const metaDecorator = require('../../assets/data/metaDecorator.json');

const MetaDecorator = ({ title, description, imageUrl, imageAlt }) => (
  <Helmet>
    <title>{title}</title>
    <meta property="og:title" content={title} />

    <meta property="og:description" content={description} />
    {/* TODO add hostname and revise metaDecorator.js data*/}
    <meta property="og:image" content={imageUrl} />
    <meta
      property="og:url"
      content={
        metaDecorator.hostname +
        window.location.pathname +
        window.location.search
      }
    />
    {/* <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image:alt" content={imageAlt} />
    <meta name="twitter:site" content={metaDecorator.twitterUsername} /> */}
  </Helmet>
);


export default MetaDecorator;
