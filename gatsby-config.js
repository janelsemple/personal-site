module.exports = {
  // Move pathPrefix to the top-level of the configuration object
  pathPrefix: "/personal-site",
  siteMetadata: {
    title: "Janel Semple",
    description: "This is a personal website for Janel Semple, come say hello!",
    author: "@janelsemple",
    image: "src/images/favicon-32x32.png",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        start_url: "/",
        background_color: "#be7730",
        display: "minimal-ui",
        icon: "src/images/favicon-32x32.png",
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "Poppins:400,400i,700,700i",
          "Roboto Mono:700",
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },
    // Add any other plugins here
  ],
};
