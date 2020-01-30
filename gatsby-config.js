module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-amplitude-analytics`,
      options: {
        apiKey: process.env.AMPLITUDE_KEY,
        head: false,
        respectDNT: true,
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Just Another Astromech Build Log`,
    author: `Rodrigo`,
    description: `El build log de mi viaje contruyendo un Astromech Droid.`,
    social: [
      {
        name: `Instagram`,
        url: `https://www.instagram.com/okenobi/`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/rodrigoi/astromech-blog`,
      },
    ],
  },
}
