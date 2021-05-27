import logo from './logo.svg'
import './App.css'
import Category from './Category'
import data from './data/categorieslist'
function Categories() {
  return (
    <main>
      <section className='container'>
        {data.map((category) => {
          return <Category key={category.id} {...category} />
        })}
      </section>
    </main>
  )
}

export default Categories
