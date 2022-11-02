import React from 'react';
import AxiosAPI from './componentsToCallAPIs/AxiosAPI';

import FetchAPI from './componentsToCallAPIs/FetchAPI';

function App() {
  
  return (
    <div>
      <FetchAPI/>
      <AxiosAPI/>
    </div>
  );
}

export default App;
