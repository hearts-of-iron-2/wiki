module.exports = {
  async redirects() {
    return [
      {
        source: "/:slug",
        destination: "/wiki/:slug",
        permanent: true,
      },
    ];
  },
  output: "out",
};
