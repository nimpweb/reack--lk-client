import React, {useState} from 'react'
import { Confirm, Modal, Tabs, Button } from '../../../components/ui';
import cn from 'classnames';
import styles from './detail.module.css';
import { AddLink, Done, DeleteForever, DoNotDisturb, PictureAsPdf, PublishedWithChanges } from '@mui/icons-material';
import DocumentComponent from './DocumentComponent';
import EventsComponent from './EventsComponent';
import CartComponent from './CartComponent';
import SchetComponent from './SchetComponent';
import AppealsComponent from './AppealsComponent';
import NewSelect from './../../../components/ui/NewSelect/index';

export default function OrderDetailPage() {

  const [modalCancelOrder, setModalCancelOrder ] = useState(false);
  const [modalSk, setModalSk] = useState(false)
  
  const order = {
    id: 456,
    number: 456,
    networkCompany: {
      id: 45,
      title: 'ООО "Сетевые решения"'
    },
    gp: {
      id: 34,
      title: 'АО "Энергосбытовая компания "Восток"',
    },
    gpUser: {
      id: 567,
      title: 'Иван С. Владимирович',
      email: 'ivan@mail.ru'
    },
    createdAt: '19.05.2021 08:17',
    lastModifiedAt: '21.05.2021 11:42',
    finishedAt: '19.011.2021 08:17',
    title: 'Заявка на технологическое присоединение физического лица до 15кВт',
    state: 1,
    stateText: 'Принята в работу',
    statusText: 'Заявка принята к рассмотрению',
    actions: [
      {
        id: 123456,
        date: '19.05.2021 в 08:17',
        user: {
          id: 456,
          title: 'Заявитель',
          avatar: 'default.jpg',
        },
        content: 'Заявка подана'
      },
      {
        id: 345345,
        date: '21.05.2021 в 11:42',
        user: {
          id: 456,
          title: 'ООО "Сетевые решения"',
          avatar: 'default.jpg'
        },
        content: 'Заявка принята к рассмотрению'
      }
    ],
    payment: {
      price: 550,
      payed: 0,
      paymentComplete: '08.01.2021 21:36',
      items: [
        {
          title: '01Ф-11098793',
          date: '17.07.2020',
          payDate: '31.07.2020',
          money: '550',
          payed: false,
          link: 'https://yandex.ru/images/search?pos=0&img_url=https%3A%2F%2Fsposob-zarabotat.ru%2Fwp-content%2Fuploads%2F2018%2F10%2Fobrazec.png&text=%D1%81%D1%87%D0%B5%D1%82%20%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80&lr=48&rpt=simage&source=wiz&rlt_url=http%3A%2F%2F1s.obrabotki.com%2Fupload%2Fiblock%2F3ba%2F3ba827ab33f7d7bdd7a8cdd489b855d3.png&ogl_url=https%3A%2F%2Fsposob-zarabotat.ru%2Fwp-content%2Fuploads%2F2018%2F10%2Fobrazec.png'
        }
      ],
    },
    documents: [
      {
        id: 67,
        documentId: 1,
        title: 'План расположения энергопринимающих устройств',
        user: {
          title: 'Заявитель',
          canRemove: false,
          canDownload: true,
          canSign: false
        },
        filename: '',
        fileExt: 'pdf',
        downloadLink: '',
        downloadSignedLink: '',
        createdAt: '08.01.2022',
      },
      {
        id: 167,
        documentId: 2,
        title: 'Копия документа, подтверждающего право собственности',
        user: {
          title: 'Заявитель',
          canRemove: true,
          canDownload: true,
          canSign: false
        },
        filename: '',
        fileExt: 'pdf',
        downloadLink: '',
        downloadSignedLink: '',
        createdAt: '08.01.2022',
      },
      {
        id: 178,
        documentId: 2,
        title: 'Копия паспорта заявителя',
        user: {
          title: 'Заявитель',
          canRemove: false,
          canDownload: true,
          canSign: true
        },
        filename: '',
        fileExt: 'pdf',
        downloadLink: '',
        downloadSignedLink: '',
        createdAt: '08.01.2022',
      },
      {
        id: 245,
        documentId: 8,
        title: 'Счет на оплату технологического присоединения №175 от 26.12.2021г.',
        user: {
          title: 'ООО "Сетевая компания"',
          canRemove: false,
          canDownload: true,
          canSign: false
        },
        filename: '',
        fileExt: 'pdf',
        downloadLink: '',
        downloadSignedLink: '',
        createdAt: '08.01.2022',
      },
    ],
    appeals: [
      { id: 111, number: '3056/896', date: '25.05.2022 в 12:12', text: 'Прошу Вас разъяснить причину отказа в оформление технологического присоединения' }
    ]
  };

  const Noop = () => <div>Nothing has in this compoennt</div>

  const tabItems = [
    {title: 'Документы', component: () => DocumentComponent(order.documents)}, 
    {title: 'События', component: () => EventsComponent( {events: order.actions} )}, 
    {title: 'Детали заявки', component: () => CartComponent({ data: {} })},
    {title: 'Выписанные счета', component: () => SchetComponent(order.schet)},
    {title: 'Обращения', component: () => AppealsComponent() }
  ];

  const handleCreateAppeal = (orderId) => {
    console.log('create new appeal on order ', orderId)
  }

  const handleCancelOrder = (orderId) => {
    console.log('cancel the order by ', orderId)
  }

  return (
    <div className={styles.orderDetail}>
          <h3>{order.title}</h3>
          <div className="text-left mt20px">
            {order.number && (
              <p className={styles.detailText}>Регистрационный номер:
              <span>{order.number}</span>
              &nbsp;&nbsp;<span className={styles.stateSuccess}>{order.stateText}</span>
              </p>
            )}
            {order.stateText && <p className={styles.detailText}>Статус заявки: <span>{order.statusText}</span></p>}
            <p className={styles.detailText}>Создана: <span>{order.createdAt}</span></p>
            <p className={styles.detailText}>Действительна до: <span>{order.finishedAt}</span></p>
            {order.networkCompany && <p className={styles.detailText}>Сетевая компания: <span>{order.networkCompany.title}</span><Button variant="icon" onClick={() => setModalSk(true)}><PublishedWithChanges /></Button></p>}
            {order.gp && <p className={styles.detailText}>Гарантирующий поставщик: <span>{order.gp.title}</span><Button variant="icon"><PublishedWithChanges /></Button></p>}

            <hr />
            <div className={styles.actionsContainer}>
              <ul className={styles.donwloadFileList}>
                <li>
                  <span className={styles.downloadFileLink}>
                    <PictureAsPdf />
                    Сформировать заполненную заявку на технологическое присоединение в формате PDF
                  </span>
                </li>
                <li>
                  <span className={styles.downloadFileLink}>
                    <PictureAsPdf />
                    Сформировать согласие субъекта на обработку персональных данных
                  </span>
                </li>
              </ul>
              <div className={styles.buttonsContainer}>
                <Button><AddLink style={{color: 'white', fontWeight: '600'}} /> Создать обращение к этой заявке</Button>
                <Button color="red" onClick={() => setModalCancelOrder(true)}> <DeleteForever style={{color: 'wite'}} />Отменить заявку</Button>
              </div>
            </div>
            <p className={styles.orderDetailWarningMessage}><strong>Внимание!</strong> Для продолжения оформления завки на технологическое присоединение, необходимо прислать подписанный вариант этой самой заявки. Для удобства можно выгрузить уже готовый документ, распечатать его и приложить вложением к текущей заявке. </p>

            <hr />

            <br />
            <Tabs selected={1} items={tabItems} />

            {
              modalCancelOrder && (
                <Modal onClose={() => setModalCancelOrder(false)} width={500}>
                  Вы действительно хотите отменить поданную завку на технологическое присоедиение?
                  <hr />
                  <div class="d-flex-15 d-flex-cc w-100">
                    <Button color="red"><Done />Да</Button>
                    <Button onClick={() => setModalCancelOrder(false)}><DoNotDisturb />Нет</Button>
                  </div>
                </Modal>
              )
            }

            {
              modalSk && (
                <Modal title="Изменить Сетевую компанию" onClose={() => setModalSk(false)} width={500}>
                  <NewSelect
                    items={[
                      { id: 333, value: 'ООО "Лето в европе' },
                      { id: 232, value: 'ОАО "Дело в пенькове' },
                    ]}
                  />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi beatae quisquam sed quos dolorem eaque quas nobis labore nisi, molestiae placeat? Ratione at iure corporis, corrupti minus quis id a.
                  Labore suscipit consequuntur sed nostrum ipsum fugiat ut maiores voluptate quaerat enim repellat recusandae possimus praesentium veniam, tempora modi deleniti eaque obcaecati dolorem error sunt omnis qui, magni corporis? Similique.
                </Modal>
              )
            }

          </div>
    </div>
  )
}



