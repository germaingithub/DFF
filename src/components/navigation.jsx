export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <div className="col-xs-4 col-md-1">
            {" "}
            <img src="img/logodff.jpeg" className="img-responsive" alt="" />{" "}
          </div>
          <a className='navbar-brand page-scroll' href='#page-top'>
          Destiny Focus Foundation
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse col-md-10'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
             
              <a href='#about' className='page-scroll'>
                Our vision
              </a>
            </li>
            <li>
            <a href='#features' className='page-scroll'>
                Our actions
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Who we are
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Gallery
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}
