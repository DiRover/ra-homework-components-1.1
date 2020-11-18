import React from 'react';
import PropTypes from 'prop-types'
import ItemModel from './models/item.model';


export default function ShopItem(props) {
    const { item } = props;
    return (<div style={mainContent}> {/*className="main-content"*/} 
            <h2>{ item.brand }</h2>
            <h1>{ item.title }</h1>
            <h3>{ item.description }</h3>
            <div style={description}>
            { item.descriptionFull }
            </div>
            <div className="highlight-window  mobile"><div className="highlight-overlay"></div></div>
            <div className="divider"></div>
            <div style={purchaseInfo}>
            <div className="price">{ item.currency }{ item.price }</div>
              <button>Добавить в корзину</button>
            </div>  
          </div>)
}


ShopItem.propTypes = {
  item: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    descriptionFull: PropTypes.string,
    price: PropTypes.number,
    currency: PropTypes.string,
  })
};

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