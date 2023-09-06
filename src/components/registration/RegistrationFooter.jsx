import React from 'react'
import './Form.css'

const RegistrationFooter = () => {
  return (
    <div>
      <div>
      <nav className="container-links">
          <a href="">Политика конфиденциальности</a>
          <a href=""> <ul> <li>Условия использования</li> </ul> </a>
        </nav>

        <div>
          <select className="select" id="">
            <option value="">Кыргызский</option>
            <option value="">Русский</option>
            <option value="">English</option>
            <option value="">Azərbaycan</option>
            <option value="">Türkmenler</option>
            <option value="">Deutsch</option>
            <option value="">한국인</option>
            <option value="">Türkçe</option>
            <option value="">Français</option>
          </select>
        </div>
        <div className="line"></div>

        <img className="img_logo" src="https://1000logos.net/wp-content/uploads/2020/08/Atlassian-Logo.png" alt="" />
      </div>
      
      <div className="div_p">
        <p>Шаблоны</p>
        <p>Цены</p>
        <p>Приложения</p>
        <p>Вакансии</p>
        <p>Блог</p>
        <p>Разработчики</p>
        <p>О нас</p>
        <p>Помощь</p>
      </div>

    </div>
  )
}

export default RegistrationFooter
