import ClientList from './ClientList'
import AdminList from './AdminList'

const OrderListPage = () => {
  const isAdmin = false
  return (
    <>
      { isAdmin ? <AdminList /> : <ClientList /> }
    </>
  )
}

export default OrderListPage;