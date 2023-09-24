import './PageContainer.scss';
import Header from '../Header/Header.jsx';
import { useLocation } from 'react-router-dom';

const PageContainer = ({children}) => {
    const {pathname} = useLocation();

    return (
        <div className="page-container">
            <Header pageName={pathname}/>
            {children}
        </div>
    );
}

export default PageContainer;