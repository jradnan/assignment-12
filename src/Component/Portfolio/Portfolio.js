import React from 'react'
import PortfolioCard from './PortfolioCard'

const Portfolio = () => {
  return (
    <div className='container mx-auto  py-16'>
      <div className="my-inpo mb-5 py-5">
        <div className="avatar">
          <div className="w-32 rounded">
            <img src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t1.6435-9/80215838_1572232716264528_4844007615581126656_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE9q-Kfs-iNk-lvJqeQVn95dYgvzaEFYg51iC_NoQViDuREmicSRkmLDnWnQVOqrivvNVUUB_4nX9yPE17-F3Lp&_nc_ohc=SgGS0CjzcYAAX_YzWG3&_nc_ht=scontent.fjsr6-1.fna&oh=00_AT9vR_ppVSxDUEPgVaXs7C2c9EF7KjGhKMWLTkG219zxKQ&oe=630842BF" alt='my avater'/>
          </div>
        </div>
        <h1 className='font-bold'>Name : <span className='font-normal'>Md Adnan</span></h1>
        <h1 className='font-bold'>Email : <span className='font-normal'>afridimhrj10@gmail.com</span></h1>
        <h1 className='font-bold'>Phone : <span className='font-normal'> 01978787676</span></h1>
        <h1 className='font-bold'>Facebook : <span className='font-normal'><a href="https://www.facebook.com/mehedihasan.bappi.54/" target={'_blank'} rel="noreferrer">https://www.facebook.com/mehedihasan.bappi.54/</a></span></h1>
        <h1 className='font-bold mt-3'>Skills</h1>
        <ul className='grid grid-cols-2 lg:grid-cols-4 gap-3 mt-4 list-disc border p-5'>
          <li>React</li>
          <li>Javascript</li>
          <li>Node js</li>
          <li>Express</li>
          <li>Mongoose</li>
          <li>Css</li>
          <li>Bootstrap</li>
          <li>Tailwind</li>
        </ul>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7'>
        <PortfolioCard to='https://playful-paprenjak-90b1a1.netlify.app/' image={'https://i.ibb.co/h2PtMMg/Capture.png'} name='Product Review website' />

        <PortfolioCard image={'https://i.ibb.co/BfD98dG/www.png'}
          to='https://bright-kashata-50d4b3.netlify.app/'
          name="Watch Online Shop"
        />
        <PortfolioCard image={'https://i.ibb.co/h8yGtyk/sggr.png'}
          name="Official Website"
          to={'https://rad-youtiao-85c497.netlify.app/'}
        />
        <PortfolioCard image={'https://i.ibb.co/9qt6gmK/vvvvvvv.png'}
          to='https://grand-biscotti-2162b3.netlify.app/'
          name="Clinik Website"
        />
        <PortfolioCard image={'https://i.ibb.co/8KLTgp3/ff-wew.png'}
          to='https://assignment-11-d8684.web.app/'
          name="Inventory Website"
        />
        <PortfolioCard image={'https://i.ibb.co/Fsmm8YZ/Screenshot-2022-05-25-01-49-34.png'}
          to='https://code-house.netlify.app/'
          name="Code House"
        />


      </div>
    </div>
  )
}

export default Portfolio