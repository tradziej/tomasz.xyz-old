import React from 'react'
import Helmet from 'react-helmet'

const Head = props => {
  const domain = 'https://radziejewski.pl'
  const pathname = props.location.pathname === '/' ? '' : props.location.pathname
  const avatar = `${domain}/public/static/images/avatar.jpg`

  return (
    <Helmet>
      <html
        prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#"
        itemScope
        itemType="http://schema.org/WebSite"
        lang="en"
      />
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywords} />
      <meta name="author" content="Tomasz Radziejewski" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="HandheldFriendly" content="true" />

      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@tradziej" />
      <meta name="twitter:creator" content="@tradziej" />
      <meta property="og:site_name" content={props.title} />
      <meta name="twitter:title" content={props.title} />
      <meta property="og:title" content={props.title} />

      <link rel="canonical" href={`${domain}${pathname}`} />
      <meta name="twitter:url" content={`${domain}${pathname}`} />
      <meta property="og:url" content={`${domain}${pathname}`} />

      <meta name="twitter:description" content={props.description} />
      <meta property="og:description" content={props.description} />

      <meta name="og:image" content={avatar} />
      <meta name="twitter:image:src" content={avatar} />

      <link rel="apple-touch-icon" sizes="180x180" href="/public/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/public/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/public/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/public/favicon/safari-pinned-tab.svg" color="#fbfef9" />
      <link rel="shortcut icon" href="/public/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#fbfef9" />
      <meta name="msapplication-config" content="/public/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#fbfef9" />
    </Helmet>
  )
}

export default Head
