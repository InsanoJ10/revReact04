import { useState } from 'react'
import s from './Charts.module.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import { Menu } from './components/menu'
import { GBarra } from './components/barCharts';
import { GLinha } from './components/lineCharts';
import { GPizza } from './components/pieChart';

function Charts(){

const [show, setshow] = useState("")

    return(
        <>
            <Menu/>
            <div className={s.wrapCharts}>
                <div className={s.wrapBtns}>
                    <button className={s.btn} onClick={() => setshow("barra")}>Barra</button>
                    <button className={s.btn} onClick={() => setshow("pizza")}>Pizza</button>
                    <button className={s.btn} onClick={() => setshow("linha")}>Linha</button>
                </div>
                
                    {show === "barra" && <GBarra/>}
                    {show === "pizza" &&  <GPizza/>}
                    {show === "linha" && <GLinha/>}
                
            </div>
        </>
        
    )
}

export default Charts