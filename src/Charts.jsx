import { useState } from 'react'
import s from './Charts.module.css'

import { Menu } from './components/menu'

function Charts(){

const [show, setshow] = useState("")
    return(
        <>
            <Menu/>
            <div className={s.wrapCharts}>
                <div className={s.wrapBtns}>
                    <button onClick={() => setshow("barra")}>Barra</button>
                    <button onClick={() => setshow("pizza")}>Pizza</button>
                    <button onClick={() => setshow("linha")}>Linha</button>
                </div>

                {show === "barra" && <h1>Gráfico de barra</h1>}
                {show === "pizza" && <h1>Gráfico de pizza</h1>}
                {show === "linha" && <h1>Gráfico de linha</h1>}
            </div>
        </>
        
    )
}

export default Charts