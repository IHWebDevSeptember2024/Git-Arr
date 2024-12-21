//COMPONENTS
import ProductsList from "../components/ProductsList"
import Categories from "../components/Categories"
import ProductForm from "../components/ProductForm"
import CategoryForm from "../components/CategoryForm"
import { useState } from "react"


function AdminPage() {
  const [productForm, setProductForm] = useState({show:"none", id:""})
  const [categoryForm, setCategoryForm] = useState({show:"add", id:""})
  
  return (
    <div>
        <h1>ADMIN PAGE</h1>
        <section>
            <ProductsList setProductForm={setProductForm}/>
        </section>
        <section>
            <Categories setCategoryForm={setCategoryForm}/>

        </section>
        <section>
          {(productForm.show === "add" || productForm.show === "edit") && <ProductForm productForm={productForm} setProductForm={setProductForm} /> }
          {(categoryForm.show === "add" || categoryForm.show === "edit") && <CategoryForm categoryForm={categoryForm} setCategoryForm={setCategoryForm} /> }
        </section>
    </div>
  )
}

export default AdminPage