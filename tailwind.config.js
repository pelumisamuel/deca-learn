module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xs: '360px',
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', '"sans-serif"'],
        roboto: ['Roboto', '"sans-serif"'],
      },
      backgroundImage: {
        'black-leaves':
          "url('https://images.unsplash.com/photo-1502239608882-93b729c6af43?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740')",
        'dark-road':
          "url('https://images.unsplash.com/photo-1485758152456-1e91810337e0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687')",
      },
    },
  },
  plugins: [],
}
