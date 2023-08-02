import React from 'react';
import { useSpring, animated } from 'react-spring';

const Animation = () => {
  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    // Add other animation properties as needed
  });

  return (
    <animated.div style={animationProps}>
      {/* Your animated content */}
    </animated.div>
  );
};

export default Animation;
