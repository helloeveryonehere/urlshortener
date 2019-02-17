export const styles = {
  formWrapper: {
    minWidth: 400,
    maxWidth: 500,
    padding: 16,
    background: '#f7f7f7',
    margin: 'auto',
  },
  formInput: {
    outline: 0,
    boxSizing: 'border-box',
    WebkitBoxSizing: 'border-box',
    MozBoxSizing: 'border-box',
    width: '100%',
    background: '#fff',
    marginBottom: '4%',
    border: '1px solid #ccc',
    padding: '3%',
    color: '#555',
    fontFamily: 'Arial,Helvetica,sans-serif',
    fontSize: 14,
    '&:focus': {
      boxShadow: '0 0 5px #43d1af',
      padding: '3%',
      border: '1px solid #43d1af',
    },
  },
  formSubmit: {
    boxSizing: 'border-box',
    WebkitBoxSizing: 'border-box',
    MozBoxSizing: 'border-box',
    width: '100%',
    padding: '3%',
    background: '#43d1af',
    borderBottom: '2px solid #30c29e',
    borderTopStyle: 'none',
    borderRightStyle: 'none',
    borderLeftStyle: 'none',
    color: '#fff',
    fontSize: 14,
    cursor: 'pointer',
    '&:hover': {
      background: '#2ebc99',
    },
  },
  submitedValue: {
    font: '140% Arial,Helvetica,sans-serif',
    color: '#fff',
    margin: '-16px -16px 16px -16px',
    padding: '23px 10px',
    background: '#43d1af',
    fontWeight: 300,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};