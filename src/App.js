import React from 'react'
import Header from './component/header/Header'
import Weather from './component/weather/Weather'
import './App.css'

function App() {
    return (


        <>


            <div className="App">

                <Header />

                <div className="row">
                    <div className="col s12 m6 push-m3">

                        <Weather />

                    </div>
                </div>
            </div>




        </>


    )
}

export default App