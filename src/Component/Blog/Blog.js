import React from 'react'

const Blog = () => {
  return (
    <div className='container mx-auto my-14 grid grid-cols-1 gap-10 lg:grid-cols-2'>
      <div>
        <h1 className='text-3xl'>Improve the performance of a React Application</h1>
        <p className='mt-5'>If you’re benchmarking or experiencing performance problems in your React apps, make sure you’re testing with the minified production build.</p>
        <p className='mt-2'>
          By default, React includes many helpful warnings. These warnings are very useful in development. However, they make React larger and slower so you should make sure to use the production version when you deploy the app.
        </p>
        <ol className='mt-4 list-decimal ml-5'>
          <li> Keeping component state local where necessary.</li>
          <li> Memoizing React components to prevent unnecessary re-renders.</li>
          <li> Code-splitting in React using dynamic import()</li>
          <li> Windowing or list virtualization in React.</li>
          <li> Lazy loading images in React.</li>
        </ol>
      </div>
      <div>
        <h1 className='text-3xl'>Improve the performance of a React Application</h1>
        <p className='mt-2'>
          Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__
        </p>

      </div>
      <div>
        <h1 className='text-3xl'>{`Why you do not set the state directly in React`}</h1>
        <p className='mt-2'>
          {
            ` 
        he state starts as { count: 0 }, and we increment state.count when the user clicks a button by calling this.setState(). We’ll use snippets from this class throughout the page.
            `
          }
          <div className="mockup-code mt-4">
            <pre data-prefix="$"><code>
              
              {
                `
        const [count, setCount] = useState(0)
        //For Changer This Value of Count !
          we Can Use setCount(4545)
        Now value Of Count is 4545
                `
              }
              </code></pre>
          </div>

        </p>

      </div>
      <div>
        <h1 className='text-2xl'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
        <div className="mockup-code p-5 mt-4">
          <pre data-prefix="Ans"><code className='text-green-500'>
            {
              `
    const Array = [
    {name : "product1" , price : 5050},
    {name : "product2" , price : 45650},
    {name : "product3" , price : 4560},
    {name : "product4" , price : 405650}
    ]

    Array.filter((val)=> {
      if (searchFeildValue === "") {
        return val
      }
      else if(val.name.toLowerCase().includes(searchValue.toLowerCase())){
        return val
      }
    }).map(product => console.log(product))
              `
            }
          </code></pre>
        </div>

      </div>
    </div>
  )
}

export default Blog