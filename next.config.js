module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/important-html-tags",
        permanent: true,
      },
    ];
  },
};
