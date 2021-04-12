import React, { useState, useEffect } from 'react';
import '../App.css';

// easypeasy imports
import { useStoreState, useStoreActions } from 'easy-peasy';

// import components
import { Toggle, Text } from '@geist-ui/react';

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

const DisplayToggle = (props) => {
  const { width, height } = useWindowDimensions();

  const showCompleted = useStoreState((state) => state.showCompleted);

  const toggleHandler = useStoreActions(
    (actions) => actions.toggleShowCompleted
  );

  const smallScreen = height > 1.5 * width;

  return (
    <div
      className='toggleContainer'
      style={smallScreen ? { flexDirection: 'column' } : {}}
    >
      <Text p>Show Completed</Text>
      <Toggle
        value={showCompleted}
        onChange={(e) => toggleHandler(e.checked)}
      />
    </div>
  );
};

export default DisplayToggle;
