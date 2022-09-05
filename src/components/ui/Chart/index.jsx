import React from 'react'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import styles from './chart.module.css'

export default function Chart({title, data, dataKey, grid}) {
  return (
    <div className={styles.chart}>
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd"/>
          <Line type="monotone" stroke="#5550bd" dataKey={dataKey} />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="3 3" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
