import * as React from 'react';

interface IProps {
  
}

const App: React.SFC<IProps> = (props) => (
    <div>
      Hello World!
      <style jsx>{`
        div {
          text-align: center;
        }  
      `}</style>
    </div>
)


export default App;
