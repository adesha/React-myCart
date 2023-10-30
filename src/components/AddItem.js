import React from 'react'


class AddItem extends React.Component {
    constructor(props){
        super(props)
        this.state={
            productName:"",
            productPrice:0
        };
    }
    render() { 
        return (
            <form className='row mb-5' onSubmit={(e)=>
            {
                e.preventDefault()
                this.props.addItem(this.state.productName,Number(this.state.productPrice))}}>
  <div className="mb-3 col-6">

    <label
      className="form-label"
      htmlFor="imputName"
    >
      Name
    </label>

    <input
      aria-describedby="Name"
      className="form-control"
      id="imputName"
      type="text"
      name='productName'
      onChange={(e)=>{
        this.setState({productName:e.currentTarget.value})
      }}
      value={this.state.productName}
    />
 
  </div>
  <div className="mb-3 col-6">

    <label
      className="form-label"
      htmlFor="inputPrice"
    >
      Price
    </label>

    <input
      className="form-control"
      id="inputPrice"
      type="number"
      name='productPrice'
      onChange={(e)=>{
        this.setState({productPrice: Number(e.currentTarget.value)})
      }}
      value={this.state.productPrice}
    />

  </div>
 
  <button
    className="btn btn-primary"
    type="submit"
  >
    Add
  </button>
</form>
        );
    }
}
 
export default AddItem;