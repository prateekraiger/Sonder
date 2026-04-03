const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://scribblit.app'

export function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Sonder',
    url: siteUrl,
    logo: `${siteUrl}/og-image.png`,
    description:
      'A premium note-taking experience for deep thinkers.',
    sameAs: [
      'https://twitter.com/sondernous',
      'https://linkedin.com/company/sondernt',
    ],
    foundingDate: '2024',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      url: `${siteUrl}/#contact`,
    },
  }

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Sonder',
    applicationCategory: 'ProductivityApplication',
    operatingSystem: 'Android, iOS, Windows, Linux, Web',
    description:
      'A premium note-taking experience for deep thinkers — ready whenever inspiration hits.',
    url: siteUrl,
    offers: [
      {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        name: 'Free',
        description: 'Create up to 50 notes, basic search & tagging, single device access.',
      },
      {
        '@type': 'Offer',
        price: '69.00',
        priceCurrency: 'USD',
        name: 'Pro',
        description:
          'Unlimited notes & notebooks, advanced search & tagging, real-time collaboration, cloud sync.',
      },
      {
        '@type': 'Offer',
        price: '149.00',
        priceCurrency: 'USD',
        name: 'Vision Pro',
        description:
          'Everything in Pro, team dashboards & shared workspaces, admin & permissions, priority support.',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '100000',
      bestRating: '5',
      worstRating: '1',
    },
    featureList: [
      'Smart Note Capture',
      'Adaptive Organization',
      'AI-Powered Summaries',
      'Real-Time Collaboration',
      'Cloud Sync Across Devices',
      'Cross-Platform Support',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Sonder',
    url: siteUrl,
    description:
      'Capture thoughts instantly, organize with AI, and sync across all your devices.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What platforms does Sonder support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sonder is available on Android, iOS, Windows, Linux, and the web. Your notes sync seamlessly across all platforms.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Sonder free to use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Sonder offers a free plan with up to 50 notes, basic search & tagging, and single device access. Upgrade to Pro ($69) or Vision Pro ($149) for unlimited notes, collaboration, and more.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Sonder support real-time collaboration?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, with Sonder Pro and Vision Pro plans, you can collaborate in real-time with your team, share workspaces, and manage permissions.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
