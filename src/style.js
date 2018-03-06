import { StyleSheet } from 'aphrodite';

const screenSize = {
  smartphone: '@media only screen and (max-width: 479px)',
  smartphoneLandscape: '@media only screen and (min-width: 480px) and (max-width: 767px)',
  tablet: '@media only screen and (min-width: 768px) and (max-width: 991px)',
  desktop: '@media only screen and (min-width: 992px)',
}

export default StyleSheet.create({
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
    verticalAlign: 'bottom',
    display: 'table-cell',
    textAlign: 'center',
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
      height: '500px'

    }
  },
  info: {
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
      fontSize: '16px'
    },
    [screenSize.desktop]: {
      width: '120px',
      fontSize: '18px'
    }
  },
  codepoint: {
    fontFamily: 'HelveticaNeue-Bold',
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
      flexDirection: 'column'
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
  }
});
