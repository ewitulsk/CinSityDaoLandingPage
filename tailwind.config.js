
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gunmetal': '#12232C',
        'twilight_lavender': '#90496E',
        'more_lavender': "#8f4990",
        'almost_twilight': '#A593B0',
        'grullo': '#948E7B'
      },
      backgroundImage:{
        'night_casino': "linear-gradient(rgba(18, 35, 44, 0.5), rgba(18, 35, 44, 0.5)), url(./assets/NIGHT_CASINO.png)",
        'warped_plank': "linear-gradient(rgba(18, 35, 44, 0.7), rgba(18, 35, 44, 0.7)), url(./assets/warpedPlank.jpg)",
        'diamond_block': "linear-gradient(rgba(18, 35, 44, 0.7), rgba(18, 35, 44, 0.7)), url(./assets/diamondBlock.jpg)",
        'purpur_block': "linear-gradient(rgba(18, 35, 44, 0.7), rgba(18, 35, 44, 0.7)), url(./assets/purpurBlock.jpg)",
        'dark_prismarine': "linear-gradient(rgba(18, 35, 44, 0.7), rgba(18, 35, 44, 0.7)), url(./assets/darkPrismarine.jpg)",
        'warped_wart': "linear-gradient(rgba(18, 35, 44, 0.7), rgba(18, 35, 44, 0.7)), url(./assets/warpedWart.jpg)",
        'blackstone_brick': "linear-gradient(rgba(18, 35, 44, 0.7), rgba(18, 35, 44, 0.7)), url(./assets/blackstoneBrick.jpg)",
      },
      container:{
        center: true,
      }
    },
  },
  plugins: [],
}
