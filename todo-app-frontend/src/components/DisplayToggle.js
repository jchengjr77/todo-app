import React from 'react';
import '../App.css';

// easypeasy imports
import { useStoreState, useStoreActions } from 'easy-peasy';

// import components
import { Toggle, Text } from '@geist-ui/react';

const DisplayToggle = (props) => {
  // let { toggleHandler } = props;

  const showCompleted = useStoreState((state) => state.showCompleted);

  const toggleHandler = useStoreActions(
    (actions) => actions.toggleShowCompleted
  );

  return (
    <div className='toggleContainer'>
      <Text p>Show Completed</Text>
      <Toggle
        value={showCompleted}
        onChange={(e) => toggleHandler(e.target.checked)}
      />
    </div>
  );
};

export default DisplayToggle;
