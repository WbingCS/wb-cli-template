import * as React from 'react'
import * as ReactDOM from 'react-dom'

interface IProps {}

const App: React.SFC<IProps> = props => (
  <div>
    Hello World!
    <style jsx>{`
      div {
        text-align: center;
      }
    `}</style>
  </div>
)

export default () => {
  ReactDOM.render(<App />, document.querySelector('#root'))
}
