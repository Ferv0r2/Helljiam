module.exports = {
  client: {
    service: {
      name: 'hello-graphql',
      url: process.env.VITE_GRAPHQL,
    },
    includes: ['src/**/*.vue', 'src/**/*.ts', 'src/**/*.js'],
  },
}
