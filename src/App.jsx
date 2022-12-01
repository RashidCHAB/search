import React, { useState } from 'react';
import Card from './Card';
import "./App.css"


const App = () => {
    const [text, setText] = useState('')
    const [productList, setProductList] = useState([
        { name: "Тапки", price: 300, src: "https://cdn1.ozone.ru/s3/multimedia-5/wc1000/6413372993.jpg" },
        { name: "Лапки", price: 400, src: "https://cdn1.ozone.ru/s3/multimedia-9/wc1000/6255903345.jpg" },
        { name: "Папки", price: 1200, src: "https://cdn1.ozone.ru/s3/multimedia-x/wc1000/6315769785.jpg" },
        { name: "Кепки", price: 37000, src: "https://cdn1.ozone.ru/s3/multimedia-k/wc1000/6332894252.jpg" },
        { name: "Репки", price: 5, src: "https://cdn1.ozone.ru/s3/multimedia-s/wc1000/6382794256.jpg" },
        { name: "Лепки", price: 12301203, src: "https://cdn1.ozone.ru/s3/multimedia-x/wc1000/6061296009.jpg" },
    ])
    const filtered = productList.filter((item, index) => {
        return item.name.toLowerCase().includes(text.toLowerCase())
    })

    const handleText = (e, newText) => {
        setText(newText)
        console.log(text)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        setText('')
    }

    return (
        <>

            <form onSubmit={handleSearch} className="search">
                <input type="text" className="searchinput"value={text} onChange={(e) => handleText(e, e.target.value)}/>
            </form>

            <div className='cards'>
                {filtered.map((item) => <Card name={item.name} price={item.price} src={item.src} />)}
            </div>
        </>
    );
};

export default App;