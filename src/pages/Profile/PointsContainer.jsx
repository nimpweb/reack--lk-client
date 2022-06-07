import React from 'react'

const PointsContainer = () => {
  return (
    <div>
      <p className="text-center muted-text">Добавление точек учета не доступно в Вашей версии личного кабинета. Если у Вас есть желание передавать показания, а также оплачивать коммунальную услугу "не выходя из дома", то <strong>обратитесь в свою сетевую огранизацию</strong> для представления Вам такой возможности.</p>
      <div><img style={{ maxWidth: 300, display: 'flex', margin: '0 auto', marginTop: 20}} src="./images/no-feature-access.png" alt="no feature access" /></div>
    </div>
  )
}

export default PointsContainer