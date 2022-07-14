// The files example used in an earlier demo
	
// App.js
const AppJs = `function Card(){
    return(
      <div className="c-card">
        <div className='c-card__content'>
            <h1>Card Test</h1>
        </div>
      </div>
    )
}
export default Card;
`

const stylesCSS =
`.App {
    display: block;
    max-width: 720px;
    margin-top: 150px;
    margin-left: auto;
    margin-right: auto;
}

.c-card {
    display: flex;
    justify-content: center;
    width: 360px;
    margin-left: auto;
    margin-right: auto;
    color: #fff;
    background-color: #1A5F7A;
    border-radius: 8px;
    box-shadow: 5px 5px 20px #1a5f7a5d;
    margin-bottom: 24px;
}
`

// Location of file as key (always starts with /)
const files = {
  '/App.tsx': {
    code: AppJs
  },
  '/styles.css': {
    code: stylesCSS,
    // active: true, // Default visible file on load? default `false`
    // hidden: false // File visible in tab list? default `true`
    hidden: true // File visible in tab list? default `true`
  },
}
export default files
