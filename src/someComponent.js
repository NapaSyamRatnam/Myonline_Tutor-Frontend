// The component where you navigate to the Settings component
import React from 'react';
import { Link } from 'react-router-dom';

function SomeComponent(props) {
  // Assuming adminDetails is available in props
  const { adminDetails } = props;

  return (
    <div>
      {/* Navigate to Settings component with adminDetails passed in location.state */}
      <Link to={{ pathname: '/Settings', state: { adminDetails: adminDetails } }}>Go to Settings</Link>
    </div>
  );
}

export default SomeComponent;
