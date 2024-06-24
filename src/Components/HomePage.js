import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
    const [selectedCity, setSelectedCity] = useState('Одеса');

    const updateSelectedCity = (city) => {
        setSelectedCity(city);
    };

    return (
        <div>
            {/* First Header */}
            <header className="container-fluid bg-custom-white small-header">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="city-select-container">
                        <button className="city-select-btn">
                            Виберіть місто: <span>{selectedCity}</span>
                        </button>
                        <div className="city-dropdown">
                            <a href="#" onClick={() => updateSelectedCity('Одеса')}>Одеса</a>
                            <a href="#" onClick={() => updateSelectedCity('Київ')}>Київ</a>
                            <a href="#" onClick={() => updateSelectedCity('Львів')}>Львів</a>
                        </div>
                    </div>
                    <div className="phone-number">+38 (099) 555-35-35</div>
                </div>
            </header>

            {/* Second Header */}
            <header className="container-fluid bg-custom-burgundy py-2 text-white">
                <div className="container d-flex justify-content-between align-items-center">
                    <div>BOTANICA</div>
                    <nav>
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">
                                    <i className="fas fa-heart"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">
                                    <i className="fas fa-shopping-cart"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white d-flex align-items-center" href="#">
                                    <i className="fas fa-user"></i>
                                    <span className="ml-2">Кабінет</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Third Header */}
            <header className="container-fluid bg-custom-gold py-2 text-white">
                <div className="container d-flex justify-content-center align-items-center">
                    <button className="catalog-btn">Каталог товарів</button>
                    <button className="new-btn">NEW</button>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search..."
                    />
                </div>
            </header>

            {/* Banner Image with Text */}
            <div className="banner-container">
                <img src="/images/Header.png" alt="Banner" className="banner-image" />
                <div className="banner-text">
                    <h1>Новий рік з &lt;&lt; BOTANICA &gt;&gt;</h1>
                    <p>Дуууже привабливі знижки</p>
                </div>
            </div>

            {/* Main Content */}
            <main className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <h1>Ласкаво просимо на нашу головну сторінку!</h1>
                        <p>Тут ви знайдете інформацію про наші послуги та пропозиції.</p>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="container-fluid bg-light py-3">
                <div className="container text-center">
                    <p>&copy; 2024 Ваша компанія. Всі права захищені.</p>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a href="#" className="text-muted">Політика конфіденційності</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#" className="text-muted">Умови використання</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#" className="text-muted">Контакти</a>
                        </li>

                        
                    </ul>
                </div>
            </footer>
        </div>
    );
};



export default HomePage;



