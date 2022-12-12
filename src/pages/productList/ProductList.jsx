// import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
// import { DeleteOutline } from "@material-ui/icons";
// import { productRows } from "../../dummyData";
// import { productReducer } from "../../reducers/productReducer";
import { Link } from "react-router-dom";
// import { useContext, useState,useEffect } from "react";

// import Card from 'react-bootstrap/Card'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Badge from 'react-bootstrap/Badge'

// export default function ProductList(
// 	{ products: { _id, name, cost, amount } }
// 	) {
//   const [data, setData] = useState(productRows);
//   // const{prodcutStage: {products,productLoading}, readAll} = useContext(productReducer)
//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };
// // useEffect(()=>readAll(),[])


//   const columns = [
//     { field: {_id}, headerName: "ID", width: 90 },
//     {
//       field: {name},
//       headerName: "Sản phẩm",
//       width: 150,
//     //   renderCell: (params) => {
//     //     return (
//     //       <div className="productListItem">
//     //         <img className="productListImg" src={params.row.img} alt="" />
//     //         {params.row.name}
//     //       </div>
//     //     );
//     //   },
//     },
//     { field: {cost}, headerName: "Giá", width: 100 },
//     {
// 		field: {amount},
//       headerName: "Số lượng",
//       width: 140,
//     },
//     // {
//     //   field: "supplier",
//     //   headerName: "Nhà cung cấp",
//     //   width: 200,
//     // },
// 	// {
// 	// 	field: "description",
// 	// 	headerName: "Mô tả",
// 	// 	width: 190,
// 	// },
//     {
//       field: "action",
//       headerName: "Thao tác",
//       width: 150,
//       renderCell: (params) => {
//         return (
//           <>
//             <Link to={"/product/" + params.row.id}>
//               <button className="productListEdit">Sửa</button>
//             </Link>
//             <DeleteOutline
//               className="productListDelete"
//               onClick={() => handleDelete(params.row.id)}
//             />
//           </>
//         );
//       },
//     },
//   ];
//   return (
//     <div className="productList">
//       <Link to="/newproduct">
//       <button className="productAddButton">Thêm mới</button>
//     </Link>
//       <DataGrid
//         rows={data}
//         disableSelectionOnClick
//         columns={columns}
//         pageSize={8}
//         checkboxSelection
//       />  
//     </div>
    
//   );
// }


import { ProductContext } from '../../contexts/productContext'
import { useContext, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Toast from 'react-bootstrap/Toast'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Col from 'react-bootstrap/Col'
import SingleProduct from '../../components/product/ViewProductList'


const ProductList = () => {
	// Contexts
	const {
		productState: { product, products, productsLoading },
		readAll,
		setShowAddProductModal,
		showToast: { show, message, type },
		setShowToast
	} = useContext(ProductContext)

	// Start: Get all posts
	useEffect(() => {readAll()}, [])
	// let columns = (
	// 	{products,map(products => (
	// 		{ field: {products._id}, headerName: "ID", width: 90 }
			
	// 	))},
	// 	    { field: {_id}, headerName: "ID", width: 90 },
	// 	    {
	// 	      field: {name},
	// 	      headerName: "Sản phẩm",
	// 	      width: 150,
	// 	    //   renderCell: (params) => {
	// 	    //     return (
	// 	    //       <div className="productListItem">
	// 	    //         <img className="productListImg" src={params.row.img} alt="" />
	// 	    //         {params.row.name}
	// 	    //       </div>
	// 	    //     );
	// 	    //   },
	// 	    },
	// 	    { field: {cost}, headerName: "Giá", width: 100 },
	// 	    {
	// 			field: {amount},
	// 	      headerName: "Số lượng",
	// 	      width: 140,
	// 	    },
	// 	    // {
	// 	    //   field: "supplier",
	// 	    //   headerName: "Nhà cung cấp",
	// 	    //   width: 200,
	// 	    // },
	// 		// {
	// 		// 	field: "description",
	// 		// 	headerName: "Mô tả",
	// 		// 	width: 190,
	// 		// },
	// 	    {
	// 	      field: "action",
	// 	      headerName: "Thao tác",
	// 	      width: 150,
	// 	    //   renderCell: (params) => {
	// 	    //     return (
	// 	    //       <>
	// 	    //         <Link to={"/product/" + params.row.id}>
	// 	    //           <button className="productListEdit">Sửa</button>
	// 	    //         </Link>
	// 	    //         <DeleteOutline
	// 	    //           className="productListDelete"
	// 	    //           onClick={() => handleDelete(params.row.id)}
	// 	    //         />
	// 	    //       </>
	// 	    //     );
	// 	    //   },
	// 	    },
	// )

	let body = null
		body = (
			<>
				<Row className='row-cols-1 row-cols-md-3 g-4 mx-auto mt-3'>
					{products.map(products => (
						
						<Col key={products._id} className='my-2'>
							<SingleProduct products={products} />
						</Col>
					))}
				</Row>

				{/* Open Add Post Modal */}
				<OverlayTrigger
					placement='left'
					overlay={<Tooltip>Add a new thing to learn</Tooltip>}
				>
					<Button
						className='btn-floating'
						onClick={setShowAddProductModal.bind(this, true)}
					>
						{/* <img src={addIcon} alt='add-post' width='60' height='60' /> */}
					</Button>
				</OverlayTrigger>
			</>
			)
{/* <>
{products.map(products => (
						
						<div className="productList">
						<Link to="/newproduct">
						<button className="productAddButton">Thêm mới</button>
						</Link>
						<DataGrid
							rows={products}
							disableSelectionOnClick
							columns={SingleProduct}
							pageSize={8}
							checkboxSelection
						  />  
						</div>
								))
							}
</> */}
	

	return (
		<>
			{body}
			{/* <AddPostModal />
			{post !== null && <UpdatePostModal />}
	
			<Toast
				show={show}
				style={{ position: 'fixed', top: '20%', right: '10px' }}
				className={`bg-${type} text-white`}
				onClose={setShowToast.bind(this, {
					show: false,
					message: '',
					type: null
				})}
				delay={3000}
				autohide
			>
				<Toast.Body>
					<strong>{message}</strong>
				</Toast.Body>
			</Toast> */}
		</>
	)
}

export default ProductList