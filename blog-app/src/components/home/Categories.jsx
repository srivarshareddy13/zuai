import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
const Categories = () => {

    return (
        <>
            <Link to='/create' style={{ textDecoration: 'none' }}>
                <Button variant='contained'>Create Blog</Button>
            </Link>
        </>
    )
}
export default Categories