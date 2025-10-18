import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Silicon Nova - Building Digital Experiences for Kenya and the World',
  description = 'Premium web development services for businesses in Kenya and globally. We build fast, secure, and beautiful websites that drive results.',
  image = '/og-image.jpg',
  url = 'https://siliconnova.co.ke',
  type = 'website',
}) => {
  const fullTitle = title.includes('Silicon Nova') ? title : `${title} | Silicon Nova`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Silicon Nova',
          url: url,
          logo: `${url}/logo.png`,
          description: description,
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'KE',
            addressLocality: 'Nairobi',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+254-762-677-591',
            contactType: 'customer service',
          },
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
