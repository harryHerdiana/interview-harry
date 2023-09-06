import { useQuery, gql } from "@apollo/client";

const GET_EXAMPLE = gql`
query MyQuery {
    example_table {
      id
      name
    }
  }
`

const BookingPageComponent:React.FC = ()=>{

    const { loading, error, data } = useQuery(GET_EXAMPLE);
    console.log(data)
    return(<div>Test123</div>)
}

export default BookingPageComponent