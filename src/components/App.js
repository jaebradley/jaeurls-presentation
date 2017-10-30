import React from 'react';

import CurrentUriForm from '../containers/CurrentUriForm';
import CurrentJaeUrlDisplay from '../containers/CurrentJaeUrlDisplay';

class App extends React.Component {
   render() {
      return (
         <div>
            <CurrentUriForm />
            <CurrentJaeUrlDisplay />
         </div>
      );
   }
}

export default App;
