import ReactDOM from 'react-dom';

const Portal = ({ children, container }) => {
  return container ? ReactDOM.createPortal(children, container) : null;
};

export default Portal;