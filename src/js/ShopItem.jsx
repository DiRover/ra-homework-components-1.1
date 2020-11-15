import React from 'react'

export default function ShopItem() {

    return (<div style={mainContent}> {/*className="main-content"*/} 
            <h2>Tiger of Sweden</h2>
            <h1>Leonard coat</h1>
            <h3>Minimalistic coat in cotton-blend</h3>
            <div style={description}>
              Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.
            </div>
            <div className="highlight-window  mobile"><div className="highlight-overlay"></div></div>
            <div className="divider"></div>
            <div style={purchaseInfo}>
            <div className="price">£399.00</div>
              <button>Добавить в корзину</button>
            </div>  
          </div>)
}

const mainContent = {
  backgroundColor: '#BEBEBE',
  color: '#483D8B',
  margin: '10px auto 0',
  width: '400px',
  padding: '5px',
  border: '2px dashed #2F4F4F'
};

const description = {
  margineTOP: '2px',
  marginBottom: '20px',
};

const purchaseInfo = {
  display: 'flex',
  justifyContent: 'space-between'
}