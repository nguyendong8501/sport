import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import { CollectionsTwoTone } from '@material-ui/icons'
// import ActionButtons from './ActionButtons'

const SingleProduct = ({ products: { _id, name, cost, amount } }) => (
	// const [rowData, setRowData] = useState([]);

    // const [colDefs, setColDefs] = useState(
    //     [
    //         {field:"make"},
    //         {field:"model"},
    //         {field:"price", editable:true}
    //     ]);

	


	<Card
		className='shadow'
		
	>
		<Card.Body>
			<Card.Title>
				<Row>
					<Col>
						<p className='post-title'>{name}</p>
						<Badge
							pill
						>
							{cost}
						</Badge>
					</Col>
					<Col className='text-right'>
						{/* <ActionButtons url={url} _id={_id} /> */}
					</Col>
				</Row>
			</Card.Title>
			{/* <Card.Text>{cost}</Card.Text> */}
			<Card.Text>{amount}</Card.Text>

		</Card.Body>
	</Card>
)

export default SingleProduct