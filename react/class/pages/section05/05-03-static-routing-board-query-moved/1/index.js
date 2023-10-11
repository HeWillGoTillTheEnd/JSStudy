import { useQuery, gql} from '@apollo/client'

const FETCH_BOARD = gql`
query{
    fetchBoard(number:1){
        number
        writer
        title
        contents
    }
}
`


export default function StaticRoutingMovedPage(){
    const { data } = useQuery(FETCH_BOARD)
        
    return <div>1번 게시글쿼리페이지 이동이 완료되었습니다.</div>
}