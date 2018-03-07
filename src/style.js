import { StyleSheet } from 'aphrodite';

const screenSize = {
  smartphone: '@media only screen and (max-width: 479px)',
  smartphoneLandscape: '@media only screen and (min-width: 480px) and (max-width: 767px)',
  tablet: '@media only screen and (min-width: 768px) and (max-width: 991px)',
  desktop: '@media only screen and (min-width: 992px)',
}
const serifFont = "'ヒラギノ明朝 ProN W3', 'HiraMinProN-W3', 'ＭＳ Ｐ明朝', 'MS PMincho', 'MS 明朝', serif"

const sansSerifFont = "'Helvetica Neue', Helvetica, Arial, sans-serif"

export default StyleSheet.create({
  center: {
    position: 'absolute',
    top: '50%',
    transform : 'translateY(-50%)',
    left: '0',
    right: '0',
  },
  root: {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0'
  },
  large: {
    textAlign: 'center',
    margin: 0,
    width: '100%',
    [screenSize.smartphone]: {
      fontSize: '120px'
    },
    [screenSize.smartphoneLandscape]: {
      fontSize: '150px'
    },
    [screenSize.tablet]: {
      fontSize: '210px'
    },
    [screenSize.desktop]: {
      fontSize: '320px',
      height: '460px',
      ':lang(en)': {
        fontSize: '380px',
      }
    }
  },
  medium: {
    textAlign: 'center',
    margin: '-40px 0 0 0',
    width: '100%',
    [screenSize.smartphone]: {
      margin: 0,
      fontSize: '100px',
      height: '140px',
      ':lang(en)': {
        fontSize: '130px',
      }
    },
    [screenSize.smartphoneLandscape]: {
      margin: 0,
      fontSize: '80px',
      height: '110px',
      ':lang(en)': {
        fontSize: '100px',
      }
    },
    [screenSize.tablet]: {
      fontSize: '210px',
      height: '270px',
      ':lang(en)': {
        fontSize: '270px',
      }
    },
    [screenSize.desktop]: {
      fontSize: '235px',
      height: '300px',
      ':lang(en)': {
        fontSize: '300px',
      }
    }
  },
  info: {
    fontFamily: serifFont,
    margin: '0 auto',
    lineHeight: '1.4',
    [screenSize.smartphone]: {
      width: '80px',
      fontSize: '12px'
    },
    [screenSize.smartphoneLandscape]: {
      width: '80px',
      fontSize: '12px'
    },
    [screenSize.tablet]: {
      width: '120px',
      fontSize: '14px'
    },
    [screenSize.desktop]: {
      width: '140px',
      fontSize: '14px'
    }
  },
  codepoint: {
    fontFamily: sansSerifFont,
    fontWeight: 'bold',
    marginBottom: '8px'
  },
  label: {
    ':after': {
      content: '":"'
    }
  },
  mean: {
    ':before': {
      content: '"»"'
    },
    ':after': {
      content: '"«"'
    }
  },
  row: {
    display: 'flex',
    [screenSize.smartphone]: {
      flexDirection: 'row'
    },
    [screenSize.smartphoneLandscape]: {
      flexDirection: 'row'
    },
    [screenSize.tablet]: {
      flexDirection: 'row'
    },
    [screenSize.desktop]: {
      flexDirection: 'row'
    }
  },
  cell: {
    flex: 'auto'
  },
  glyph: {
    fontFamily: serifFont
  }
});
