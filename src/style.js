import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  root: {
    backgroundColor: 'rgb(64, 133,108)',
    color: 'white',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0'
  },
  large: {
    textAlign: 'center',
    fontSize: '360px'
  },
  info: {
    width: '120px',
    margin: '0 auto',
    lineHeight: '1.4',
    fontSize: '16px'
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
    flexDirection: 'row',
    display: 'flex'
  },
  cell: {
    flex: 'auto'
  }
});
