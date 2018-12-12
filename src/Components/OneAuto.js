import React, { Component } from 'react';
import '../Style/OneAuto.css'
import { connect } from 'react-redux';
import { getImageThunk } from './../reducers/oneAuto';

// const OneAuto = (props) => {
//   const { data } = props;
//   debugger
//   return (
//     <div className="wrapper-one-auto">
//       <span className="title-car">{data.subject}</span>
//       <div className="wrapper-price">
//         <span className="price-byn">{data.price_byn}р.</span>
//         <span className="price-usd">{data.price_usd}$</span>
//       </div>
//     </div>
//   )
// };

class OneAuto extends Component {
  componentDidMount() {    
    const { getImage } = this.props;
    debugger
    getImage(this.props.data.images[0].id);
  }

  render() {
    const { data } = this.props;
    const { id } = this.props.data.images[0];
    const prevId = [ id[0], id[1] ].join('');
    return (
      <div className="wrapper-one-auto">
      <img src={`https://content.kufar.by/line_thumbs_2x/${prevId}/${id}.jpg`} alt='img'/>
        <div className="wrapper-title-price">
          <span className="title-car">{data.subject}</span>
          <div className="wrapper-price">
            <span className="price-byn">{data.price_byn}р.</span>
            <span className="price-usd">{data.price_usd}$</span>
          </div>
        </div>
        
      </div>
    )
  }  
}

const mapStateToProps = state => ({
  image: state.oneAuto.image,
  isReady: state.oneAuto.isReady
})

const mapDispatchToProps = dispatch => ({
  getImage: (id) => {
    dispatch(getImageThunk(id))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(OneAuto);
// export default OneAuto;