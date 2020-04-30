// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: '_posts/**/*.md',
        typeName: 'Post'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: '_cms/hero/**/*.md',
        typeName: 'Hero'
      }
    }
  ],
  transformers: {
    remark: {
      // global remark options
    }
  }
}
