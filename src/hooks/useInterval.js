/* eslint-disable consistent-return */
import { useEffect, useRef } from 'react';

function useInterval(callback: function, delay: ?number) {
  const savedCallback: {current: Function} = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };

    if (delay !== null) {
      const id = setInterval(tick, delay);

      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval;
