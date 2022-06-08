module.exports = {
  mode: 'jit',
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    // 擴充 (不會蓋掉tailwind預設樣式)
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Noto Sans TC', '微軟正黑體', 'sans-serif'] //改預設字體
        // zcool: ['ZCOOL XiaoWei', 'sans-serif']
        // @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300&display=swap');
      },
      colors: {
        custcolor: {
          primary: '#26252F',
          'light-primary': '#787878',
          secondary: '#D38E4E',
          'light-secondary': '#DCA46E',
          'light-gray': '#FAFAFA',
          'secondary-gray': '#E5E5E5',
          black: '#433D3B',
          'secondary-black': '#111722',
          'third-black': '#29313C',
          'fourth-black': '#171E26',
          'primary-blue': '#5D86AF',
          'primary-green': '#8BC34A',
          'primary-red': '#FF5722'
        }
      }
    }
  },
  plugins: []
}
