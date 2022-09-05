import React, { useEffect } from 'react'
import { Formik, Field, Form } from 'formik'
import { Button, Card, NewInput  } from '../../components/ui'
import { Check, Password, Publish } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/slices/user';
import { getMe } from './../../redux/slices/user';
import './profile.css'
import AddDocumentContainer from './AddDocumentContainer';
import PointsContainer from './PointsContainer';
import Tabs from './../../components/ui/Tabs/index';

export default function ProfilePage(props) {

  const dispatch = useDispatch();
  const { currentUser } = useSelector(store => store.user);

  const initialValues = {
    firstName: currentUser.firstName,
    middleName: currentUser.middleName,
    lastName: currentUser.lastName,
    name: '',
    email: currentUser.email,
    phone: currentUser.phone,
    avatar: currentUser.avatar
  }

  const handleFormikSubmit = (data, {setSubmitting}) => {
    setSubmitting(true);
    new Promise( async (resolve) => {
      await updateUser(dispatch, data);
      await getMe(dispatch);
      resolve();
    }).finally(() => {
      setSubmitting(false);
    })
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="profile">
      {props.title && <h1 className="pageTitle">{props.title}</h1>}
      <div className="profileAllContainer">
      <Card className="profileInputs">
        <Formik initialValues={initialValues} onSubmit={handleFormikSubmit}>
          { ({ values, isSubmitting }) => {
            return (
              <Form className="profileContainer"> 
                <div className="profileSides">
                  <div className="profileLeftColumn">
                    <Field name="firstName" type="input" as={NewInput} title="Фамилия" value={values.firstName} />
                    <Field name="middleName" type="input" as={NewInput} title="Имя" value={values.middleName} />
                    <Field name="lastName" type="input" as={NewInput} title="Отчество" value={values.lastName} />
                  </div>
                  <div className="profileRightColumn">
                    <Field name="email" type="input" as={NewInput} title="Электронная почта" value={values.email} />
                    <Field name="phone" type="input" as={NewInput} title="Мобильный телефон" value={values.phone} />
                    <div className="profileImage">
                      <input type="file" className="hide" />
                      <img className="profileAvatar" src={`/images/avatar/${values.avatar}`} alt="" />
                      <Button variant="icon" onClick={() => {}} style={{marginLeft: 10}}><Publish /></Button>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="profileButtons">
                  <Button  type="submit" variant="rounded" color="green" disabled={isSubmitting} onClick={() => {}}><Check /> Сохранить изменения</Button>
                  <Button onClick={() => {}}><Password /> Сменить пароль</Button>
                </div>
              </Form>
            )
          }
        }
        </Formik>
        <br /><br />
        <Tabs selected={0} items={[
          {title: 'Ваши документы',component: AddDocumentContainer},
          {title: 'Точки учета', component: PointsContainer}
        ]} />
      </Card>
      </div>
    </div>
  )
}
