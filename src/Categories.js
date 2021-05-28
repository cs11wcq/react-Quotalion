import logo from './logo.svg'
import Category from './Category'
import data from './data/categorieslist'
import { Link } from 'react-router-dom'
function Categories() {
  return (
    <main>
      <section className='container'>
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
