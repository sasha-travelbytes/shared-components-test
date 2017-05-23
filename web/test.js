import React, { PropTypes } from 'react';

const Button = ({ style, type, ...props }) => (
   <button {...props}
           type={(type === 'submit')? 'submit' : 'button'}
           disabled={props.disabled}
           style={[ styles.button,
                    type? styles[type] : styles.submit,
                    props.disabled? styles.disabled : {},
                    style ]}>
     <span style={styles.inner}>
       {props.children}
     </span>
   </button>
);

Button.propTypes = {
   style: PropTypes.object,
   type: PropTypes.oneOf(
      ['submit',
       'alternate',
      ]),
   disabled: PropTypes.bool,
   children: PropTypes.node
};

const styles = {
   button: {
      height: 42,
      padding: '3px 8px',
      cursor: 'pointer',
      outline: 'none',
      fontFamily: 'Verdana',
      fontSize: 18,
      textDecoration: 'none',
   },
  
  // NOTE: some browsers don't allow flex styling on buttons, so to
  // workaround that, we use an inner span with display: flex instead.
  inner: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexFlow: 'row nowrap',
  },

   submit: {
      border: 'none',
      backgroundColor: '#ff0088',
      color: '#00ff88',
   },
};

export default Button;
