import './App.css'
import Header from './component/shared/header/Header.component'
import CreateNewMain from './component/createNewMain/CreateNewMain.component'
import CreateNewItemContextProvider from './context/CreateNewItem.context'

function App() {

  return (
    <div className="App">
      <Header />
      <CreateNewItemContextProvider>
        <CreateNewMain />
      </CreateNewItemContextProvider>
    </div>
  )
}

export default App
