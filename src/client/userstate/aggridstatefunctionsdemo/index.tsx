import { useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { v4 as uuidv4 } from 'uuid';

import demo from './demo';

declare let window: any;

let firebasePrefix = '';

const update = (prefix: string) => {
  localStorage.setItem('firebaseprefix', prefix);
  firebasePrefix = prefix;
};

export default (props: { onReady?: (config: any) => void }) => {
  useEffect(() => {
    const result = demo();

    if (props.onReady) {
      props.onReady(result);
    }

    const node = document.querySelector('.js-firebasePrefix');

    const defaultValue = localStorage.getItem('firebaseprefix') || uuidv4();

    update(defaultValue);

    if (!node) {
      return;
    }

    ReactDOM.render(
      <div>
        <label
          style={{
            display: 'flex',
            flexFlow: 'row',
            alignItems: 'center',
          }}
        >
          Firebase prefix:
          <input
            style={{ marginLeft: '1rem', width: '25rem', padding: '0.5rem' }}
            defaultValue={defaultValue}
            onChange={e => {
              firebasePrefix = e.target.value;
            }}
          />
          <button
            style={{ marginLeft: '1rem', padding: '0.5rem' }}
            onClick={() => {
              update(firebasePrefix);
              window.location.href = window.location.href;
            }}
          >
            Set and refresh
          </button>
        </label>
      </div>,
      node!
    );
  }, []);
  return null;
};
