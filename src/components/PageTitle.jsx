import s from '../styles/landing.module.css'

const PageTitle = ({ title, center = null }) => {
  
  return <section style={{marginBottom: '-60px'}}>
      <div className={s.sectionTitleBack}>{ title }</div>
      <div className={s.sectionTitleFore}>{ title }</div>
    </section>
}

export default PageTitle