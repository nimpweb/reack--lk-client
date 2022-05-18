import React, { useEffect, useState, useContext } from 'react';
import styles from '../create.module.css';
import { NavigateNext, NavigateBefore } from '@mui/icons-material';
import AccordeonBlock from '../../../../components/ui/AccordeonBlock';
import { NewInput, RadioList, NewSelect, Button, Layout} from '../../../../components/ui';
import ProjectPeriodList from './components/ProjectPeriodList';
import { Formik, Field, Form } from 'formik';
import { CreateOrderContext } from '..';

const Step2 = () => {

  const initialValues = {
      sid: 1,
      connectingType: 1,
      // connectionObjects
      devicesNames: 'Частный дом',
      kadastrNumber: '',
      devicesPlace: '',
      orderReason: ''
  }

  const [currentStep, setCurrentStep] = useState({
    sid: 1,
    toa: 1,
    receiving_devices: '',
    kad_num: '',
    mesto: '',
    order_reason: '',
    count_receving_points: 1,
    called_max_power: '',
    before_max_power: '',
    category_of_proof: '',
    un: 0.4,
    character_of_load: '', 
    project_period: [
      {year: '2002', kvartl: '2', power: '45'}
    ]
  });

  const [completed, setCompleted] = useState(false);

  const changeStep = (name, value) => {
    setCurrentStep(prev => {
      return {...prev, [name]: value}
    })
  }

  const onSubmit = (data) => {
    console.log('DATA_FROM_FROM', data);
    nextStep();
  }

  const {nextStep, prevStep} = useContext(CreateOrderContext);

  useEffect(( ) => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(values) => (
        <Form className={styles.stepContainer} >

          
          <AccordeonBlock 
            title="Тип присоединения" 
            subtitle="Можно подключиться не только постоянно, но и временно, пока проводятся основные работы по подключению или объект передвижной"
            open={true}
            initial={initialValues.connectingType}
          >
            <RadioList 
              title="" 
              name="toa"
              type="radio"
              items={[
                {id: 1, title: 'Постоянно подключение'}, 
                {id: 2, title: 'Временное, на период выполнения постоянно схемы электроснабжения'},
                {id: 3, title: 'Временное, подключения передвижного объекта'},
              ]}
              onChage={value => changeStep('toa', value)}
              value={currentStep.toa}
            />
          </AccordeonBlock>
        
          <AccordeonBlock
            title="Объект подключения"
            subtitle="Что присоединяем, где и по какой причине"
            open={true}
            disabled={false}
            >
              <Field 
                name="devicesNames"
                title="Наименование присоединяемых энергопринимающий устройств"
                type="input"
                as={NewInput}
                value={values.devicesNames}
              />
              <Field 
                name="kadastrNumber" 
                title="Кадастровый номер земельного участка, на котором расположено энергопринимающее устройство"
                type="input"
                as={NewInput}
                value={values.kadastrNumber}
              />
              <Field 
                name="devicesPlace"
                title="Местоположение энергопринимающий устройств"
                type="input"
                as={NewInput}
                value={values.devicesPlace}
              />

              <Field
                name=""
                title="Причина подачи заявки"
                type="select"
                as={NewSelect}
                items={[
                  {id: 1, title: 'Новое строительство'},
                  {id: 2, title: 'Увеличение максимальной мощности'},
                  {id: 3, title: 'Изменение точки присоединения'},
                  {id: 4, title: 'Изменение категории надежности'},
                  {id: 5, title: 'Изменение схемы электроснабжения'},
                  {id: 6, title: 'Перераспределение мощности'},
                  {id: 7, title: 'Смена собственника'},
                  {id: 8, title: 'Генерация'},
                ]}
                value={values.orderReason}
              />
          </AccordeonBlock>

          <AccordeonBlock
            title="Параметры подключения"
            subtitle="Требуемая мощность, категория надежности, напряжение и сроки"
            open={false}
            disabled={true}
          >
              <NewInput 
                title="Количество точек присоединения" 
                name="count_receving_points"
                required={true}
                onChange={value => changeStep('count_receving_points', value)}
                value={currentStep.count_receving_points}
              />
              <NewInput 
                title="Запрашваемая максимальная мощность" 
                name="called_max_power"
                required={true}
                onChange={value => changeStep('called_max_power', value)}
                value={currentStep.called_max_power}
              />
              <NewInput 
                title="В том числе ранее присоединенная максимальная мощность" 
                name="before_max_power"
                required={true}
                onChange={value =>changeStep('before_max_power', value)}
                value={currentStep.before_max_power}
              />
              <NewSelect 
                title="Категория надежности" 
                required={true}
                items={[
                  {id: 1, title: '(I): Первая категория'}, 
                  {id: 2, title: '(II): Вторая категория'}, 
                  {id: 3, title: '(III): Третья категория'}, 
                ]}
                name="category_of_proof"
                onChange={value => changeStep('category_of_proof', value)}
                value={currentStep.category_of_proof}
              />
              <NewSelect 
                title="Уровень напряжения"
                required={true}
                items={[
                  {id: 0.23, title: '0.23кВ'},
                  {id: 0.4, title: '0.4кВ'},
                  {id: 6, title: '6кВ'},
                  {id: 10, title: '10кВ'},
                ]}
                name="un"
                onChange={value => changeStep('un', value)}
                value={currentStep.un}
              />

              <NewSelect 
                title="Характер нагрузки (вид экономической деятельности)"
                required={true}
                items={[
                  {id: 1, title: 'Другое'},
                  {id: 2, title: 'Гостиницы и рестораны'},
                  {id: 3, title: 'Государственная деятельность и обеспечение военной безопасности'},
                  {id: 4, title: 'Добыча полезных ископаемых'},
                  {id: 5, title: 'Здравоохранение и представление социальных услуг'},
                ]}
                name="character_of_load"
                onChange={value => changeStep('character_of_load', value)}
                value={currentStep.character_of_load}
              />

              <ProjectPeriodList 
                items={currentStep.project_period}
                setItems={(items) => setCurrentStep(prev => ({...prev, project_period: [...items]}))}
              />
          </AccordeonBlock>

          <div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            </div>
          <Layout margin='20px 0' content="flex-start">
            <Button type="button" onClick={prevStep}><NavigateBefore /> Назад</Button>
            <Button type="submit">Далее к добавлению документов <NavigateNext /></Button>
          </Layout>
        </Form>
      )}
    </Formik>
  );
};

export default Step2;
