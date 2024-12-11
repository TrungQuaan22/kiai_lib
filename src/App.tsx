import useRouteElements from './routes/useRouteElements'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function App() {
  const routeElements = useRouteElements()
  return <>{routeElements}</>
}

export default App
