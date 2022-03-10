
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './components/auth';
import { About } from './components/About';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { NewProducts } from './components/NewProduct';
import { NoMatch } from './components/NoMatch';
import { OrderSummary } from './components/OrderSummary';
import { Products } from './components/Products';
import { Profile } from './components/Profile';
import { RequireAuth } from './components/RequireAuth';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import { AddTodo } from './components/TodoAdd';
import { TodoList } from './components/TodoList';
const store = createStore(reducer);

function App() {
  return (
    <Provider store={store} >
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='add-todo' element={<RequireAuth><AddTodo /></RequireAuth>} />
        <Route path='todo-list' element={<RequireAuth><TodoList /></RequireAuth>} />
        <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path='login' element={<Login />} />

        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='*' element={<NoMatch />} />
        <Route path='products' element={<Products />}>
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>
      </Routes>
    </AuthProvider>
    </Provider>
  );
}

export default App;
