import logo from './logo.svg'
import Category from './Category'
import data from './data/categoryList'
import { Link } from 'react-router-dom'
import './css/index.css'

function Categories() {
  return (
    <main>
      <section className='container'>
        <h3>
          <Link to='/'>Back Home</Link>
        </h3>
        {data.map((category) => {
          return (
            <div key={category.category_id}>
              <Category {...category} />
            </div>
          )
        })}
      </section>
    </main>
  )
}

export default Categories
