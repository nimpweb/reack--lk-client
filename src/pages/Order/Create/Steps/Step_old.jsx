import React from 'react'
import styles from '../create.module.css'

export default function Step1() {
  return (
    <div className={styles.stepContainer}>
            <Card title="Выбор заявителя">
        <RadioList 
          type="radio" 
          title="" 
          name="sid" 
          items={[{id: 1, title: 'Физическое лицо'}, {id: 2, title: 'Юридическое лицо или ИП'}]} 
          onChange={handleSidChange}
        />
      </Card>

      <Card title="Проверьте персональные данные заявителя">
        <div className={styles.personalBlock}>
          <div className="c-2">
            <NewInput title="ФИО заявителя" name="applicantFio" />
            <NewInput title="Номер телефона" name="applicantPhone" />
          </div>
          <NewInput title="Фактический адрес" name="applicantPhone" />
        </div>
        <div>
        <div>
          <div className="c-2">
            <NewSelect 
              title="Вид документа" 
              items={[
                {id: 1, title: 'паспорт'},
                {id: 2, title: 'заграничный паспорт'},
                {id: 3, title: 'водительское удостоверение'},
              ]} 
            />
            <div className='c-3'>
              <NewInput title="Серия" />
              <NewInput title="Номер" />
              <NewInput title="Дата выдачи" />
            </div>
          </div>
        </div>
        
        <NewInput type="textarea" title="Кем выдан" rows={2} onChange={value => console.log(value)}/>
        </div>
      </Card>

      <Card title="Объект подключения" mt={20}>
        <div className="c-2">
          <NewSelect 
            title="Причина подачи заявки" 
            items={[
              {id: 1, title: 'Новое строительство'},
              {id: 2, title: 'Увеличение максимальной мощности'},
              {id: 3, title: 'Изменение точки присоединения'},
              {id: 4, title: 'Изменение категории надежности'},
            ]}
          />
          <NewInput title="Кадастровый номер" />
        </div>
        <NewInput type="textarea" rows={2} title="Наименование присоединяемых энегропринимающий устройств" />
        <NewInput title="Место нахождения энергопринимающих устройств" />
      </Card>

      <Card title="Параметры подключения" mt={20}>

      </Card>

      <Card title="Гарантирующий поставщик  (энергосбытовая организация), с которым планируется заключение договора электроснабжения (купли-продажи электрической энергии (мощности)" mt={20}>
        <NewSelect 
          title="Гарантирующий поставщик" 
          items={[
            {id: 1, title: 'АО "ЭнергосбыТ Плюс"'},
            {id: 2, title: 'АО "Энергосбытовая компания "Восток"'},
          ]}
        />

      </Card>

      <Card>
        <div className={styles.orderCreate}>
          <Form >

            <div>
              <p>Ваша сетевая компания: <strong>ООО "Энергохолдинг"</strong></p>
            </div>

            <RadioList 
              type="radio"
              name="maxPower"
              title="Максимальная мощность" 
              items={[
                {id: 1, title: 'Менее 15 кВт'},
                {id: 2, title: 'Свыше 15 кВт и менее 150 кВт'},
                {id: 3, title: 'Свыше 150 кВт'}
              ]} 
              onChange={id => setMaxPower(id)}
              value={maxPower}
            />

            <RadioList 
              type="radio" 
              title="Схема электроснабжения" 
              name="schetma" 
              items={[
                {id: 1, title: 'постоянная'},
                {id: 2, title: 'временная'},
              ]}
            />


            {/* <Input {...register('firstName')} id="firstName" type="text" label="FirstName" name="firstName" />
            <Input {...register('middleName')} id="firstName" type="text" label="MiddleName" name="middleName" /> */}
            <div className={styles.currentCompanyContainer}>Ваша сетевая компания: <span>ООО "Энергохолдинг"</span> <img src="/images/companies/z.png" alt="" /></div>
            <div>
              <Select variant='filled'>
                <option value="1">ООО "Энергохолдинг"</option>
                <option value="2">ООО "Электросетевая компания"</option>
              </Select>
            </div>

            <p>Заявитель: <span>Иванов Иван Сергеевич</span></p>
            <p>Номер телефона: <span>+7(3532)65-45-78</span></p>
          </Form>
          <ul>
            <li>Выбор сетевой компании</li>
            <li>подтверждение персональных данных</li>
            <li>Обработка если представитель заявителя</li>
          </ul>
        </div>
      </Card>
    </div>
  )
}
