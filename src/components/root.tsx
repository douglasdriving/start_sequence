import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import WelcomeMessage from './sequences/welcomeMessage/welcomeMessage';
import Mantra from './sequences/mantra/mantra';
import ReflectionForm from './sequences/reflectionForm/reflectionForm';
import DayPlan from './sequences/dayplan/dayplan';
import EndMessage from './sequences/endMessage/endMessage';
import ReflectionHistory from './reflectionHistory/reflectionHistory';

const Root: React.FC = () => {

  return (
    <Router>
      <Routes>

        {/* Part of the sequence */}
        <Route path="/" element={<WelcomeMessage nextPage={('/mantra')} />} />
        <Route path="/mantra" element={<Mantra nextPage={'/reflect'} />} />
        <Route path="/reflect" element={<ReflectionForm nextPage={'/dayplan'} />} />
        <Route path="/dayplan" element={<DayPlan nextPage={'/end'} />} />
        <Route path="/end" element={<EndMessage />} />

        {/* Other */}
        <Route path="reflection-history" element={<ReflectionHistory />} />

      </Routes>
    </Router>
  );
};

export default Root;
